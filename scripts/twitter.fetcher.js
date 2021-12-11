const url = require('url')
const path = require('path')
const cheerio = require('cheerio')
const { download: originalDownload } = require('./utils')

// const basedir = path.resolve(__dirname, '../twitter.com')
// const url = 'https://twitter.com'

const basedir = path.resolve(__dirname, '../binance-igo.com')
const URL = 'https://www.binance.com/en/nft/event/gameofferinglandingpage'

/**
 * wipe dynamic data.
 * all mess processing
 *
 * @param {string} code
 * @returns {string}
 */
function wipeDynamic(code) {
  const HOLDER = 'WIPED'
  // NOTE "sha" doesn't look like runtime dynamic
  return code
    .replace(/nonce=".*?"/g, `nonce="${HOLDER}"`)
    .replace(/(decodeURIComponent\(.gt)=\d+(;.*?);/, `$1=42;`)
    .replace(/("serverDate":\s?)\d+/g, `$1 42`)
    .replace(/("guestId":\s?)('|")\d+\2/g, `$1'${HOLDER}'`)
    .replace(/(\/\/# sourceMappingURL=).*?\.map/, `$1${HOLDER}`) // We don't care about source map
    .replace(/("country"):"\w\w"/, `$1:"${HOLDER}"`)
    .replace(/("settingsVersion"):('|")(.*?)\2/, `$1:'${HOLDER}'`)
    .replace(/("featureSetToken"):('|")(.*?)\2/, `$1:'${HOLDER}'`)
    .replace(/("impression_pointers"):{.*?}/, '$1:{}')
    .replace(/("impressions"):{"\w+":.*?}}/, '$1:{}')
    .replace(/("responsive_web_\w+"):{.*?}/g, `$1:{value:'${HOLDER}'}`)
    .replace(/("fetchedTime"):\d+/, `$1:42`)
    .replace(/("\w+"):{\s*"value":\s*(true|false)\s*}/g, (full, m1) => {
      if (['super_follow_tweet_api_enabled', 'super_follow_user_api_enabled', 'stateful_login_enabled'].includes(m1)) {
        return `${m1}:{value:false}`
      }
      return full
    })
}
/**
 * wrap a wipeDynamic() as a preprocesser inside
 * @type import('./utils').download
 */
const download = (url, saveAs) => {
  return originalDownload(url, saveAs, wipeDynamic)
}

/** @param {string} dir */
const dest = (dir) => path.resolve(basedir, dir)


function binanceScriptFilterFunc(src) {
  const parsed = new url.URL(src)

  return parsed.hostname === 'bin.bnbstatic.com'
}

/**
 * getAllScriptUrls.
 *
 * @param {string} html
 * @returns {Array<string>}
 */
function getAllScriptUrls(html) {

  const urls = []

  const $ = cheerio.load(html)

  const _scripts = $('script').get()

  for (let i = 0; i < _scripts.length; i++) {

    const script = _scripts[i]

    const scriptSrc = script.attribs.src

    scriptSrc && binanceScriptFilterFunc(scriptSrc) && urls.push(scriptSrc)

  }

  const scripts = $('link[as=script]')

  scripts.each((_, _script) => {
    urls.push($(_script).attr('href'))
  })

  return urls
}

async function start() {
  const html = await download(URL, dest('page.html'))
  const scriptUrls = getAllScriptUrls(html)

  const tasks = scriptUrls.map(async (url) => {
    const fileName = url
      .split('/')
      .pop()
      .replace(/(\w+)\.\w+\.js/, '$1')
    await download(url, dest(`scripts/${fileName}.js`))
  })
  await Promise.allSettled(tasks)
}

start()

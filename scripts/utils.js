const fs = require('fs').promises
const fetch = require('node-fetch').default
const prettier = require('prettier')

/**
 * fetch file of url
 *
 * @param {string} url
 * @returns Promise<string>
 */
async function fetchFile(url) {
  return fetch(url, {
    headers: {
      "accept": "*/*",
      "accept-language": "en,zh;q=0.9,zh-CN;q=0.8,zh-TW;q=0.7",
      "cache-control": "no-cache",
      "pragma": "no-cache",
      "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.93 Safari/537.36",
      "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "script",
      "sec-fetch-mode": "no-cors",
      "sec-fetch-site": "cross-site",
      "Referer": "https://www.binance.com/",
      "Referrer-Policy": "origin-when-cross-origin"
    },
    "body": null,
    "method": "GET",
  }).then((res) => res.text())
}

/**
 * download file, and save it
 *
 * @param {string} url
 * @param {string | null} saveAs
 * @param {(code: string) => string} [preprocesser]
 * @returns Promise<string>
 */
async function download(url, saveAs, preprocesser = (code) => code) {
  console.info('downloading', url)
  try {
    let content = await fetchFile(url)
    content = preprocesser(content)
    if (saveAs) {
      content = await format(content, saveAs)
      await fs.writeFile(saveAs, content)
    }
    return content
  } catch (err) {
    console.info('fails to download', url, err)
  }
}
/**
 * format code with prettier
 * @param {string} code
 * @param {string} filepath
 */
async function format(code, filepath) {
  try {
    const prettierOptions = await prettier.resolveConfig(__filename)
    const prettied = prettier.format(code, {
      ...prettierOptions,
      // helps to specify parser
      filepath,
    })
    return prettied
  } catch (err) {
    console.info('fails to format', filepath, err)
  }
}

module.exports = {
  fetchFile,
  download,
}

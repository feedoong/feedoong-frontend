/**
 * @param {string} url
 * @link https://github.com/zloirock/core-js/blob/master/packages/core-js/modules/web.url.constructor.js
 */

export const checkURLValid = (inputUrl: string) => {
  try {
    new URL(inputUrl)
    return true
  } catch (error) {
    return false
  }
}

// export const checkURLValid = (inputUrl: string) => {
//   let url
//   try {
//     url = new URL(inputUrl)
//   } catch (_) {
//     return false
//   }

//   return url.protocol === 'http:' || url.protocol === 'https:'
// }

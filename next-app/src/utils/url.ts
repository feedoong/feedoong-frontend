import { getIconByHostname } from 'assets/channels'

/**
 * @param {string} url
 * @link https://regexr.com/39nr7
 */
export const checkURLValid = (inputUrl: string) => {
  return /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
    inputUrl
  )
}

export const getWellKnownChannelImg = (url: string) => {
  try {
    return getIconByHostname(new URL(url).hostname)
  } catch {
    return ''
  }
}

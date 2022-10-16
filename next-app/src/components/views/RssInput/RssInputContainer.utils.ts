import { checkURLValid } from 'utils'

export const isRssUrlValid = (_url?: string) => {
  if (_url === undefined) {
    return _url
  }
  return checkURLValid(_url)
}

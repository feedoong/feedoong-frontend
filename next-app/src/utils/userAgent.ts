import UAParser from 'ua-parser-js'

const parser = new UAParser()

export function isMobile() {
  return (
    parser.getResult().device.type === 'mobile' ||
    parser.getResult().device.type === 'tablet'
  )
}

export function getOS() {
  return parser.getOS()
}

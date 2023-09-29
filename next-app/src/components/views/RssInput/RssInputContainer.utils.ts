import Toast from 'components/common/Toast'
import { checkURLValid } from 'utils'

export const isRssUrlValid = (_url?: string) => {
  if (_url === undefined) {
    return _url
  }
  return checkURLValid(_url)
}

export const ChannelToast = {
  addChannel: () => {
    Toast.show({ content: '새로운 채널이 추가 되었습니다.' })
  },
  failAddChannel: (errorMessage: string) => {
    Toast.show({
      type: 'error',
      content: `채널 추가에 실패했습니다. ${errorMessage}`,
    })
  },
  emptyUrl: () => {
    Toast.show({ type: 'error', content: 'URL을 입력해주세요.' })
  },
}

import Toast from '../Toast'

export const copyToClipboard = async (linkUrl: string) => {
  try {
    await navigator.clipboard.writeText(linkUrl)
    Toast.show({ content: '링크 복사 완료' })
  } catch (error) {
    Toast.show({ type: 'error', content: '복사에 실패하였습니다.' })
  }
}

export const getDiameterByType = (type: string) => {
  if (type.includes('card')) {
    return 20
  }
  if (type.includes('subscription')) {
    return 48
  }
}

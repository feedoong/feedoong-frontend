import Toast from '../Toast'

export const copyToClipboard = async (linkUrl: string) => {
  try {
    await navigator.clipboard.writeText(linkUrl)
    // Toast.show({ content: '클립보드에 복사되었습니다.' })
    Toast.show({ content: '클립보드에 복사되었습니다.' })
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

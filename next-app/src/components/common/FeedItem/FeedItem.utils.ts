export const copyToClipboard = async (linkUrl: string) => {
  try {
    await navigator.clipboard.writeText(linkUrl)
    alert('클립보드에 복사되었습니다')
  } catch (error) {
    console.log(error)
  }
}

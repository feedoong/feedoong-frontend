import NaverBlog from './naver_blog.ico'
import Brunch from './brunch.ico'
import Vercel from './vercel.png'
import Kakao from './kakao.ico'
import toss from './toss.ico'
import Tistory from './tistory.ico'
import Vscode from './vscode.ico'
import Chrome from './chrome.png'
import Hyperconnect from './hyperconnect.ico'
import NhnToast from './nhnToast.ico'
import Velog from './velog.ico'
import Youtube from './youtube.ico'

export const getIconByHostname = (hostname: string) => {
  // 로직으로 처리할 경우
  if (hostname.includes('kakao')) {
    return Kakao.src
  }
  if (hostname.includes('toss')) {
    return toss.src
  }
  if (hostname.includes('tistory')) {
    return Tistory.src
  }
  if (hostname.includes('youtube')) {
    return Youtube.src
  }
  // 정확한 hostname으로 처리할 경우
  switch (hostname) {
    case 'blog.naver.com':
      return NaverBlog.src
    case 'brunch.co.kr':
      return Brunch.src
    case 'vercel.com':
      return Vercel.src
    case 'code.visualstudio.com':
      return Vscode.src
    case 'developer.chrome.com':
      return Chrome.src
    case 'hyperconnect.github.io':
      return Hyperconnect.src
    case 'meetup.toast.com':
      return NhnToast.src
    case 'velog.io':
      return Velog.src
  }
}

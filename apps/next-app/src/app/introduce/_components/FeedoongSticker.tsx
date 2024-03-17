import type { CSSProperties } from 'styled-components'

import Images from 'assets/images'

const FeedoongSticker = {
  Heart: ({ style }: { style: CSSProperties }) => {
    return <img src={Images.HeartSticker.src} alt="heart" style={style} />
  },
  Fly: ({ style }: { style: CSSProperties }) => {
    return <img src={Images.Fly2Sticker.src} alt="fly" style={style} />
  },
  Focus: ({ style }: { style: CSSProperties }) => {
    return <img src={Images.FocusSticker.src} alt="focus" style={style} />
  },
  Mobile: ({ style }: { style: CSSProperties }) => {
    return <img src={Images.MobileSticker.src} alt="mobile" style={style} />
  },
  Surprise: ({ style }: { style: CSSProperties }) => {
    return <img src={Images.SurpriseSticker.src} alt="surprise" style={style} />
  },
}

export default FeedoongSticker

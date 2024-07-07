import type { ReactNode } from 'react'

import RssInput from 'components/views/RssInput'
import * as S from 'components/views/Feeds/FeedsContainer.style'
import FeedTab from 'shared/ui/FeedTab'

interface Props {
  children: ReactNode
}

const FeedLayout = ({ children }: Props) => {
  return (
    <>
      {/* <RssInput /> */}

      <S.Container>
        <S.FeedWrapper>
          <S.Header>
            <S.TitleWrapper>
              <FeedTab />
            </S.TitleWrapper>
          </S.Header>
          {children}
        </S.FeedWrapper>
      </S.Container>
    </>
  )
}

export default FeedLayout

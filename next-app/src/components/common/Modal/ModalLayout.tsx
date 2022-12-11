import Image from 'next/image'

import Divider from 'components/common/Divider'
import * as S from './ModalLayout.styles'

import Icons from 'assets/icons'

interface Props {
  title: string
  onClose?: VoidFunction
  children?: React.ReactNode
  style?: React.CSSProperties
}

export const ModalLayout: React.FC<Props> = ({
  title,
  onClose,
  style,
  children,
}) => {
  return (
    <S.Container>
      <S.Header align="center" justify="between">
        <S.Title>{title}</S.Title>
        <Image
          style={{ cursor: 'pointer' }}
          onClick={onClose}
          src={Icons.Close}
          alt="close-icon"
          width="12"
          height="12"
        />
      </S.Header>
      <Divider />
      <S.Body style={style}>{children}</S.Body>
    </S.Container>
  )
}

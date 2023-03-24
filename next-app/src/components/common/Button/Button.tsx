import { useDebounce } from '@toss/react'
import { forwardRef } from 'react'

import * as S from './Button.style'

export type ButtonStyle = 'primary' | 'secondary' | 'normal' | 'disabled'
export type ButtonSize = 'large' | 'medium' | 'small' | 'tiny'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  buttonStyle?: ButtonStyle
  size?: ButtonSize
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    children,
    as = 'button',
    size = 'small',
    buttonStyle = 'normal',
    onClick,
    ...rest
  }: Props,
  ref
) {
  return (
    <S.Container
      as={as}
      size={size}
      buttonStyle={buttonStyle}
      onClick={useDebounce((e) => onClick && onClick(e), 500)}
      ref={ref}
      {...rest}
    >
      {children}
    </S.Container>
  )
})

export default Button

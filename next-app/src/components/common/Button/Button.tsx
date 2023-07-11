import { useDebounce } from '@toss/react'
import { forwardRef } from 'react'

import * as S from './Button.style'

export type ButtonStyle = 'primary' | 'secondary' | 'normal' | 'disabled'
export type ButtonSize = 'large' | 'medium' | 'small' | 'tiny'

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  as?: keyof JSX.IntrinsicElements
  buttonStyle?: ButtonStyle
  size?: ButtonSize
  outline?: boolean
}

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  {
    children,
    as = 'button',
    size = 'small',
    buttonStyle = 'normal',
    outline = false,
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
      outline={outline}
      onClick={useDebounce((e) => onClick && onClick(e), 500)}
      ref={ref}
      {...rest}
    >
      {children}
    </S.Container>
  )
})

export default Button

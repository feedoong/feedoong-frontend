import { forwardRef } from 'react'

import * as S from './Button.style'

export type ButtonStyle = 'primary' | 'secondary' | 'normal' | 'disabled'
export type ButtonSize = 'large' | 'medium' | 'small' | 'tiny'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
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
    ...props
  }: Props,
  ref
) {
  return (
    <S.Container
      as={as}
      size={size}
      buttonStyle={buttonStyle}
      {...props}
      ref={ref}
    >
      {children}
    </S.Container>
  )
})

export default Button

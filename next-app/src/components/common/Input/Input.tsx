import { forwardRef } from 'react'
import Image from 'next/image'

import Flex from '../Flex'

import * as S from './Input.style'

import Icons from 'assets/icons'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string
  buttonName?: string
  buttonAction?: VoidFunction
}

// TODO: supportMessage & clear 버튼 추가해야함
const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { value, label, buttonName, buttonAction, ...rest }: Props,
  ref
) {
  return (
    <S.Container>
      <Flex align={'center'} justify={'between'} style={{ padding: '0 12px' }}>
        <S.Label>{label}</S.Label>
        {buttonName && (
          <S.TextButton onClick={buttonAction}>{buttonName}</S.TextButton>
        )}
      </Flex>

      <S.InputWrapper>
        <S.Input ref={ref} value={value} {...rest} />
        {/* {value && (
          <S.ClearButtonWrapper>
            <Image src={Icons.CancelCircle} alt="삭제_버튼" onClick={onClear} />
          </S.ClearButtonWrapper>
        )} */}
      </S.InputWrapper>
    </S.Container>
  )
})

export default Input

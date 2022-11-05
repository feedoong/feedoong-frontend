import { forwardRef, type ChangeEvent } from 'react'
import Image from 'next/legacy/image'

import { useControlled } from './hooks'
import * as S from './RssInputContainer.style'

import Icons from 'assets/icons'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string
  defaultValue?: string
  isValid?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, defaultValue, isValid, onChange, ...rest }, forwardedRef) => {
    const [selectedValue, setSelectedValue] = useControlled<string | undefined>(
      {
        controlled: value,
        default: defaultValue,
      }
    )

    const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange(e)
      setSelectedValue(e.target.value)
    }

    const clearValue = () => {
      onChange('')
      setSelectedValue('')
    }

    return (
      <S.InputWrapper isValid={isValid}>
        <S.Input
          {...rest}
          ref={forwardedRef}
          onChange={_onChange}
          value={selectedValue}
        />
        {selectedValue && (
          <Image
            alt="삭제 버튼"
            src={Icons.CancelCircle}
            width={24}
            height={24}
            onClick={clearValue}
          />
        )}
      </S.InputWrapper>
    )
  }
)
Input.displayName = 'Input'

export default Input

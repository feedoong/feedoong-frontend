import { forwardRef, type ChangeEvent } from 'react'
import Image from 'next/image'

import Icons from 'assets/icons'
import useControlled from './hooks/useControlled'
import * as S from './RssInputContainer.style'

interface Props {
  value?: string
  defaultValue?: string
  isValid?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement> | string) => void
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ value, defaultValue, isValid, onChange }, forwardedRef) => {
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
          ref={forwardedRef}
          type="text"
          placeholder="URL을 추가해서 피드로 모아보세요!"
          onChange={_onChange}
          value={selectedValue}
        />
        {selectedValue && (
          <Image
            alt="삭제 버튼"
            src={Icons.Cancel}
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

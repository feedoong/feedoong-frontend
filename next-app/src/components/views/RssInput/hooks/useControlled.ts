import { useCallback, useRef, useState } from 'react'

interface Props<T> {
  controlled: T
  default?: T
}

const useControlled = <T>({
  controlled,
  default: defaultProp,
}: Props<T>): [T | undefined, (newValue: T) => void] => {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const { current: isControlled } = useRef(controlled !== undefined)
  const [valueState, setValue] = useState(defaultProp)
  const value = isControlled !== undefined ? controlled : valueState

  const setValueIfUncontrolled = useCallback((newValue: T) => {
    if (!isControlled) {
      setValue(newValue)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [value, setValueIfUncontrolled]
}

export default useControlled

import * as ReactDOM from 'react-dom/client'
import { Root } from 'react-dom/client'
import React, {
  forwardRef,
  ReactElement,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

export type ImperativeProps = {
  visible?: boolean
  onClose?: () => void
  afterClose?: () => void
}

export type TargetElement = ReactElement<ImperativeProps>

export type ImperativeHandler = {
  close: () => void
  replace: (element: TargetElement) => void
}

export const renderImperatively = (element: TargetElement) => {
  const Wrapper = forwardRef<ImperativeHandler>(function Wrapper(_, ref) {
    const [elementToRender, setElementToRender] = useState(element)
    const [visible, setVisible] = useState(false)
    const closeRef = useRef(false)
    const keyRef = useRef(0)

    useEffect(() => {
      if (!closeRef.current) {
        setVisible(true)
      } else {
        afterClose()
      }
    }, [visible])

    const onClose = () => {
      closeRef.current = true
      setVisible(false)
      elementToRender.props.onClose?.()
    }

    const afterClose = () => {
      unmount()
      elementToRender.props.afterClose?.()
    }

    useImperativeHandle(ref, () => ({
      close: onClose,
      replace: (element) => {
        keyRef.current++
        elementToRender.props.afterClose?.()
        setElementToRender(element)
      },
    }))

    return React.cloneElement(elementToRender, {
      ...elementToRender.props,
      key: keyRef.current,
      visible,
      onClose,
      afterClose,
    })
  })

  const wrapperRef = React.createRef<ImperativeHandler>()
  const unmount = renderToBody(<Wrapper ref={wrapperRef} />)

  return {
    close: () => {
      wrapperRef.current?.close()
    },
    replace: (element) => {
      wrapperRef.current?.replace(element)
    },
  } as ImperativeHandler
}

const renderToBody = (element: ReactElement) => {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const unmount = () => {
    const unmountResult = customUnmount(container)
    if (!!unmountResult && container.parentNode) {
      container.parentNode.removeChild(container)
    }
  }

  customRender(element, container)
  return unmount
}

const MARK = 'toast'
type ContainerType = (Element | DocumentFragment) & { [MARK]?: Root }

const fullClone = { ...ReactDOM }

const customRender = (node: ReactElement, container: ContainerType) => {
  const root = container[MARK] || fullClone.createRoot(container)
  root.render(node)
  container[MARK] = root
}

async function customUnmount(container: ContainerType) {
  // Delay to unmount to avoid React 18 sync warning
  return Promise.resolve().then(() => {
    container[MARK]?.unmount()
    delete container[MARK]
  })
}

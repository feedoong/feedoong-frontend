import type { ToastProps } from './Toast'
import { ToastElement } from './Toast'
import { renderImperatively, type ImperativeHandler } from 'utils/popUp'

let currentHandler: ImperativeHandler | null = null
let currentTimeout: number | null = null

export type ToastHandler = {
  close: () => void
}

const ToastInner = (props: ToastProps & { onClose?: () => void }) => (
  <ToastElement {...props} />
)

const defaultProps: Partial<ToastProps> = {
  duration: 2000,
  position: 'bottom',
}

export const show = (toastProps: ToastProps) => {
  const props = {
    ...defaultProps,
    ...toastProps,
  }

  const element = (
    <ToastInner
      {...props}
      onClose={() => {
        currentHandler = null
      }}
    />
  )

  if (currentHandler) {
    currentHandler.replace(element)
  } else {
    currentHandler = renderImperatively(element)
  }

  if (currentTimeout) {
    window.clearTimeout(currentTimeout)
  }

  if (props.duration !== 0) {
    currentTimeout = window.setTimeout(() => {
      clear()
    }, props.duration)
  }

  return currentHandler as ToastHandler
}

export const clear = () => {
  currentHandler?.close()
  currentHandler = null
}

export const config = (props: Pick<ToastProps, 'duration' | 'position'>) => {
  if (props.duration !== undefined) {
    defaultProps.duration = props.duration
  }
  if (props.position !== undefined) {
    defaultProps.position = props.position
  }
}

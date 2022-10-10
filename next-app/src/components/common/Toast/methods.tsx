import React, { ReactElement } from 'react'
import Toast, { ToastProps } from './Toast'
import { renderImperatively, type ImperativeHandler } from './utils'

let currentHandler: ImperativeHandler | null = null
let currentTimeout: number | null = null

export type ToastHandler = {
  close: () => void
}

const ToastInner = (props: ToastProps & { onClose?: () => void }) => (
  <Toast {...props} />
)

const defaultProps = {
  duration: 1000,
  position: {},
}

export const show = (toastProps: ToastProps) => {
  console.log('show', toastProps)
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
    console.log('111')
    currentHandler.replace(element)
  } else {
    console.log('toastInner', element)
    currentHandler = renderImperatively(element)
    console.log(2222, {currentHandler})
  }

  if (currentTimeout) {
    console.log({ currentTimeout})
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
  console.log('clear')
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

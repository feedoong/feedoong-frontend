import type { NotificationProps } from './Notification'
import { Notification } from './Notification'
import { renderImperatively, type ImperativeHandler } from 'utils/popUp'

let currentHandler: ImperativeHandler | null = null
let currentTimeout: number | null = null

export type NotificationHandler = {
  close: () => void
}

const NotificationInner = (
  props: NotificationProps & { onClose?: () => void }
) => <Notification {...props} />

const defaultProps: Partial<NotificationProps> = {
  duration: 5000,
  position: 'bottom',
}

export const show = (notificationProps: NotificationProps) => {
  const props = {
    ...defaultProps,
    ...notificationProps,
  }

  const element = (
    <NotificationInner
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

  return currentHandler as NotificationHandler
}

export const clear = () => {
  currentHandler?.close()
  currentHandler = null
}

export const config = (
  props: Pick<NotificationProps, 'duration' | 'position'>
) => {
  if (props.duration !== undefined) {
    defaultProps.duration = props.duration
  }
  if (props.position !== undefined) {
    defaultProps.position = props.position
  }
}

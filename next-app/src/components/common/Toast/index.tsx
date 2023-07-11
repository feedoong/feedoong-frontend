import toast from 'react-hot-toast'

import ToastIcon from '../ToastIcon'

const show = ({
  content,
  option,
  type = 'success',
  fetchFn,
  promiseContent,
}: {
  content: string
  option?: any
  type?: 'success' | 'error' | 'loading' | 'promise'
  fetchFn?: any
  promiseContent?: { loading: string; error: any }
}) => {
  const toastOption = {
    icon: (
      <ToastIcon
        color={
          type === 'error'
            ? 'var(--color-on-error-container)'
            : 'var(--color-font-primary)'
        }
      />
    ),
    position: 'bottom-center',
    style: {
      borderRadius: '32px',
      background:
        type === 'error'
          ? 'var(--color-error-container)'
          : 'var(--color-surface-container-highest)',
      color:
        type === 'error'
          ? 'var(--color-on-error-container)'
          : 'var(--color-font-primary)',
      padding: '8px 20px',
      fontWeight: '600',
      fontSize: '14px',
      minWidth: '80px',
      maxWidth: '700px',
    },
    type,
    ...option,
  }

  switch (type) {
    case 'loading':
      return toast.loading(content, toastOption)
    case 'promise':
      return toast.promise(
        fetchFn,
        {
          loading: promiseContent?.loading || '로딩 중입니다.',
          success: content,
          error: promiseContent?.error || '실패했습니다',
        },
        toastOption
      )
    case 'error':
      return toast.error(content, toastOption)
    case 'success':
    default:
      toast.success(content, toastOption)
  }
}

const Toast = {
  show,
}

export default Toast

// import { clear, show, config } from './methods'

// const Toast = {
//   show,
//   clear,
//   config,
// }

// export default Toast

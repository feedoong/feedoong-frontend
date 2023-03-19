import toast from 'react-hot-toast'
import Image from 'next/image'

import Icons from 'assets/icons'

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
  promiseContent?: { loading: string; error: Function}
}) => {
  const toastOption = {
    icon: (
      <Image
        src={type === 'error' ? Icons.ToastError : Icons.ToastBasic}
        alt="toast_icon"
      />
    ),
    position: 'bottom-center',
    style: {
      borderRadius: '16px',
      background: 'rgba(0, 0, 0, 0.6)',
      color: 'white',
      padding: '8px 20px',
      fontWeight: '600',
      fontSize: '14px',
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

import ReactDOM from 'react-dom'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  selector: string
}

const Portal = ({ children, selector }: Props) => {
  if (!children) {
    throw Error('children must be provided')
  }
  const isSSR = typeof window === 'undefined'

  const targetDOM = !isSSR && document.querySelector(selector)
  // const targetDOM = typeof window !== 'undefined' && document.querySelector(selector)
  return !!targetDOM ? ReactDOM.createPortal(children, targetDOM) : null
}

export default Portal

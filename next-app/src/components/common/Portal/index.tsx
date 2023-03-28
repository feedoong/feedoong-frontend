import ReactDOM from 'react-dom'
import type { ReactNode } from 'react'

import { isServer } from 'utils'

interface Props {
  children: ReactNode
  selector: string
}

const Portal = ({ children, selector }: Props) => {
  if (!children) {
    throw Error('children must be provided')
  }

  const targetDOM = !isServer() && document.querySelector(selector)
  return !!targetDOM ? ReactDOM.createPortal(children, targetDOM) : null
}

export default Portal

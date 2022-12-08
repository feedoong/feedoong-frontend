import {
  cloneElement,
  isValidElement,
  useCallback,
  useState,
  useEffect,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'

import { ModalLayout } from './ModalLayout'

interface Props {
  content: React.ReactNode
  handleOpenedCallback?: VoidFunction
  handleClosedCallback?: VoidFunction
}

export const useModal = ({
  handleClosedCallback,
  handleOpenedCallback,
  content,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const portalRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    portalRef.current = document.querySelector('#modal')
    setIsMounted(true)
  }, [])

  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const renderModal = () =>
    isMounted &&
    isOpen &&
    createPortal(
      <ModalLayout
        isOpen={isOpen}
        handleOpenedCallback={handleOpenedCallback}
        handleClosedCallback={handleClosedCallback}
        handleClose={handleClose}
      >
        {isValidElement(content)
          ? cloneElement(content, { onClose: handleClose })
          : content}
      </ModalLayout>,
      portalRef.current!
    )

  return {
    handleOpen,
    handleClose,
    renderModal,
  }
}

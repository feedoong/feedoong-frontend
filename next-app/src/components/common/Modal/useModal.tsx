import {
  cloneElement,
  isValidElement,
  useCallback,
  useState,
  useEffect,
  useRef,
} from 'react'

import Portal from '../Portal'
import { DimmerLayout } from './DimmerLayout'

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
    isOpen && (
      <Portal selector="#modal">
        <DimmerLayout
          isOpen={isOpen}
          handleOpenedCallback={handleOpenedCallback}
          handleClosedCallback={handleClosedCallback}
          handleClose={handleClose}
        >
          {isValidElement<{ onClose: VoidFunction }>(content)
            ? cloneElement(content, { onClose: handleClose })
            : content}
        </DimmerLayout>
      </Portal>
    )

  return {
    handleOpen,
    handleClose,
    renderModal,
  }
}

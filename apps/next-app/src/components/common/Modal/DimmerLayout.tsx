import { useEffect } from 'react'
import styled from 'styled-components'

import { Z_INDEX } from 'styles/constants'
import { useLockBodyScroll } from 'utils/hooks'

interface Props {
  isOpen: boolean
  handleClose: VoidFunction
  handleOpenedCallback?: VoidFunction
  handleClosedCallback?: VoidFunction
  children: React.ReactNode
}

export const DimmerLayout: React.FC<Props> = ({
  isOpen,
  handleClose,
  handleOpenedCallback,
  handleClosedCallback,
  children,
}) => {
  useLockBodyScroll()

  useEffect(() => {
    if (isOpen) {
      handleOpenedCallback?.()
    }

    return () => {
      handleClosedCallback?.()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  return (
    <Container>
      <Dimmer onClick={handleClose} />
      <Content>{children}</Content>
    </Container>
  )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: ${Z_INDEX.modal};
`

const Dimmer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color-black-fixed);
  opacity: 0.25;
`

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 30px;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`

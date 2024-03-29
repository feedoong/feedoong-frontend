import React, { cloneElement, useMemo, useState } from 'react'
import type { Placement } from '@floating-ui/react-dom-interactions'
import {
  offset,
  flip,
  shift,
  autoUpdate,
  useFloating,
  useInteractions,
  useRole,
  useDismiss,
  useId,
  useClick,
  FloatingFocusManager,
} from '@floating-ui/react-dom-interactions'
import { mergeRefs } from 'react-merge-refs'

import PopoverLayout from './PopoverLayout'
import PopoverItem from './PopoverItem'
import { Z_INDEX } from 'styles/constants'

interface Props {
  render: (data: {
    close: () => void
    labelId: string
    descriptionId: string
  }) => React.ReactNode
  placement?: Placement
  children: JSX.Element
}

/** @link https://codesandbox.io/s/quizzical-water-b3dedw?file=/src/styles.css:59-211 */
const Popover = ({ children, render, placement }: Props) => {
  const [open, setOpen] = useState(false)

  const { x, y, reference, floating, strategy, context } = useFloating({
    open,
    onOpenChange: setOpen,
    middleware: [offset(5), flip(), shift()],
    placement,
    whileElementsMounted: autoUpdate,
  })

  const id = useId()
  const labelId = `${id}-label`
  const descriptionId = `${id}-description`

  const { getReferenceProps, getFloatingProps } = useInteractions([
    useClick(context),
    useRole(context),
    useDismiss(context),
  ])

  // Preserve the consumer's ref
  const ref = useMemo(
    () => mergeRefs([reference, (children as any).ref]),
    [reference, children]
  )

  return (
    <>
      {cloneElement(children, getReferenceProps({ ref, ...children.props }))}
      {open && (
        <FloatingFocusManager
          context={context}
          modal={false}
          order={['reference', 'content']}
          returnFocus={false}
        >
          <div
            ref={floating}
            className="Popover"
            style={{
              position: strategy,
              top: y ?? 0,
              left: x ?? 0,
              zIndex: Z_INDEX.popOver,
            }}
            aria-labelledby={labelId}
            aria-describedby={descriptionId}
            {...getFloatingProps()}
          >
            {render({
              labelId,
              descriptionId,
              close: () => {
                setOpen(false)
              },
            })}
          </div>
        </FloatingFocusManager>
      )}
    </>
  )
}

export default Object.assign(Popover, {
  Item: PopoverItem,
  Layout: PopoverLayout,
})

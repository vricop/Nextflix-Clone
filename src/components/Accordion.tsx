import classNames from 'classnames'
import HTMLReactParser from 'html-react-parser'
import { Plus } from 'iconoir-react'
import { ComponentProps, MouseEvent, ReactNode, useEffect, useRef } from 'react'

export function Accordion({
  children,
  className,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={classNames(
        'mx-auto grid grid-flow-row gap-y-2 text-lg sm:text-xl lg:text-2xl',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

function collapseDetails(openDetails: HTMLDetailsElement) {
  const detailsCollection = openDetails
    .closest('div')!
    .querySelectorAll('details')

  detailsCollection.forEach((item) => {
    if (item === openDetails) return

    item.classList.remove('open')

    timer2 = setTimeout(() => {
      item.open = false
    }, 400)
  })
}

let timer1: ReturnType<typeof setTimeout>
let timer2: ReturnType<typeof setTimeout>

// TODO: Look for animating Details using the animation API in CSS-tricks  
export function AccordionItem({
  title,
  children,
  ...props
}: ComponentProps<'details'> & {
  title: string
}) {
  const details = useRef<null | HTMLDetailsElement>(null)
  const summary = useRef<null | HTMLElement>(null)
  const content = useRef<null | HTMLDivElement>(null)

  function shrink() {
    const startHeight = details.current?.offsetHeight ?? 0
    const endHeight = summary.current?.offsetHeight ?? 0

    details.current?.animate(
      {
        height: [startHeight, endHeight],
      },
      {
        duration: 2000,
      },
    )
  }

  return (
    <details
      className="grid grid-flow-row gap-y-2 w-[768px] overflow-hidden group"
      {...props}
    >
      <summary className="bg-gray-800 py-4 px-7 grid items-center grid-flow-col justify-between gap-4 cursor-pointer">
        {title}
        <Plus
          className="transition-transform duration-200 eas [transition-timing-function:cubic-bezier(0.45,0.05,0.55,0.95)] rotate-0 lg:text-2xl group-open:-rotate-45"
          strokeWidth={'1'}
        />
      </summary>
      <div className="content bg-gray-800 transition-all duration-500 [transition-timing-function:cubic-bezier(0.45, 0.05, 0.55, 0.95)] overflow-hidden p-7 mt-px">
        {children}
      </div>
    </details>
  )
}

AccordionItem.displayName = 'Accordion__Item'

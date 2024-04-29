import classNames from 'classnames'
import { Plus } from 'iconoir-react'
import { ComponentProps } from 'react'

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

export function AccordionItem({
  title,
  children,
  ...props
}: ComponentProps<'details'> & {
  title: string
}) {
  return (
    <details
      className="grid grid-flow-row gap-y-2 overflow-hidden group"
      {...props}
    >
      <summary className="bg-gray-800 py-4 px-7 grid items-center grid-flow-col justify-between gap-4 cursor-pointer">
        {title}
        <Plus
          className="transition-transform delay-100 duration-500 eas [transition-timing-function:cubic-bezier(0.45,0.05,0.55,0.95)] rotate-0 lg:text-2xl group-open:-rotate-45"
          strokeWidth="1"
        />
      </summary>
      <div className="content bg-gray-800 transition-all duration-500 [transition-timing-function:cubic-bezier(0.45, 0.05, 0.55, 0.95)] overflow-hidden p-7 mt-px">
        {children}
      </div>
    </details>
  )
}

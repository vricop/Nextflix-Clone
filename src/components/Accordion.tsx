'use client'
import classNames from 'classnames'
import PlusLarge from '@icons/plus-large.svg'
import { ComponentProps } from 'react'

export function Accordion({
  children,
  className,
  ...props
}: ComponentProps<'dl'>) {
  return (
    <dl
      className={classNames(
        'mx-auto text-lg font-normal [&>*~*:where(dt)]:mt-2 [&>*~*:where(dd)]:mt-px',
        className,
      )}
      {...props}
    >
      {children}
    </dl>
  )
}

export function AccordionSummary({ children, ...props }: ComponentProps<'dt'>) {
  return (
    <dt className="placeholder-shown:" {...props}>
      <button
        aria-controls="panel-content-1"
        aria-expanded={false}
        id="panel-header-1"
        className="grid grid-flow-col justify-between w-full bg-neutral-800 p-6"
      >
        {children}
        <PlusLarge
          className="transition-transform delay-100 duration-500 eas [transition-timing-function:cubic-bezier(0.45,0.05,0.55,0.95)] rotate-0 lg:text-2xl group-open:-rotate-45"
          strokeWidth="1"
        />
      </button>
    </dt>
  )
}

export function AccordionDetails({ children, ...props }: ComponentProps<'dd'>) {
  return (
    <dd
      aria-labelledby="panel-header-1"
      id="pendl-content-1"
      className="bg-neutral-800 transition-all duration-500 [transition-timing-function:cubic-bezier(0.45, 0.05, 0.55, 0.95)] overflow-hidden p-7 mt-px"
      {...props}
    >
      {children}
    </dd>
  )
}

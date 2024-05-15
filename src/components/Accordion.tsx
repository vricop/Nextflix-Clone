import classNames from 'classnames'
import PlusLarge from '@icons/plus-large.svg'
import { ComponentProps, MouseEvent, ReactNode } from 'react'

interface Accordion extends ComponentProps<'dl'> {
  children?: ReactNode
}

interface AccordionSummary extends ComponentProps<'dt'> {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
  expanded: boolean
}

interface AccordionDetails extends ComponentProps<'dd'> {
  expanded: boolean
}

/**
 * `Accordion` is a compound component, use along with `AccordionSummary` &
 * `AccordionDetails`.
 *
 * Note: [The WAI-ARIA guidelines for accordions](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/) recommend setting an `id` and
 * `aria-controls`, which in this case would apply to the `AccordionSummary`
 * component. The `Accordion` component then derives the necessary
 * `aria-labelledby` and `id` from its content.
 */
export function Accordion({ children, className, ...props }: Accordion) {
  return (
    <dl
      className={classNames(
        'mx-auto text-lg lg:text-2xl font-normal [&>*~*:where(dt)]:mt-2 [&>*~*:where(dd)]:mt-px',
        className,
      )}
      {...props}
    >
      {children}
    </dl>
  )
}

export function AccordionSummary({
  children,
  onClick,
  'aria-controls': ariaControls,
  id,
  expanded = false,
  ...props
}: AccordionSummary) {
  return (
    <dt className="placeholder-shown:" {...props}>
      <button
        type="button"
        id={id}
        aria-controls={ariaControls}
        aria-expanded={expanded}
        className={classNames(
          'grid grid-flow-col items-center justify-between w-full p-6 group',
          {
            ['bg-neutral-800']: !expanded,
            ['bg-neutral-700']: expanded,
          },
        )}
        onClick={(e) => onClick && onClick(e)}
      >
        {children}
        <PlusLarge
          className={classNames(
            'w-6 h-6 lg:w-9 lg:h-9 transition-transform duration-200 [transition-timing-function:cubic-bezier(0.45,0.05,0.55,0.95)] rotate-0 lg:text-2xl',
            {
              ['rotate-45']: expanded,
            },
          )}
        />
      </button>
    </dt>
  )
}

export function AccordionDetails({
  children,
  expanded = false,
  ...props
}: AccordionDetails) {
  return (
    <dd
      id="pendl-content-1"
      className={classNames(
        'bg-neutral-800 transition-all duration-200 [transition-timing-function:cubic-bezier(0.5,0,0.1,1)] overflow-hidden max-h-0 px-7',
        {
          ['max-h-screen py-7 mt-px']: expanded,
        },
      )}
      {...props}
    >
      {children}
    </dd>
  )
}

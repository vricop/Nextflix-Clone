import classNames from 'classnames'
import { ComponentProps } from 'react'

export function HomeSectionTitle({
  className,
  ...props
}: ComponentProps<'h2'>) {
  return (
    <h2
      className={classNames(
        'text-[2rem] lg:text-5xl font-bold  leading-tight',
        className,
      )}
      {...props}
    />
  )
}

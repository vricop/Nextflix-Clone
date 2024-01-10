import classNames from 'classnames'
import { ComponentProps } from 'react'

export function HomeSectionTitle({
  className,
  ...props
}: ComponentProps<'h2'>) {
  return (
    <h2
      className={classNames(
        'text-3xl leading-tight sm:text-size-4xl',
        className,
      )}
      {...props}
    />
  )
}

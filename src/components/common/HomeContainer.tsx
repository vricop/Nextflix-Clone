import classNames from 'classnames'
import { ComponentProps } from 'react'

export function HomeContainer({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={classNames(
        'py-14 sm:py-[4.5rem] text-white border-b-8 border-gray-600',
        className,
      )}
      {...props}
    />
  )
}

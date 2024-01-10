import classNames from 'classnames'
import { ComponentProps } from 'react'

export function HomeContainer({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={classNames(
        'bg-black py-12 sm:py-18 px-[5%] sm:px-11 text-white border-b-8 border-gray-600',
        className,
      )}
      {...props}
    />
  )
}

import classNames from 'classnames'
import { ComponentProps } from 'react'

interface HomeContainerProps extends ComponentProps<'div'> {
  hasBorder?: boolean
  as?: 'div' | 'section' | 'article' | 'footer'
}

export function HomeContainer({
  as = 'div',
  className,
  hasBorder = true,
  ...props
}: HomeContainerProps) {
  const Tag = as

  return (
    <Tag
      className={classNames(
        'py-14 sm:py-[4.5rem] text-white',
        { ['border-b-8 border-neutral-800']: hasBorder },
        className,
      )}
      {...props}
    />
  )
}

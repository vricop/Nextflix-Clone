import classNames from 'classnames'
import { PolymorphicComponentProps } from 'global'
import { ElementType } from 'react'

type HomeContainerProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  {
    hasBorder?: boolean
  }
>

export const HomeContainer = function HomeContainer<C extends ElementType>({
  as,
  className,
  hasBorder = true,
  fRef,
  ...props
}: HomeContainerProps<C>) {
  const Component = as ?? 'div'

  return (
    <Component
      className={classNames(
        'py-14 sm:py-[4.5rem] text-white',
        { ['border-b-8 border-neutral-800']: hasBorder },
        className,
      )}
      ref={fRef}
      {...props}
    />
  )
}

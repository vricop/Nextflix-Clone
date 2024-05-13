import classNames from 'classnames'
import { PolymorphicComponentProps } from 'global'
import { ComponentProps, ElementType } from 'react'

type HomeContainerProps<C extends ElementType> = PolymorphicComponentProps<
  C,
  {
    hasBorder?: boolean
    innerClassName?: ComponentProps<'div'>['className']
  }
>

export const HomeContainer = function HomeContainer<C extends ElementType>({
  as,
  className,
  innerClassName,
  hasBorder = true,
  children,
  fRef,
  ...props
}: HomeContainerProps<C>) {
  const Component = as ?? 'section'

  return (
    <Component
      className={classNames(
        'py-14 sm:py-[4.5rem] text-white',
        { ['border-b-8 border-neutral-800']: hasBorder },
        className,
      )}
      ref={fRef}
      {...props}
    >
      <div
        className={classNames(
          'mx-auto max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.333%-6rem)]',
          innerClassName,
        )}
      >
        {children}
      </div>
    </Component>
  )
}

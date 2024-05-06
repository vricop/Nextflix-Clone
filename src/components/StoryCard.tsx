import { ComponentProps } from 'react'
import { HomeContainer } from '@components/HomeContainer'
import { HomeSectionTitle } from '@components/HomeSectionTitle'
import classNames from 'classnames'

export interface StoryCardProps extends ComponentProps<'div'> {
  flipped?: boolean
  title: string
  tagline: string
}

export function StoryCard({
  flipped,
  children,
  title,
  tagline,
}: StoryCardProps) {
  return (
    <HomeContainer>
      <div className="grid items-center lg:gap-x-3 mx-auto max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.333%-6rem)] md:grid-cols-2">
        <div
          className={classNames(
            'grid justify-items-center md:justify-items-start text-center md:text-left gap-y-4 sm:gap-y-5 md:gap-y-5',
            {
              'md:order-2': flipped,
            },
          )}
        >
          <HomeSectionTitle>{title}</HomeSectionTitle>
          <p className="text-lg sm:text-2xl font-normal">{tagline}</p>
        </div>
        {children}
      </div>
    </HomeContainer>
  )
}

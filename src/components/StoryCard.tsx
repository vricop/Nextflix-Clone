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
      <div className="grid items-center grid-cols-12 mx-auto max-w-6xl md:grid-cols-2">
        <hgroup
          className={classNames(
            'grid grid--flow-row gap-y-4 sm:gap-y-5 md:gap-y-5 md:text-center',
            {
              'md:order-2': flipped,
            },
          )}
        >
          <HomeSectionTitle>{title}</HomeSectionTitle>
          <h3 className="text-lg sm:text-2xl font-normal">{tagline}</h3>
        </hgroup>
        <div className="grid place-items-center">{children}</div>
      </div>
    </HomeContainer>
  )
}

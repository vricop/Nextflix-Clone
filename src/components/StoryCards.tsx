'use client'
import { ReactElement } from 'react'
import { v4 as uuid } from 'uuid'
import { DevicePile } from './DevicePile'
import { Mobile } from './Mobile'
import { StoryCard } from './StoryCard'
import { StoryImage } from './StoryImage'
import { Tv } from './Tv'
import { useTranslations } from 'next-intl'

const media: Record<number, ReactElement> = {
  0: <Tv />,
  1: <DevicePile />,
  2: <StoryImage />,
  3: <Mobile />,
}

export default function StoryCards() {
  const t = useTranslations('home')
  const keys = [0, 1, 2, 3] as const

  return keys.map((i) => (
    <StoryCard
      key={uuid()}
      flipped={i % 2 !== 0}
      title={t(`storyCards.${i}.title`)}
      tagline={t(`storyCards.${i}.tagline`)}
    >
      {media[i]}
    </StoryCard>
  ))
}

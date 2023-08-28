import { ReactElement } from 'react'
import { v4 as uuid } from 'uuid'
import { DevicePile } from './DevicePile'
import { Mobile } from './Mobile'
import { StoryCard } from './StoryCard'
import { StoryImage } from './StoryImage'
import { Tv } from './Tv'
import { useTranslations } from 'next-intl'

const media: { [index: number]: ReactElement } = {
  1: <Tv />,
  2: <Mobile />,
  3: <DevicePile />,
  4: <StoryImage />,
}

export default function StoryCards() {
  const t = useTranslations('home')
  const keys = [1, 2, 3, 4] as const

  return keys.map((i) => (
    <StoryCard
      key={uuid()}
      $flipped={i % 2 !== 0}
      title={t(`storyCards.${i}.title`)}
      tagline={t(`storyCards.${i}.tagline`)}
    >
      {media[i]}
    </StoryCard>
  ))
}

import { ReactElement } from 'react'
import { useTranslation } from 'next-i18next'
import { v4 as uuid } from 'uuid'
import { DevicePile } from './DevicePile'
import { Mobile } from './Mobile'
import { StoryCard } from './StoryCard'
import { StoryImage } from './StoryImage'
import { Tv } from './Tv'

const media: { [index: number]: ReactElement } = {
  0: <Tv />,
  1: <Mobile />,
  2: <DevicePile />,
  3: <StoryImage />,
}

export default function StoryCards() {
  const { t } = useTranslation('home')
  const storyCards = t('storyCards')

  return (
    <>
      {storyCards.map((storyCard, index) => (
        <StoryCard
          key={uuid()}
          flipped={index % 2 !== 0}
          title={storyCard.title}
          tagline={storyCard.tagline}>
          {media[index]}
        </StoryCard>
      ))}
    </>
  )
}

import { useTranslation } from 'react-i18next'
import { DevicePile } from './DevicePile'
import { Mobile } from './Mobile'
import { StoryCard } from './StoryCard'
import { StoryImage } from './StoryImage'
import { Tv } from './Tv'

export default function StoryCards() {
  const { t } = useTranslation('home')
  const storyCards = t('storyCards')

  return (
    <>
      <StoryCard title={storyCards[0].title} tagline={storyCards[0].tagline}>
        <Tv />
      </StoryCard>
      <StoryCard
        flipped
        title={storyCards[1].title}
        tagline={storyCards[1].tagline}>
        <Mobile />
      </StoryCard>
      <StoryCard title={storyCards[2].title} tagline={storyCards[2].tagline}>
        <DevicePile />
      </StoryCard>
      <StoryCard
        flipped
        title={storyCards[3].title}
        tagline={storyCards[3].tagline}>
        <StoryImage />
      </StoryCard>
    </>
  )
}

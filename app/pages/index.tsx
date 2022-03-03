import { HeroHeader } from '@/components/HeroHeader/HeroHeader'
import { StoryCard } from '@/components/StoryCard/StoryCard'
import { Tv } from '@/components/Tv'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <HeroHeader />
      <StoryCard>
        <StoryCard.Content title="Enjoy on your TV.">
          Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
          players, and more.
        </StoryCard.Content>
        <StoryCard.Media>
          <Tv />
        </StoryCard.Media>
      </StoryCard>
    </>
  )
}

export default Home

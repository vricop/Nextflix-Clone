import { HeroHeader } from '@/components/HeroHeader/HeroHeader'
import { StoryCard } from '@/components/StoryCard/StoryCard'
import { stories } from '@/fixtures/stories'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <>
    <HeroHeader />
    {stories.map(({ Media, ...story }) => (
      <StoryCard {...story} children={<Media />} />
    ))}
  </>
)

export default Home

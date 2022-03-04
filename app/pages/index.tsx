import { Faq } from '@/components/Faq'
import { HeroHeader } from '@/components/HeroHeader'
import { StoryCard } from '@/components/StoryCard'
import { stories } from '@/fixtures/stories'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <>
    <HeroHeader />
    {stories.map(({ Media, ...story }) => (
      <StoryCard {...story} children={<Media />} />
    ))}
    <Faq />
  </>
)

export default Home

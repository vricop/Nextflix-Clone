import { Banner } from '@components/Banner'
import { Footer } from '@components/common/Footer'
import { Faq } from '@components/Faq'
import { HeroHeader } from '@components/HeroHeader'
import StoryCards from '@components/StoryCards'

export default function Home() {
  return (
    <>
      <HeroHeader />
      <Banner />
      <StoryCards />
      <Faq />
      <Footer />
    </>
  )
}

import { Footer } from '@/components/common/Footer'
import { Faq } from '@/components/Faq'
import { HeroHeader } from '@/components/HeroHeader'
import { StoryCard } from '@/components/StoryCard'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { stories } from '@/fixtures/stories'
import type { NextPage } from 'next'

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'common'])),
    },
  }
}

const Home: NextPage = () => (
  <>
    <HeroHeader />
    {stories.map(({ id, Media, ...story }) => (
      <StoryCard key={id} {...story}>
        <Media />
      </StoryCard>
    ))}
    <Faq />
    <Footer />
  </>
)

export default Home

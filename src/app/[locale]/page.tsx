import { Banner } from '@components/Banner'
import { Footer } from '@components/common/Footer'
import { Faq } from '@components/Faq'
import { HeroHeader } from '@components/HeroHeader'
import ValuePropositions from '@components/ValuePropositions'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { Locale } from 'src/config'

interface Home {
  params: {
    locale: Locale
  }
}

export default function Home({ params }: Home) {
  unstable_setRequestLocale(params.locale)
  const t = useTranslations('home.banner')

  return (
    <>
      <HeroHeader locale={params.locale} />
      <Banner
        title={t('title')}
        description={t('description')}
        linkText={t('linkText')}
        url={t('url')}
      />
      <ValuePropositions />
      <Faq />
      <Footer />
    </>
  )
}

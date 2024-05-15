import { Cta } from '@components/Cta'
import { EmailBox } from '@components/EmailBox'
import { HomeContainer } from '@components/HomeContainer'
import { HomeSectionTitle } from '@components/HomeSectionTitle'
import { useMessages, useTranslations } from 'next-intl'
import { Data, FaqAccordion } from './FaqAccordion'
import { Messages } from 'global'

type Indices = keyof Messages['home']['faq']

export function Faq() {
  const messages = useMessages()
  const { home, common } = messages
  const t = useTranslations('home.faq')
  const indices = Object.keys(home.faq) as Indices[]
  const data = indices.reduce((data, i) => {
    return [
      ...data,
      {
        summary: t(`${i}.summary`),
        details: t.rich(`${i}.details`, { br: () => <br /> }),
      },
    ]
  }, [] as Data)

  return (
    <HomeContainer innerClassName="grid justify-items-center gap-y-6 sm:gap-y-8 lg:gap-y-[3.25rem]">
      <HomeSectionTitle className="text-center">
        {home.faqTitle}
      </HomeSectionTitle>
      <FaqAccordion data={data} />
      <div className="text-center grid justify-items-center gap-y-5">
        <Cta />
        <EmailBox
          errorText={common.errors.invalidEmail}
          labelText={home.emailPlaceholder}
          buttonText={home.getStartedButton}
        />
      </div>
    </HomeContainer>
  )
}

import { Accordion, AccordionItem } from './Accordion'
import { Cta } from '@components/Cta'
import { EmailBox } from '@components/EmailBox'
import { HomeContainer } from '@components/HomeContainer'
import { HomeSectionTitle } from '@components/HomeSectionTitle'
import { useTranslations, useMessages } from 'next-intl'

export function Faq() {
  const messages = useMessages()
  const t = useTranslations('home')
  const { home, common } = messages
  const keys = Object.keys(home.faq) as (keyof typeof home.faq)[]

  return (
    <HomeContainer
      as="section"
      className="grid grid-flow-row justify-center gap-y-6 sm:gap-y-8 lg:gap-y-[3.25rem]"
      role=""
    >
      <HomeSectionTitle className="text-center">
        {messages.home.faqTitle}
      </HomeSectionTitle>
      <Accordion className="w-[83vw]">
        {keys.map((item, i) => (
          <AccordionItem key={i} title={messages.home.faq[item].summary}>
            {t.rich(`faq.${item}.details`, { br: () => <br /> })}
          </AccordionItem>
        ))}
      </Accordion>
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

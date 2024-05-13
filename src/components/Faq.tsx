import { Accordion, AccordionSummary, AccordionDetails } from './Accordion'
import { Cta } from '@components/Cta'
import { EmailBox } from '@components/EmailBox'
import { HomeContainer } from '@components/HomeContainer'
import { HomeSectionTitle } from '@components/HomeSectionTitle'
import { useTranslations, useMessages } from 'next-intl'
import { Fragment } from 'react'

export function Faq() {
  const messages = useMessages()
  const t = useTranslations('home')
  const { home, common } = messages
  const keys = Object.keys(home.faq) as (keyof typeof home.faq)[]

  return (
    <HomeContainer innerClassName="grid justify-center gap-y-6 sm:gap-y-8 lg:gap-y-[3.25rem]">
      <HomeSectionTitle className="text-center">
        {home.faqTitle}
      </HomeSectionTitle>
      <Accordion>
        {keys.map((item, i) => {
          return (
            <Fragment key={i}>
              <AccordionSummary>{home.faq[item].summary}</AccordionSummary>
              <AccordionDetails>
                {t.rich(`faq.${item}.details`, { br: () => <br /> })}
              </AccordionDetails>
            </Fragment>
          )
        })}
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

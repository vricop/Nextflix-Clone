'use client'
import { v4 as uuid } from 'uuid'
import { Accordion, AccordionItem } from './Accordion'
import { Cta } from '@components/Cta'
import { EmailBox } from '@components/EmailBox'
import { HomeContainer } from '@components/HomeContainer'
import { HomeSectionTitle } from '@components/HomeSectionTitle'
import { useTranslations } from 'next-intl'

export function Faq() {
  const t = useTranslations('home')
  const keys = [1, 2, 3, 4, 5, 6] as const

  return (
    <HomeContainer
      className="grid grid-flow-row justify-center gap-y-6 sm:gap-y-8 lg:gap-y-[3.25rem]"
      role=""
    >
      <HomeSectionTitle className="text-center">
        {t('faqTitle')}
      </HomeSectionTitle>
      <Accordion className="w-[768px]">
        {keys.map((item) => (
          <AccordionItem key={uuid()} title={t(`faq.${item}.summary`)}>
            {t.rich(`faq.${item}.details`, {
              br: () => <br />
            })}
          </AccordionItem>
        ))}
      </Accordion>
      <div className="text-center grid justify-items-center gap-y-5">
        <Cta />
        <EmailBox />
      </div>
    </HomeContainer>
  )
}

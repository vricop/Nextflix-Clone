import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { Accordion } from './Accordion'
import { EmailBox } from './common/EmailBox'
import { HomeContainer } from './common/HomeContainer'
import { Cta } from './HeroHeader/HeroHeader.styled'

const FaqContainer = styled(HomeContainer)`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  row-gap: ${({ theme }) => theme.size._14};
`

const FaqAccordion = styled(Accordion)`
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 75%;
    max-width: 815px;
  }
`

const CTAWrapper = styled.div`
  text-align: center;
  display: grid;
  justify-content: center;
  row-gap: ${({ theme }) => theme.size._5};
`

export function Faq() {
  const { t } = useTranslation('home')
  const faq = t('faq')

  return (
    <FaqContainer role="">
      <HomeSectionTitle>{t('faqTitle')}</HomeSectionTitle>
      <FaqAccordion>
        {t('faq').map(details => (
          <FaqAccordion.Item key={uuid()} {...details} />
        ))}
      </FaqAccordion>
      <CTAWrapper>
        <Cta>
          Ready to watch? Enter your email to create or restart your membership.
        </Cta>
        <EmailBox />
      </CTAWrapper>
    </FaqContainer>
  )
}

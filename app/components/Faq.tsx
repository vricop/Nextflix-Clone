import { useTranslation } from 'react-i18next'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { Accordion } from './Accordion'
import { Cta } from './common/Cta'
import { EmailBox } from './common/EmailBox'
import { HomeContainer } from './common/HomeContainer'
import { HomeSectionTitle } from './common/HomeSectionTitle'

const Title = styled(HomeSectionTitle)`
  text-align: center;
`

const FaqContainer = styled(HomeContainer)`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  row-gap: ${({ theme }) => theme.size._6};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    row-gap: ${({ theme }) => theme.size._8};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    row-gap: ${({ theme }) => theme.size._13};
  }
`

const FaqAccordion = styled(Accordion)`
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 90%;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 75%;
    max-width: 815px;
  }
`

const CTAWrapper = styled.div`
  text-align: center;
  display: grid;
  justify-items: center;
  row-gap: ${({ theme }) => theme.size._5};
`

export function Faq() {
  const { t } = useTranslation('home')

  return (
    <FaqContainer role="">
      <Title>{t('faqTitle')}</Title>
      <FaqAccordion>
        {t('faq').map(details => (
          <FaqAccordion.Item key={uuid()} {...details} />
        ))}
      </FaqAccordion>
      <CTAWrapper>
        <Cta />
        <EmailBox />
      </CTAWrapper>
    </FaqContainer>
  )
}

import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { Accordion, Item } from './Accordion'
import { Cta } from '@components/Cta'
import { EmailBox } from '@components/EmailBox'
import { HomeContainer } from '@components/HomeContainer'
import { HomeSectionTitle } from '@components/HomeSectionTitle'
import { useTranslations } from 'next-intl'

const Title = styled(HomeSectionTitle)`
  text-align: center;
`

const Container = styled(HomeContainer)`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  row-gap: ${({ theme }) => theme.size[6]};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    row-gap: ${({ theme }) => theme.size[8]};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    row-gap: ${({ theme }) => theme.size[13]};
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

FaqAccordion.displayName = 'Faq__Accordion'

const CtaWrapper = styled.div`
  text-align: center;
  display: grid;
  justify-items: center;
  row-gap: ${({ theme }) => theme.size[5]};
`

export function Faq() {
  const t = useTranslations('home')
  const keys = [1, 2, 3, 4, 5, 6] as const

  return (
    <Container role="">
      <Title>{t('faqTitle')}</Title>
      <FaqAccordion>
        {keys.map((item) => (
          <Item
            key={uuid()}
            summary={t(`faq.${item}.summary`)}
            details={t(`faq.${item}.details`)}
          />
        ))}
      </FaqAccordion>
      <CtaWrapper>
        <Cta />
        <EmailBox />
      </CtaWrapper>
    </Container>
  )
}

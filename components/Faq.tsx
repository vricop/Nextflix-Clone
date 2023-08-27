import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { Accordion, Item } from './Accordion'
import { Cta } from '@components/Cta'
import { EmailBox } from '@components/EmailBox'
import { HomeContainer } from '@components/HomeContainer'
import { HomeSectionTitle } from '@components/HomeSectionTitle'

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

export async function Faq() {
  return (
    <Container role="">
      {/* <Title>{t('home:faqTitle')}</Title> */}
      <FaqAccordion>
        {/* {t('home:faq').map((details) => ( */}
        {/*   <Item key={uuid()} {...details} /> */}
        {/* ))} */}
      </FaqAccordion>
      <CtaWrapper>
        <Cta />
        <EmailBox />
      </CtaWrapper>
    </Container>
  )
}

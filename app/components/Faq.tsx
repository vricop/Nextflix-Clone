import { faq } from '@/fixtures/faq'
import styled from 'styled-components'
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

const Title = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.text._5xl};
  line-height: ${({ theme }) => theme.leading.tighter};
`

const CTAWrapper = styled.div`
  text-align: center;
  display: grid;
  justify-content: center;
  row-gap: ${({ theme }) => theme.size._5};
`

export function Faq() {
  return (
    <FaqContainer role="">
      <Title>Frequently Asked Questions</Title>
      <Accordion>
        {faq.map(faqProps => (
          <Accordion.Item {...faqProps} />
        ))}
      </Accordion>
      <CTAWrapper>
        <Cta>
          Ready to watch? Enter your email to create or restart your membership.
        </Cta>
        <EmailBox />
      </CTAWrapper>
    </FaqContainer>
  )
}

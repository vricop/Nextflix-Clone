import { faq } from '@/fixtures/faq'
import styled from 'styled-components'
import { Accordion } from './Accordion'
import { HomeContainer } from './common/HomeContainer'

const FaqContainer = styled(HomeContainer)`
  display: grid;
  grid-auto-flow: row;
  row-gap: var(--size-8);
`

const Title = styled.h2`
  text-align: center;
  font-size: var(--text-5xl);
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
    </FaqContainer>
  )
}

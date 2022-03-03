import { ReactNode } from 'react'
import {
  Container,
  Section,
  SubTitle,
  Title,
  TitleGroup,
} from './StoryCard.styled'

export function StoryCard({
  reverse,
  children,
  title,
  tagline,
}: {
  reverse: boolean
  children: ReactNode
  title: string
  tagline: string
}) {
  return (
    <Section>
      <Container>
        <TitleGroup {...{ reverse }}>
          <Title>{title}</Title>
          <SubTitle>{tagline}</SubTitle>
        </TitleGroup>
        {children}
      </Container>
    </Section>
  )
}

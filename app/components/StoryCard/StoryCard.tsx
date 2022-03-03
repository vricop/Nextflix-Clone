import { ReactNode } from 'react'
import {
  Container,
  Section,
  SubTitle,
  Title,
  TitleGroup,
} from './StoryCard.styled'

export function StoryCard({ children }: { children: ReactNode }) {
  return (
    <Section>
      <Container>{children}</Container>
    </Section>
  )
}

const Media = ({ children }: { children: ReactNode }) => <div>{children}</div>

const Content = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => (
  <TitleGroup>
    <Title>{title}</Title>
    <SubTitle>{children}</SubTitle>
  </TitleGroup>
)

StoryCard.Media = Media
StoryCard.Content = Content

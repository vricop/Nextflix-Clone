import { ReactNode } from 'react'
import {
  Container,
  Card,
  SubTitle,
  Title,
  Text,
  Media,
} from './StoryCard.styled'

export function StoryCard({
  flipped,
  children,
  title,
  tagline,
}: {
  flipped: boolean
  children: ReactNode
  title: string
  tagline: string
}) {
  return (
    <Card>
      <Container>
        <Text {...{ flipped }}>
          <Title>{title}</Title>
          <SubTitle>{tagline}</SubTitle>
        </Text>
        <Media>{children}</Media>
      </Container>
    </Card>
  )
}

import { ReactNode } from 'react'
import { HomeContainer } from '../common/HomeContainer'
import { Container, SubTitle, Title, Text, Media } from './StoryCard.styled'

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
    <HomeContainer>
      <Container>
        <Text {...{ flipped }}>
          <Title>{title}</Title>
          <SubTitle>{tagline}</SubTitle>
        </Text>
        <Media>{children}</Media>
      </Container>
    </HomeContainer>
  )
}

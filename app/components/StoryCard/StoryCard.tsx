import { ReactNode } from 'react'
import { HomeContainer } from '../common/HomeContainer'
import { HomeSectionTitle } from '../common/HomeSectionTitle'
import { Container, Media, SubTitle, Text } from './StoryCard.styled'

export function StoryCard({
  flipped,
  children,
  title,
  tagline,
}: {
  flipped?: boolean
  children: ReactNode
  title: string
  tagline: string
}) {
  return (
    <HomeContainer>
      <Container>
        <Text {...{ flipped }}>
          <HomeSectionTitle>{title}</HomeSectionTitle>
          <SubTitle>{tagline}</SubTitle>
        </Text>
        <Media>{children}</Media>
      </Container>
    </HomeContainer>
  )
}

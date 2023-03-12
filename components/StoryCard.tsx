import { ReactNode } from 'react'
import styled from 'styled-components'
import { HomeContainer } from '@components/HomeContainer'
import { HomeSectionTitle } from '@components/HomeSectionTitle'

export const Container = styled.div`
  align-items: center;
  column-gap: ${({ theme }) => theme.size._12};
  display: grid;
  margin-inline: auto;
  max-width: 68.75rem;

  @media (min-width: 59.375rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.text.lg};
  font-weight: ${({ theme }) => theme.fontWeight.normal};

  @media (min-width: 34.375rem) {
    font-size: ${({ theme }) => theme.text._2xl};
  }
`

export const Text = styled.hgroup<{ flipped?: boolean }>`
  display: grid;
  grid-auto-flow: row;
  row-gap: ${({ theme }) => theme.size._4};

  @media (min-width: 34.375rem) {
    row-gap: ${({ theme }) => theme.size._5};
  }

  @media (min-width: 59.375rem) {
    row-gap: ${({ theme }) => theme.size._5};
    order: ${({ flipped }) => flipped && '2'};
  }

  @media (max-width: 59.375rem) {
    text-align: center;
  }
`

export const Media = styled.div`
  display: grid;
  place-items: center;
`

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

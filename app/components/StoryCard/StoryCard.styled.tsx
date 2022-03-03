import styled from 'styled-components'

export const Section = styled.section`
  background-color: black;
  padding: var(--size-18) var(--size-11);
  color: var(--color-white);
  border-bottom: var(--size-2) solid var(--color-gray-600);
`

export const Container = styled.div`
  align-items: center;
  column-gap: var(--size-12);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-inline: auto;
  max-width: 68.75rem;
`

export const Title = styled.h2`
  font-size: var(--text-5xl);
  line-height: var(--leading-tight);
`

export const SubTitle = styled.h3`
  font-size: var(--text-2xl);
  font-weight: var(--font-normal);
`

export const TitleGroup = styled.hgroup<{ reverse: boolean }>`
  display: grid;
  grid-auto-flow: row;
  row-gap: var(--size-5);
  order: ${({ reverse }) => reverse && '2'};
`

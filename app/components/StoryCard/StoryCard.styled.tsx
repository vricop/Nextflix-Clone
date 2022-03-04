import styled from 'styled-components'

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
  line-height: var(--leading-tighter);
`

export const SubTitle = styled.h3`
  font-size: var(--text-2xl);
  font-weight: var(--font-normal);
`

export const Text = styled.hgroup<{ flipped: boolean }>`
  display: grid;
  grid-auto-flow: row;
  row-gap: var(--size-5);
  order: ${({ flipped }) => flipped && '2'};
`

export const Media = styled.div`
  display: grid;
  place-items: center;
`

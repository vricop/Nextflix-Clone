import styled from 'styled-components'

export const HomeSectionTitle = styled.h2`
  text-align: center;
  font-size: ${({ theme }) => theme.text._3xl};
  line-height: ${({ theme }) => theme.leading.tighter};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.text._4xl};
  }
`

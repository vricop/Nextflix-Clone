import styled from 'styled-components'

export const HomeSectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.text['3xl']};
  line-height: ${({ theme }) => theme.leading.tighter};

  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.text['4xl']};
  }
`

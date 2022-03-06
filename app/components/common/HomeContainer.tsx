import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: black;
  padding: ${({ theme }) => theme.size['12']} 5%;
  color: ${({ theme }) => theme.color.white};
  border-bottom: ${({ theme }) =>
    `${theme.size['2']} solid ${theme.color['gray-600']}`};

  @media (min-width: 34.375rem) {
    padding: ${({ theme }) => `${theme.size['18']} ${theme.size['11']}`};
  }
`

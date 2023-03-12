import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: black;
  padding: ${({ theme }) => theme.size._12} 5%;
  color: ${({ theme }) => theme.color.white};
  border-bottom: ${({ theme }) =>
    `${theme.size._2} solid ${theme.color.gray_600}`};

  @media (min-width: 34.375rem) {
    padding: ${({ theme }) => `${theme.size._18} ${theme.size._11}`};
  }
`

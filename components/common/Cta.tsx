import styled from 'styled-components'

export const Text = styled.p`
  font-size: ${({ theme }) => theme.text.lg};

  @media (min-width: 34.375rem) {
    font-size: ${({ theme }) => theme.text.xl};
  }
`

export function Cta({ ...props }) {
  return <Text {...props}>{/* t('home:cta') */}</Text>
}

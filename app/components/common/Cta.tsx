import { useTranslation } from 'next-i18next'
import styled from 'styled-components'

export const Text = styled.p`
  font-size: ${({ theme }) => theme.text.lg};

  @media (min-width: 34.375rem) {
    font-size: ${({ theme }) => theme.text.xl};
  }
`

export function Cta({ ...props }) {
  const { t } = useTranslation()

  return <Text {...props}>{t('home:cta')}</Text>
}

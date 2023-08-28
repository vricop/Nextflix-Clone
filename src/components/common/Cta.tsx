import { useTranslations } from 'next-intl'
import styled from 'styled-components'

export const Text = styled.p`
  font-size: ${({ theme }) => theme.text.lg};

  @media (min-width: 34.375rem) {
    font-size: ${({ theme }) => theme.text.xl};
  }
`

export function Cta({ ...props }) {
  const t = useTranslations('home')
  return <Text {...props}>{t('cta')}</Text>
}

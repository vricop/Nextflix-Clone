import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { HomeContainer } from '@components/HomeContainer'
import { LanguageSelector } from '@components/LanguageSelector'
import { useTranslations } from 'next-intl'

const FooterContainer = styled(HomeContainer)`
  border-bottom: none;
  color: ${({ theme }) => theme.color.gray_500};
`

const Content = styled.div`
  max-width: 68.75rem;
  margin-inline: auto;
  display: grid;
  justify-items: start;
  row-gap: ${({ theme }) => theme.size[8]};
`

const PhoneNumber = styled.a`
  color: inherit;
  text-decoration: none;
  transition: 200ms ease-in-out;

  &:hover {
    text-decoration: underline;
  }
`

const List = styled.ul`
  width: 100%;
  font-size: ${({ theme }) => theme.text.sm};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(14rem, 100%), 1fr));
  list-style: none;
  padding: 0;
  column-gap: ${({ theme }) => theme.size[3]};
  row-gap: ${({ theme }) => theme.size[4]};
`

const ListLink = styled.a`
  color: inherit;
  transition: color 200ms ease-in-out;
  &:not(:hover) {
    text-decoration: none;
  }
`

const FooterCountry = styled.p`
  font-size: ${({ theme }) => theme.text.sm};
`

export function Footer() {
  const t = useTranslations('footer')
  const keys = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ] as const

  return (
    <FooterContainer as="footer">
      <Content>
        <p>
          {t('title')}{' '}
          <PhoneNumber href={`tel:${t('phoneNumber')}`}>
            {t('phoneNumberLink')}
          </PhoneNumber>
        </p>
        <List>
          {keys.map((item, i) => {
            return (
              <li key={uuid()}>
                <ListLink href={`#${i}`}>{t(`links.${item}`)}</ListLink>
              </li>
            )
          })}
        </List>
        <LanguageSelector />
        <FooterCountry>Netflix {t('country')}</FooterCountry>
      </Content>
    </FooterContainer>
  )
}

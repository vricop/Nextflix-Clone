import { useTranslation } from 'next-i18next'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'
import { HomeContainer } from '@components/HomeContainer'
import { LanguageSelector } from '@components/LanguageSelector'

const FooterContainer = styled(HomeContainer)`
  border-bottom: none;
  color: ${({ theme }) => theme.color.gray_500};
`

const Content = styled.div`
  max-width: 68.75rem;
  margin-inline: auto;
  display: grid;
  justify-items: start;
  row-gap: ${({ theme }) => theme.size._8};
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
  column-gap: ${({ theme }) => theme.size._3};
  row-gap: ${({ theme }) => theme.size._4};
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
  const { t } = useTranslation()

  return (
    <FooterContainer as="footer">
      <Content>
        <p>
          {t('footer:title')}{' '}
          <PhoneNumber href={`tel:${t('footer:phoneNumber')}`}>
            {t('footer:phoneNumberLink')}
          </PhoneNumber>
        </p>
        <List>
          {t('footer:links').map((text, index) => (
            <li key={uuid()}>
              <ListLink href={`#${index}`}>{text}</ListLink>
            </li>
          ))}
        </List>
        <LanguageSelector />
        <FooterCountry>Netflix {t('country')}</FooterCountry>
      </Content>
    </FooterContainer>
  )
}

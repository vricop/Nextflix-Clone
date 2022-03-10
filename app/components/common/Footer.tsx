import { footerLinks } from '@/fixtures/footerLinks'
import styled from 'styled-components'
import { HomeContainer } from './HomeContainer'
import { LanguageSelector } from './LanguageSelector'

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

const ListItem = styled.li`
  & > a {
    color: inherit;
    transition: color 200ms ease-in-out;
  }
  & > a:not(:hover) {
    text-decoration: none;
  }
`

const FooterCountry = styled.p`
  font-size: ${({ theme }) => theme.text.sm};
`

export function Footer() {
  return (
    <FooterContainer as="footer">
      <Content>
        <p>
          Questions? Call{' '}
          <PhoneNumber href="tel:+34900822377">900 822 377</PhoneNumber>
        </p>
        <List>
          {footerLinks.map(({ id, ...props }) => (
            <ListItem key={id} {...props} />
          ))}
        </List>
        <LanguageSelector />
        <FooterCountry>Netflix {t('country')}</FooterCountry>
      </Content>
    </FooterContainer>
  )
}

import { footerLinks } from '@/fixtures/footerLinks'
import styled from 'styled-components'
import { HomeContainer } from './HomeContainer'
import { LanguageSelector } from './LanguageSelector'

const FooterContainer = styled(HomeContainer)`
  border-bottom: none;
  color: var(--color-gray-500);
`

const Content = styled.div`
  max-width: 68.75rem;
  margin-inline: auto;
  display: grid;
  justify-items: start;
  row-gap: var(--size-8);
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
  font-size: var(--text-sm);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(14rem, 100%), 1fr));
  list-style: none;
  padding: 0;
  column-gap: var(--size-3);
  row-gap: var(--size-4);
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
  font-size: var(--text-sm);
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
          {footerLinks.map(props => (
            <ListItem {...props} />
          ))}
        </List>
        <LanguageSelector />
        <FooterCountry>Netflix Spain</FooterCountry>
      </Content>
    </FooterContainer>
  )
}
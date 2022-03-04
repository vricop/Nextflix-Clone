import { Language, NavArrowDown } from 'iconoir-react'
import { useRouter } from 'next/router'
import { EmailBox } from '../common/EmailBox'
import { Logo } from '../common/Logo'
import {
  ButtonGroup,
  Content,
  Cta,
  Header,
  LanguageSelector,
  LanguageSelectorWrapper,
  SignInButton,
  TagLine,
  Text,
  Title,
  TopBar,
} from './HeroHeader.styled'

export function HeroHeader() {
  const router = useRouter()

  return (
    <Header>
      <TopBar>
        <Logo />
        <ButtonGroup>
          <LanguageSelectorWrapper>
            <Language width="1em" />
            <LanguageSelector
              onChange={event => router.push(event.target.value)}
              value="English">
              <option
                value="/es/en/"
                data-language="en"
                data-country="ES"
                lang="en">
                English
              </option>
              <option
                value="/es/"
                data-language="es"
                data-country="ES"
                lang="es">
                Español
              </option>
            </LanguageSelector>
            <NavArrowDown />
          </LanguageSelectorWrapper>
          <SignInButton href="/signin">Sign in</SignInButton>
        </ButtonGroup>
      </TopBar>
      <Content>
        <Text>
          <Title>Unlimited movies, TV shows, and more.</Title>
          <TagLine>Watch anywhere. Cancel anytime.</TagLine>
          <Cta>
            Ready to watch? Enter your email to create or restart your
            membership.
          </Cta>
        </Text>
        <EmailBox />
      </Content>
    </Header>
  )
}

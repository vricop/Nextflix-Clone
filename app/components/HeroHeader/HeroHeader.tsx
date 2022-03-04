import { EmailBox } from '../common/EmailBox'
import { LanguageSelector } from '../common/LanguageSelector'
import { Logo } from '../common/Logo'
import {
  ButtonGroup,
  Content,
  Cta,
  Header,
  SignInButton,
  TagLine,
  Text,
  Title,
  TopBar,
} from './HeroHeader.styled'

export function HeroHeader() {
  return (
    <Header>
      <TopBar>
        <Logo />
        <ButtonGroup>
          <LanguageSelector />
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

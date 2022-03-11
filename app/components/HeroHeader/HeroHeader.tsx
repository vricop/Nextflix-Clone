import { useTranslation } from 'react-i18next'
import { Cta } from '../common/Cta'
import { EmailBox } from '../common/EmailBox'
import { LanguageSelector } from '../common/LanguageSelector'
import { Logo } from '../common/Logo'
import {
  ButtonGroup,
  Content,
  Header,
  SignInButton,
  TagLine,
  Text,
  Title,
  TopBar,
} from './HeroHeader.styled'

export function HeroHeader() {
  const { t } = useTranslation()

  return (
    <Header>
      <TopBar>
        <Logo />
        <ButtonGroup>
          <LanguageSelector />
          <SignInButton href="/signin">{t('signInButton')}</SignInButton>
        </ButtonGroup>
      </TopBar>
      <Content>
        <Text>
          <Title>{t('home:title')}</Title>
          <TagLine>{t('home:tagline')}</TagLine>
          <Cta />
        </Text>
        <EmailBox />
      </Content>
    </Header>
  )
}

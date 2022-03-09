import { useTranslation } from 'react-i18next'
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
          <Title>{t('title', { ns: 'home' })}</Title>
          <TagLine>{t('tagline', { ns: 'home' })}</TagLine>
          <Cta>{t('cta', { ns: 'home' })}</Cta>
        </Text>
        <EmailBox />
      </Content>
    </Header>
  )
}

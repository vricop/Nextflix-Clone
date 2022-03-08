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
  const { t } = useTranslation(['home', 'common'])

  return (
    <Header>
      <TopBar>
        <Logo />
        <ButtonGroup>
          <LanguageSelector />
          <SignInButton href="/signin">
            {t('signInButton', { ns: 'common' })}
          </SignInButton>
        </ButtonGroup>
      </TopBar>
      <Content>
        <Text>
          <Title>{t('title')}</Title>
          <TagLine>{t('tagline')}</TagLine>
          <Cta>{t('cta')}</Cta>
        </Text>
        <EmailBox />
      </Content>
    </Header>
  )
}

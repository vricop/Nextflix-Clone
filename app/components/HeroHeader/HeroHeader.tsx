import { useRouter } from 'next/router'
import { ChangeEvent, useState } from 'react'
import { Logo } from '../commons/Logo'
import {
  ButtonGroup,
  Content,
  EmailBox,
  EmailButton,
  EmailField,
  EmailLabel,
  Error,
  Header,
  LanguageSelector,
  SignInButton,
  TagLine,
  Text,
  Title,
  TopBar,
} from './HeroHeader.styles'

export function HeroHeader() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState<null | string>(null)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setErrorMessage(event.target.validationMessage)
    setEmail(event.target.value)
  }

  return (
    <Header>
      <TopBar>
        <Logo />
        <ButtonGroup>
          <LanguageSelector
            onChange={event => router.push(event.target.value)}
            value="English">
            <option value="/en/" data-language="en" data-country="EN" lang="en">
              English
            </option>
            <option value="/es/" data-language="es" data-country="ES" lang="es">
              Español
            </option>
          </LanguageSelector>
          <SignInButton href="/signin">Sign in</SignInButton>
        </ButtonGroup>
      </TopBar>
      <Content>
        <Text>
          <Title>Unlimited movies, TV shows, and more.</Title>
          <TagLine>Watch anywhere. Cancel anytime.</TagLine>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
        </Text>
        <EmailBox>
          <EmailField
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            value={email}
            className={email && 'has-text'}
            onChange={handleChange}
            name="email"
            id="email"
            type="email"
            autoComplete="email"
            maxLength={50}
            minLength={5}
          />
          <EmailLabel htmlFor="email">Email address</EmailLabel>
          <EmailButton type="button">Get Started</EmailButton>
          {errorMessage && <Error>{errorMessage}</Error>}
        </EmailBox>
      </Content>
    </Header>
  )
}

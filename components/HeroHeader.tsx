import Link, { LinkProps } from 'next/link'
import type { PropsWithChildren, ReactNode } from 'react'
import styled from 'styled-components'
import { EmailBox } from '@components/EmailBox'
import { LanguageSelector } from '@components/LanguageSelector'
import { Logo } from '@components/Logo'
import { Cta } from '@components/Cta'

const Header = styled.header`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: ${({ theme }) => theme.size[12]};
  background-color: rgba(0, 0, 0, 0.4);
  background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%),
    radial-gradient(50% 100%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 100%),
    url('/images/ES-en-20220226-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  background-size: cover;
  background-position: center;
  color: ${({ theme }) => theme.color.white};
  height: 750px;
  border-bottom: ${({ theme }) =>
    `${theme.size[2]} solid ${theme.color.gray_600}`};
`

const TopBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: ${({ theme }) => theme.size[4]};
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.size[6]} 5% 0;

  @media (min-width: 34.375rem) {
    padding-inline: ${({ theme }) => theme.size[6]};
  }

  /* Netflix logo */
  & > svg {
    width: auto;
    height: ${({ theme }) => theme.size[6]};

    @media (min-width: 34.375rem) {
      height: ${({ theme }) => theme.size[8]};
    }

    @media (min-width: 59.375rem) {
      height: ${({ theme }) => theme.size[9]};
    }

    @media (min-width: 90.625rem) {
      height: ${({ theme }) => theme.size[11]};
    }
  }
`

const ButtonGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: ${({ theme }) => theme.size[3]};
  align-items: center;

  @media (min-width: 34.375rem) {
    column-gap: ${({ theme }) => theme.size[8]};
  }
`

const StyledLink = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode
  className?: string
} & PropsWithChildren<LinkProps>) => (
  <Link className={className} {...rest}>
    {children}
  </Link>
)

const SignInButton = styled(StyledLink)`
  background-color: ${({ theme }) => theme.color.brand};
  border-radius: ${({ theme }) => theme.size['0.5em']};
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => `${theme.size['2em']} ${theme.size['4em']}`};
  line-height: ${({ theme }) => theme.leading.snug};
  text-decoration: none;
  border: ${({ theme }) => theme.size.px} solid transparent;
  font-size: ${({ theme }) => theme.text.xs};

  @media (min-width: 34.375rem) {
    font-size: ${({ theme }) => theme.text.sm};
  }
`

const Content = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding-inline: 5%;
  justify-items: center;
  align-content: center;
  row-gap: ${({ theme }) => theme.size[6]};
  text-align: center;

  @media (min-width: 34.375rem) {
    padding-inline: ${({ theme }) => theme.size[12]};
  }
`

const Text = styled.div`
  display: grid;
  grid-auto-flow: row;
  justify-items: center;
  row-gap: ${({ theme }) => theme.size[2]};

  @media (min-width: 34.375rem) {
    row-gap: ${({ theme }) => theme.size[5]};
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.text['2xl']};
  line-height: ${({ theme }) => theme.leading.tight};
  max-width: 40rem;

  @media (min-width: 34.375rem) {
    font-size: ${({ theme }) => theme.text['5xl']};
  }

  @media (min-width: 90.625rem) {
    font-size: ${({ theme }) => theme.text['6xl']};
  }
`

const TagLine = styled.h2`
  font-size: ${({ theme }) => theme.text.lg};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  max-width: 40rem;

  @media (min-width: 34.375rem) {
    font-size: ${({ theme }) => theme.text['2xl']};
  }
`

export function HeroHeader() {
  // const { t } = useTranslation(['common', 'home'])

  return (
    <Header>
      <TopBar>
        <Logo />
        <ButtonGroup>
          <LanguageSelector />
          <SignInButton href="/login">{/* t('common:signInButton') */}</SignInButton>
        </ButtonGroup>
      </TopBar>
      <Content>
        <Text>
          <Title>{/* t('home:title') */}</Title>
          <TagLine>{/* t('home:tagline') */}</TagLine>
          <Cta />
        </Text>
        <EmailBox />
      </Content>
    </Header>
  )
}

import Link, { LinkProps } from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'
import styled from 'styled-components'

export const Header = styled.header`
  display: grid;
  grid-template-rows: auto 1fr;
  row-gap: var(--size-12);
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
  color: var(--color-white);
  height: 750px;
  border-bottom: var(--size-2) solid var(--color-gray-600);
`

export const TopBar = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: var(--size-4);
  align-items: center;
  justify-content: space-between;
  padding: var(--size-6) var(--size-14) 0;
`

export const ButtonGroup = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: var(--size-8);
`

const StyledLink = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode
  className?: string
} & PropsWithChildren<LinkProps>) => (
  <Link {...rest}>
    <a {...{ className }}>{children}</a>
  </Link>
)

export const SignInButton = styled(StyledLink)`
  background-color: var(--color-brand);
  border-radius: var(--size-0-5);
  color: var(--color-white);
  padding: var(--size-2) var(--size-4);
  line-height: var(--leading-snug);
  text-decoration: none;
  border: var(--size-px) solid transparent;
`

export const Content = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding-inline: var(--size-12);
  place-content: center;
  row-gap: var(--size-6);
  text-align: center;
`

export const Text = styled.div`
  display: grid;
  grid-auto-flow: row;
  row-gap: var(--size-5);
`

export const Title = styled.h1`
  font-size: var(--text-6xl);
  line-height: var(--leading-tight);
  max-width: 800px;
`

export const TagLine = styled.h2`
  font-size: var(--text-6xl);
  font-size: var(--text-2xl);
  font-weight: var(--font-normal);
`

export const Cta = styled.p`
  font-size: var(--text-xl);
`

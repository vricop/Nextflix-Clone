import Link from 'next/link'
import styled from 'styled-components'
import { Icon } from '../commons/Icon'

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
  font-family: var(--font-netflix-sans);
  height: 750px;
  border-bottom: var(--size-3) solid var(--color-gray-600);
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

export const SignInButton = styled(({ children, className, ...rest }) => (
  <Link {...rest}>
    <a {...{ className }}>{children}</a>
  </Link>
))`
  background-color: var(--color-brand);
  border-radius: var(--size-0-5);
  color: var(--color-white);
  padding: var(--size-2) var(--size-5);
  line-height: var(--leading-snug);
  text-decoration: none;
  border: var(--size-px) solid transparent;
`

export const LanguageSelector = styled.select`
  border: var(--size-px) solid var(--color-gray-400);
  background-color: rgba(0, 0, 0, 0.4);
  color: var(--color-white);
  font-size: var(--text-sm);
  padding: var(--size-2) var(--size-3);
  line-height: var(--leading-snug);
  border-radius: var(--size-0-5);
  appearance: none;
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
  font-family: var(--font-netflix-sans);
  line-height: var(--leading-tight);
  max-width: 800px;
`

export const TagLine = styled.h2`
  font-size: var(--text-6xl);
  font-family: var(--font-netflix-sans);
  font-size: var(--text-2xl);
  font-weight: var(--font-normal);
`

export const EmailBox = styled.div`
  display: grid;
  grid-template: 'input button' auto / min-content max-content;
  justify-items: start;
  row-gap: var(--size-1);
  position: relative;
`

export const EmailLabel = styled.label`
  grid-area: input;
  position: absolute;
  top: 50%;
  left: var(--size-3);
  transform: translateY(-50%);
  color: var(--color-gray-400);
  pointer-events: none;
`

export const borderStyles = 'var(--size-0-5) solid var(--color-orange)'

export const EmailField = styled.input`
  grid-area: input;
  line-height: var(--leading-17);
  padding-inline: var(--size-3);
  width: 500px;
  border: none;
  border-radius: var(--size-0-5) 0 0 var(--size-0-5);

  & + label {
    transition: all 200ms ease-in-out;
  }

  &.has-text + label,
  &:focus + label {
    top: var(--size-1);
    transform: translateY(0);
    font-size: var(--text-xs);
    font-weight: var(--font-bold);
  }

  border-bottom: ${({ error }: { error?: boolean }) => error && borderStyles};
`

export const EmailButton = styled(({ children, ...rest }) => (
  <button {...rest}>
    {children}
    <Icon name="chevron-right" />
  </button>
))`
  align-items: center;
  background-color: var(--color-brand-alt-light);
  border-radius: 0 var(--size-0-5) var(--size-0-5) 0;
  border: none;
  color: var(--color-wite);
  column-gap: 0.75ch;
  display: grid;
  font-size: var(--text-3xl);
  grid-area: button;
  grid-auto-columns: min-content min-content;
  grid-auto-flow: column;
  justify-content: center;
  line-height: var(--leading-17);
  padding-inline: var(--size-8);
  white-space: nowrap;
  width: 100%;
  transition: 200ms ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: var(--color-brand);
  }

  & > svg {
    font-size: var(--text-2xl);
  }
`

export const Error = styled.span`
  position: absolute;
  left: 0;
  bottom: calc(var(--size-1) * -1);
  color: var(--color-orange);
  transform: translateY(100%);
`

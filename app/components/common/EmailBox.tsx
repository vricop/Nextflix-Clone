import { NavArrowRight } from 'iconoir-react'
import { ChangeEvent, ReactNode, useState } from 'react'
import styled from 'styled-components'

export const Container = styled.div`
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

const Button = ({ children, ...rest }: { children: ReactNode }) => (
  <button type="button" {...rest}>
    {children}
    <NavArrowRight />
  </button>
)
export const GetStartedButton = styled(Button)`
  align-items: center;
  background-color: var(--color-brand-alt-light);
  border-radius: 0 var(--size-0-5) var(--size-0-5) 0;
  border: none;
  color: var(--color-wite);
  column-gap: var(--size-1);
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

export function EmailBox() {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState<null | string>(null)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setErrorMessage(event.target.validationMessage)
    setEmail(event.target.value)
  }

  return (
    <Container>
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
      <GetStartedButton>Get Started</GetStartedButton>
      {errorMessage && <Error>{errorMessage}</Error>}
    </Container>
  )
}

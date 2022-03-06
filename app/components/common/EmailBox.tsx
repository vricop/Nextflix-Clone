import { NavArrowRight } from 'iconoir-react'
import { ChangeEvent, ReactNode, useState } from 'react'
import styled from 'styled-components'

export const Form = styled.form`
  --height: 3rem;
  --offset: 0.625rem;
  grid-template:
    'input' auto
    'error' auto
    'button' auto / auto;
  display: grid;
  row-gap: var(--size-3);
  justify-items: center;
  position: relative;

  @media (max-width: 59.375rem) {
    width: 100%;
    max-width: 500px;
  }

  @media (min-width: 34.375rem) {
    --height: 3.75rem;
  }

  @media (min-width: 59.375rem) {
    --height: 4.375rem;
    justify-items: start;
    grid-template:
      'input button' var(--height)
      'error  error' auto / min-content max-content;
    row-gap: var(--size-1);
  }
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
  border-radius: var(--size-0-5);
  grid-area: input;
  padding: var(--offset) var(--size-3) 0;
  width: 100%;
  height: var(--height);
  border: none;

  @media (min-width: 59.375rem) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 500px;
    height: initial;
  }

  @media (min-width: 34.375rem) {
    line-height: calc(var(--height) - var(--offset));
  }

  & + label {
    transition: all 200ms ease-in-out;
  }

  &.has-text + label,
  &:focus + label {
    top: var(--size-1);
    transform: translateY(0);
    font-size: var(--text-sm);
    font-weight: var(--font-bold);

    @media (max-width: 34.375rem) {
      font-size: var(--text-xs);
    }
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
  border-radius: var(--size-0-5);
  border: none;
  color: var(--color-wite);
  column-gap: var(--size-1);
  display: grid;
  grid-area: button;
  grid-auto-columns: min-content min-content;
  grid-auto-flow: column;
  justify-content: center;
  line-height: var(--leading-10);
  padding-inline: var(--size-3);
  white-space: nowrap;
  width: auto;
  transition: 200ms ease-in-out;

  @media (min-width: 59.375rem) {
    border-top-left-radius: 0;
    leading: var(--height);
    border-bottom-left-radius: 0;
    font-size: var(--text-2xl);
    padding-inline: var(--size-8);
  }

  @media (min-width: 90.625rem) {
    font-size: var(--text-3xl);

    & > svg {
      font-size: var(--text-2xl);
    }
  }

  &:hover {
    cursor: pointer;
    background-color: var(--color-brand);
  }
`

export const Error = styled.span`
  color: var(--color-orange);
  grid-area: error;
  justify-self: start;
  text-align: left;
  line-height: var(--leading-snug);

  @media (min-width: 59.375rem) {
    position: absolute;
    justify-self: initial;
  }
`

export function EmailBox() {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState<null | string>(null)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setErrorMessage(event.target.validationMessage)
    setEmail(event.target.value)
  }

  return (
    <Form method="get">
      <EmailField
        error={errorMessage !== ''}
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
    </Form>
  )
}

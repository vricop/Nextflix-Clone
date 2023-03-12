import { NavArrowRight } from 'iconoir-react'
import { ChangeEvent, ReactNode, useState } from 'react'
import { useTranslation } from 'next-i18next'
import styled from 'styled-components'

export const Form = styled.form`
  --height: 3rem;
  --offset: 0.625rem;
  grid-template:
    'input' auto
    'error' auto
    'button' auto / auto;
  display: grid;
  row-gap: ${({ theme }) => theme.size._3};
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
    row-gap: ${({ theme }) => theme.size._1};
  }
`

export const Label = styled.label`
  grid-area: input;
  position: absolute;
  top: 50%;
  left: ${({ theme }) => theme.size._3};
  transform: translateY(-50%);
  color: ${({ theme }) => theme.color.gray_400};
  pointer-events: none;
`

export const Field = styled.input<{ error?: boolean }>`
  border-radius: ${({ theme }) => theme.size._0_5};
  grid-area: input;
  padding: var(--offset) ${({ theme }) => theme.size._3} 0;
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
    top: ${({ theme }) => theme.size._1};
    transform: translateY(0);
    font-size: ${({ theme }) => theme.text.sm};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    @media (max-width: 34.375rem) {
      font-size: ${({ theme }) => theme.text.xs};
    }
  }

  border-bottom: ${({ error, theme }) =>
    error &&
    `
    ${theme.size._0_5} solid ${theme.color.orange}
  `};
`

const Button = ({ children, ...rest }: { children: ReactNode }) => (
  <button type="button" {...rest}>
    {children}
    <NavArrowRight />
  </button>
)

export const GetStartedButton = styled(Button)`
  align-items: center;
  background-color: ${({ theme }) => theme.color.brand_alt_light};
  border-radius: ${({ theme }) => theme.size._0_5};
  border: none;
  color: ${({ theme }) => theme.color.white};
  column-gap: ${({ theme }) => theme.size._1};
  display: grid;
  grid-area: button;
  grid-auto-columns: min-content min-content;
  grid-auto-flow: column;
  justify-content: center;
  line-height: ${({ theme }) => theme.leading._10};
  padding-inline: ${({ theme }) => theme.size._3};
  white-space: nowrap;
  width: auto;
  transition: 200ms ease-in-out;

  @media (min-width: 59.375rem) {
    border-top-left-radius: 0;
    leading: var(--height);
    border-bottom-left-radius: 0;
    font-size: ${({ theme }) => theme.text._2xl};
    padding-inline: ${({ theme }) => theme.size._8};
  }

  @media (min-width: 90.625rem) {
    font-size: ${({ theme }) => theme.text._3xl};

    & > svg {
      font-size: ${({ theme }) => theme.text._2xl};
    }
  }

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.color.brand};
  }
`

export const Error = styled.span`
  color: ${({ theme }) => theme.color.orange};
  grid-area: error;
  justify-self: start;
  text-align: left;
  line-height: ${({ theme }) => theme.leading.snug};

  @media (min-width: 59.375rem) {
    position: absolute;
    justify-self: initial;
  }
`

export function EmailBox() {
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState<null | string>(null)
  const { t } = useTranslation()

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setErrorMessage(event.target.validationMessage)
    setEmail(event.target.value)
  }

  return (
    <Form method="get">
      <Field
        error={email !== '' && errorMessage !== ''}
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        value={email}
        className={email && 'has-text'}
        onChange={handleChange}
        name="email"
        id="email"
        type="email"
        autoComplete="off"
        maxLength={50}
        minLength={5}
      />
      <Label htmlFor="email">{t('emailAddressFieldLabel')}</Label>
      <GetStartedButton>
        {t('getStartedButton', { ns: 'home' })}
      </GetStartedButton>
      {errorMessage && <Error>{errorMessage}</Error>}
    </Form>
  )
}

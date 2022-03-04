import { Language, NavArrowDown } from 'iconoir-react'
import { useRouter } from 'next/router'
import styled from 'styled-components'

const LanguageSelectorWrapper = styled.div`
  display: inlnie-flex;
  align-items: center;
  position: relative;
  border: var(--size-px) solid var(--color-gray-400);
  border-radius: var(--size-0-5);

  svg {
    pointer-events: none;
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
  }

  svg:first-child {
    left: var(--size-2);
  }

  svg:last-child {
    right: var(--size-2);
  }
`

const Select = styled.select`
  display: block;
  width: 100%;
  padding: var(--size-2) var(--size-7);
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  color: inherit;
  font-size: var(--text-sm);
  line-height: var(--leading-snug);
  appearance: none;
`

export function LanguageSelector() {
  const router = useRouter()

  return (
    <LanguageSelectorWrapper>
      <Language width="1em" />
      <Select
        onChange={event => router.push(event.target.value)}
        value="English">
        <option value="/es/en/" data-language="en" data-country="ES" lang="en">
          English
        </option>
        <option value="/es/" data-language="es" data-country="ES" lang="es">
          Español
        </option>
      </Select>
      <NavArrowDown />
    </LanguageSelectorWrapper>
  )
}

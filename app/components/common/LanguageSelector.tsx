import { Language, NavArrowDown } from 'iconoir-react'
import { useRouter } from 'next/router'
import { ChangeEvent } from 'react'
import styled from 'styled-components'

const LanguageSelectorWrapper = styled.div`
  display: inlnie-flex;
  align-items: center;
  position: relative;
  border: ${({ theme }) => `${theme.size.px} solid ${theme.color.gray_400}`};
  border-radius: ${({ theme }) => theme.size._0_5};
  font-size: ${({ theme }) => theme.text.xs};

  @media (min-width: 34.375rem) {
    font-size: ${({ theme }) => theme.text.sm};
  }

  svg {
    pointer-events: none;
    top: 50%;
    position: absolute;
    transform: translateY(-50%);
  }

  svg:first-child {
    left: ${({ theme }) => theme.size._2};
  }

  svg:last-child {
    right: ${({ theme }) => theme.size._2};
  }
`

const Select = styled.select`
  display: block;
  width: 100%;
  padding: ${({ theme }) => `${theme.size._2em} ${theme.size._7em}`};
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  color: inherit;
  line-height: ${({ theme }) => theme.leading.snug};
  appearance: none;
`

export function LanguageSelector() {
  const router = useRouter()
  const { pathname } = router

  const changeUrlLocale = (event: ChangeEvent<HTMLSelectElement>) => {
    router.replace(pathname, pathname, { locale: event.target.value })
    document.cookie = `NEXT_LOCALE=${event.target.value}; expires=${new Date(
      '9999-01-01'
    ).toUTCString()}`
  }
  return (
    <LanguageSelectorWrapper>
      <Language width="1em" />
      <Select onChange={changeUrlLocale} defaultValue={router.locale || 'en'}>
        <option value="en" lang="en">
          English
        </option>
        <option value="es" lang="es">
          Español
        </option>
        <option value="it" lang="it">
          Italiano
        </option>
        <option value="ca-ES" lang="ca">
          Català
        </option>
      </Select>
      <NavArrowDown />
    </LanguageSelectorWrapper>
  )
}

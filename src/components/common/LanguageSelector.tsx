import { Language, NavArrowDown } from 'iconoir-react'
import { useLocale } from 'next-intl'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import styled from 'styled-components'

const LanguageSelectorWrapper = styled.div`
  display: inlnie-flex;
  align-items: center;
  position: relative;
  border: ${({ theme }) => `${theme.size.px} solid currentColor`};
  border-radius: ${({ theme }) => theme.size[0.5]};
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
    left: ${({ theme }) => theme.size[2]};
  }

  svg:last-child {
    right: ${({ theme }) => theme.size[2]};
  }
`

const Select = styled.select`
  display: block;
  width: 100%;
  padding: ${({ theme }) => `${theme.size['2em']} ${theme.size['7em']}`};
  border: none;
  background-color: rgba(0, 0, 0, 0.4);
  color: inherit;
  line-height: ${({ theme }) => theme.leading.snug};
  appearance: none;
`

export function LanguageSelector() {
  const [language, setLanguage] = useState('en')
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()

  const changeUrlLocale = (event: ChangeEvent<HTMLSelectElement>) => {
    const langPathname = pathname.replace(locale, event.target.value)
    router.push(langPathname, { scroll: false })

    document.cookie = `NEXT_LOCALE=${event.target.value}; expires=${new Date(
      '9999-01-01',
    ).toUTCString()} samesite=strict; secure=true`
  }

  useEffect(() => {
    setLanguage(locale)
  }, [locale])

  return (
    <LanguageSelectorWrapper>
      <Language width="1em" />
      <Select onChange={changeUrlLocale} value={language}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="it">Italiano</option>
      </Select>
      <NavArrowDown />
    </LanguageSelectorWrapper>
  )
}

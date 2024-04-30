import CaretDown from '@public/icons/caret-down.svg'
import I18n from '@public/icons/i18n.svg'
import classNames from 'classnames'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, ComponentProps, useEffect, useState } from 'react'

export function LanguageSelector({
  className,
  ...props
}: ComponentProps<'div'>) {
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
    <div
      className={classNames(
        'inline-flex items-center relative bg-[rgba(22,22,22,0.7)]',
        className,
      )}
      {...props}
    >
      <I18n className="pointer-events-none top-1/2 left-2 absolute transform -translate-y-1/2" />
      <select
        onChange={changeUrlLocale}
        value={language}
        className="block w-full px-9 border border-neutral-500 rounded bg-transparent text-inherit text-center leading-[calc(2rem-2px)] appearance-none"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="it">Italiano</option>
      </select>
      <CaretDown className="pointer-events-none top-1/2 right-2 absolute transform -translate-y-1/2" />
    </div>
  )
}

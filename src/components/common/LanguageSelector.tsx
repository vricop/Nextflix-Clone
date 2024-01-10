import CaretDown from '@public/icons/caret-down.svg'
import Globe from '@public/icons/globe.svg'
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
        'inline-flex items-center relative bg-[rgba(22,22,22,0.7)] sm:text-sm',
        className,
      )}
      {...props}
    >
      <Globe className="pointer-events-none top-1/2 left-2 absolute transform -translate-y-1/2" />
      <select
        onChange={changeUrlLocale}
        value={language}
        className="block w-full px-[calc(36/14*1em)] border-[calc(1/14*1em)] border-[rgba(128,128,128,0.7)] rounded-sm bg-transparent text-inherit text-sm font-medium text-center leading-[calc(30/14*1em)] appearance-none"
      >
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="it">Italiano</option>
      </select>
      <CaretDown className="pointer-events-none top-1/2 right-2 absolute transform -translate-y-1/2" />
    </div>
  )
}

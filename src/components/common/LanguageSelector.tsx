import CaretDown from '@public/icons/caret-down.svg'
import I18n from '@public/icons/i18n.svg'
import classNames from 'classnames'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, ComponentProps, useEffect, useState } from 'react'

export function LanguageSelector({
  className,
  ...props
}: ComponentProps<'div'>) {
  const t = useTranslations('common')
  const [language, setLanguage] = useState('en')
  const router = useRouter()
  const locale = useLocale()
  const pathname = usePathname()
  const langs = ['en', 'es', 'it'] as const

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
        'grid items-center w-16 md:w-full text-white bg-neutral-900/60',
        className,
      )}
      {...props}
    >
      <I18n className="pointer-events-none [grid-area:1/1] ml-3 mr-auto" />
      <CaretDown className="pointer-events-none [grid-area:1/1] mr-3 ml-auto" />
      <select
        onChange={changeUrlLocale}
        value={language}
        className="[grid-area:1/1] w-full pl-9 pr-7 border border-neutral-500 rounded bg-transparent text-inherit text-center leading-[calc(2rem-2px)] appearance-none focus:outline outline-offset-2 outline-2 outline-white"
      >
        {langs.map((lang) => (
          <option value={lang} label={t(`langs.${lang}`)} key={lang} />
        ))}
      </select>
    </div>
  )
}

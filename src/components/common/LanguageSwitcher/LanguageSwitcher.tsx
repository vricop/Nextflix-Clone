'use client'
import CaretDown from '@public/icons/caret-down.svg'
import I18n from '@public/icons/i18n.svg'
import classNames from 'classnames'
import { Messages } from 'global'
import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, ComponentProps } from 'react'

interface LanguageSwitcher extends ComponentProps<'select'> {
  options: Messages['common']['langs']
}

export function LanguageSwitcher({ className, options }: LanguageSwitcher) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const langs = Object.keys(options) as (keyof typeof options)[]

  function handleOnChange(e: ChangeEvent<HTMLSelectElement>) {
    const langPathname = pathname.replace(locale, e.target.value)
    router.replace(langPathname, { scroll: false })
  }

  return (
    <div
      className={classNames(
        'grid items-center w-16 md:w-auto text-white bg-neutral-900/60',
        className,
      )}
    >
      <I18n className="pointer-events-none [grid-area:1/1] ml-3 mr-auto" />
      <CaretDown className="pointer-events-none [grid-area:1/1] mr-3 ml-auto" />
      <select
        onChange={handleOnChange}
        defaultValue={locale}
        className="[grid-area:1/1] w-full pl-9 pr-7 border border-neutral-500 rounded bg-transparent text-inherit text-center leading-[calc(2rem-2px)] appearance-none focus:outline outline-offset-2 outline-2 outline-white"
      >
        {langs.map((lang, i) => (
          <option key={`${lang}-${i}`} value={lang} label={options[lang]} />
        ))}
      </select>
    </div>
  )
}

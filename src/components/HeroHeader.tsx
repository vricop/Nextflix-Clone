'use client'
import Link from 'next/link'
import { EmailBox } from '@components/EmailBox'
import { LanguageSelector } from '@components/LanguageSelector'
import { Logo } from '@components/Logo'
import { useTranslations } from 'next-intl'

export function HeroHeader() {
  const t = useTranslations('home')

  return (
    <header className="grid grid-rows-[auto_1fr] gap-x-12 bg-black/5 hero-header bg-cover bg-center text-white h-[750px] border border-b-gray-600">
      <div className="grid grid-flow-col gap-x-4 items-center justify-between pt-6 px-[5%] sm:px-6 pb-0">
        <Logo className="w-auto h-6 sm:h-8 md:h-9 lg:h-11" />
        <div className="grid grid-flow-col gap-x-3 items-center sm:gap-x-8">
          <LanguageSelector />
          <Link
            href="/login"
            className="bg-netflix rounded-[.125em] text-white py-[.5em] px-[1em] leading-snug no-underline border border-transparent text-xs sm:text-sm"
          >
            {t('signInButton')}
          </Link>
        </div>
      </div>
      <div className="grid grid-flow-row px-[5%] justify-items-center content-center gap-y-6 text-center sm:px-12">
        <div className="grid grid-flow-row justify-items-center gap-y-2 sm:gap-y-5">
          <h1 className="text-2xl leading-tight max-w-[40rem] sm:text-5xl xl:text-6xl">
            {t('title')}
          </h1>
          <h2 className="text-lg sm:text-2xl text-normal max-w-2xl">
            {t('tagline')}
          </h2>
          <p className="text-lg sm:text-xl">{t('cta')}</p>
        </div>
        <EmailBox />
      </div>
    </header>
  )
}

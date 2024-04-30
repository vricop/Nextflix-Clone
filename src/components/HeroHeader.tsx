'use client'
import Link from 'next/link'
import { EmailBox } from '@components/EmailBox'
import { LanguageSelector } from '@components/LanguageSelector'
import { Logo } from '@components/Logo'
import { useTranslations } from 'next-intl'

export function HeroHeader() {
  const t = useTranslations('home')

  return (
    <div className="hero-header bg-cover grid grid-rows-[auto_1fr] gap-y-10 sm:gap-y-[4.125rem] min-h-[30rem] md:min-h-[32rem] lg:min-h-[39.25rem] text-white @container">
      <header className="w-full mx-auto @7xl:max-w-[calc(83.33333333333334%-6rem)] grid grid-flow-col justify-between items-center py-6 px-8 @container">
        <Logo className="w-[5.5625rem] h-6 2xl:w-[9.25rem] 2xl:h-10 text-netflix" />
        <div className="grid grid-flow-col gap-x-2 @3xl:gap-x-6 content-stretch items-center text-base font-medium">
          <LanguageSelector />
          <Link
            href="/login"
            className="bg-netflix rounded text-white no-underline border border-transparent text-inherit leading-[calc(2rem-2px)] px-4"
          >
            {t('signInButton')}
          </Link>
        </div>
      </header>
      <div className="grid grid-flow-row px-[5%] justify-items-center content-center gap-y-6 text-center sm:px-12">
        <div className="grid grid-flow-row justify-items-center gap-y-2 sm:gap-y-5">
          <h1 className="text-4xl lg:text-6xl leading-tight font-black">
            {t('title')}
          </h1>
          <h2 className="text-lg sm:text-2xl text-normal max-w-2xl">
            {t('tagline')}
          </h2>
          <p className="text-lg sm:text-xl">{t('cta')}</p>
        </div>
        <EmailBox />
      </div>
      <div className="bg-[rgb(0_0_0_/_40%)] bg-[linear-gradient(to_top,_rgba(0,_0,_0,_0.8)_0,_rgba(0,_0,_0,_0)_60%,_rgba(0,_0,_0,_0.8)_100%)]" />
    </div>
  )
}

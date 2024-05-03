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
      <header className="w-full mx-auto @7xl:max-w-[calc(83.33333333333334%-6rem)] grid grid-flow-col justify-between items-center p-6 sm:px-8 @container">
        <Logo className="w-[5.5625rem] h-6 lg:w-[9.25rem] lg:h-10 text-netflix" />
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
      <div className="grid grid-flow-row mx-auto max-w-[calc(100%-3rem)] justify-items-center content-center gap-y-6 text-center sm:px-12">
        <div className="w-full grid grid-flow-row justify-items-center gap-y-5 sm:gap-y-5">
          <h1 className="text-[2rem] lg:text-5xl leading-tight font-bold lg:font-black ">
            {t('title')}
          </h1>
          <h2 className="text-lg sm:text-2xl text-normal max-w-2xl">
            {t('tagline')}
          </h2>
        </div>
        <div className="grid gap-y-4 justify-center max-w-[61.5rem] px-6">
          <p className="text-lg sm:text-lg">{t('cta')}</p>
          <EmailBox />
        </div>
      </div>
    </div>
  )
}

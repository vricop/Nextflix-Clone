import { Logo } from '@components/Logo'
import { useMessages } from 'next-intl'
import Link from 'next/link'
import { EmailBox } from '@components/EmailBox'
import { LanguageSwitcher } from '@components/LanguageSwitcher'
import { Locale, defaultLocale } from 'src/config'

interface HeroHeader {
  locale: Locale
}

export function HeroHeader({ locale }: HeroHeader) {
  const messages = useMessages()
  const { home, common } = messages
  const link = locale === defaultLocale ? '/login' : `/${locale}/login`

  return (
    <header className="grid overflow-hidden">
      <div className="[grid-area:1/1] max-h-[30rem] sm:max-h-[32rem] lg:max-h-[43.75rem]">
        <img
          className="w-auto sm:w-full h-full object-cover origin-center scale-125 -translate-y-[10%]"
          src="/images/ES-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_small.jpg"
          srcSet=" /images/ES-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_small.jpg 1000w, /images/ES-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_medium.jpg 1500w, /images/ES-en-20240429-POP_SIGNUP_TWO_WEEKS-perspective_WEB_large.jpg 1800w"
          alt=""
        />
      </div>
      <div className="bg-black/40 bg-gradient-to-t relative from-black/80 via-transparent via-60% to-black/80 [grid-area:1/1] min-h-[30rem] sm:min-h-[32rem] lg:min-h-[43.75rem]" />
      <div className="[grid-area:1/1] grid grid-rows-[auto_1fr] sm:gap-y-[theme(spacing.2)] text-white">
        <header className="w-full mx-auto xl:max-w-[calc(83.33333333333334%-6rem)] grid grid-flow-col justify-between items-center p-6 sm:px-8 @container">
          <Logo className="w-[5.5625rem] h-6 lg:w-[9.25rem] lg:h-10 text-netflix" />
          <div className="grid grid-flow-col gap-x-2 @3xl:gap-x-6 content-stretch items-center text-base font-medium">
            <LanguageSwitcher />
            <Link
              href={link}
              className="bg-netflix rounded text-white no-underline border border-transparent text-inherit leading-[calc(2rem-2px)] px-4 focus:outline outline-offset-2 outline-2 outline-white"
            >
              {home.signInButton}
            </Link>
          </div>
        </header>
        <div className="relative grid grid-flow-row mx-auto max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-4rem)] xl:max-w-[calc(83.333%-6rem)] justify-items-center content-center gap-y-6 text-center sm:px-12">
          <div className="w-full grid grid-flow-row justify-items-center gap-y-5 sm:gap-y-5">
            <h1 className="text-[2rem] lg:text-5xl leading-tight font-bold lg:font-black ">
              {home.title}
            </h1>
            <h2 className="text-lg sm:text-2xl text-normal max-w-2xl">
              {home.tagline}
            </h2>
          </div>
          <div className="grid gap-y-4 justify-items-center max-w-[61.5rem] px-6">
            <h3 className="text-lg sm:text-lg lg:text-xl">{home.cta}</h3>
            <EmailBox
              errorText={common.errors.invalidEmail}
              labelText={home.emailPlaceholder}
              buttonText={home.getStartedButton}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

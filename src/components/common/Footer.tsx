'use client'
import { v4 as uuid } from 'uuid'
import { HomeContainer } from '@components/HomeContainer'
import { LanguageSelector } from '@components/LanguageSelector'
import { useMessages, useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  const keys = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
  ] as const

  return (
    <HomeContainer as="footer" hasBorder={false} className="py-8 lg:py-[4.5rem] px-6 md:px-8">
      <div className="max-w-6xl mx-auto grid  gap-y-8 text-neutral-300 font-normal">
        <a className="underline" href={`tel:${t('phoneNumber')}`}>
          {t('title')}
        </a>
        <ul className="w-full text-sm grid grid-cols-2 lg:grid-cols-4 list-none p-0 gap-x-3 gap-y-4 underline">
          {keys.map((item, i) => {
            return (
              <li key={uuid()}>
                <a
                  className="transition-colors duration-200 ease-in-out no-underline hover:underline"
                  href={`#${i}`}
                >
                  {t(`links.${item}`)}
                </a>
              </li>
            )
          })}
        </ul>
        <LanguageSelector className="justify-self-start" />
        <p className="text-sm">Netflix {t('country')}</p>
      </div>
    </HomeContainer>
  )
}

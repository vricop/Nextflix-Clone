'use client'
import { v4 as uuid } from 'uuid'
import { HomeContainer } from '@components/HomeContainer'
import { LanguageSelector } from '@components/LanguageSelector'
import { useTranslations } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  const keys = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
  ] as const

  return (
    <HomeContainer className="border-b-0 text-gray-500">
      <div className="max-w-6xl mx-auto grid justify-start sm:justify-normal gap-y-8">
        <p>
          {t('title')}{' '}
          <a
            className="no-underline hover:underline"
            href={`tel:${t('phoneNumber')}`}
          >
            {t('phoneNumberLink')}
          </a>
        </p>
        <ul className="w-full text-sm grid grid-cols-[repeat(auto-fit,minmax(min(14rem,100%),1fr))] list-none p-0 gap-x-3 gap-y-4">
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

import { HomeContainer } from '@components/HomeContainer'
import { LanguageSwitcher } from '@components/common/LanguageSwitcher'
import { t } from 'i18next'
import { useMessages } from 'next-intl'

export function Footer() {
  const { footer } = useMessages()
  const links = footer.links
  const keys = Object.keys(footer.links) as (keyof typeof links)[]

  return (
    <HomeContainer
      as="footer"
      hasBorder={false}
      className="py-8 lg:py-[4.5rem] px-6 md:px-8"
    >
      <div className="max-w-6xl mx-auto grid  gap-y-8 text-neutral-300 font-normal">
        <a className="underline" href={`tel:${footer.phoneNumber}`}>
          {t('title')}
        </a>
        <ul className="w-full text-sm grid grid-cols-2 lg:grid-cols-4 list-none p-0 gap-x-3 gap-y-4 underline">
          {keys.map((link, i) => {
            return (
              <li key={i}>
                <a
                  className="transition-colors duration-200 ease-in-out no-underline hover:underline"
                  href={`#`}
                >
                  {links[link]}
                </a>
              </li>
            )
          })}
        </ul>
        <LanguageSwitcher className="justify-self-start" />
        <p className="text-sm">Netflix {footer.country}</p>
      </div>
    </HomeContainer>
  )
}

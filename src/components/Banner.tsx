'use client'
import PopCorn from '@icons/popcorn.svg'
import ChevronRight from '@icons/chevron-right-standard.svg'
import { useTranslations } from 'next-intl'

export function Banner() {
  const t = useTranslations('home')

  return (
    <div className="mt-4 sm:mt-0 lg:-mt-[72px] mx-6 sm:mx-[74px] relative @container">
      <div
        className={`
          rounded sm:flex justify-center items-center gap-x-8 grid-flow-col
          text-white p-8 sm:p-6 banner shadow-[0px_-8px_25px_rgba(0,_0,_0,_0.5)]
        `}
      >
        <PopCorn className="-mt-20 sm:mt-[initial] sm:ml-[initial] scale-[0.8] sm:scale-100" />
        <div className="grid gap-y-2 justify-items-start">
          <p className="text-xl font-medium">{t('banner.title')}</p>
          <p className="text-base">{t('banner.description')}</p>
          <a className="underline text-blue-500 font-medium flex first-baseline items-center gap-x-2">
            {t('banner.link')}
            <ChevronRight className="align-middle inline-block" />
          </a>
        </div>
      </div>
    </div>
  )
}

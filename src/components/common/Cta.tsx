import { useTranslations } from 'next-intl'

export function Cta() {
  const t = useTranslations('home')
  return <p className="text-lg sm:text-xl">{t('cta')}</p>
}

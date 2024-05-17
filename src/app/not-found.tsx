import NotFound from './NotFound'
import { useTranslations } from 'next-intl'

export default function NotFoundPage() {
  const t = useTranslations('notFound')

  return (
    <NotFound
      title={t('title')}
      filmTitle={t.rich('filmTitle', {
        strong: (chunks) => <strong>{chunks}</strong>,
      })}
      description={t('description')}
      link={t('link')}
      error={t.rich('error', {
        strong: (chunks) => <strong>{chunks}</strong>,
      })}
    />
  )
}

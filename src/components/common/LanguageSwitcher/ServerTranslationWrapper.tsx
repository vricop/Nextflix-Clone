import { useMessages } from 'next-intl'
import { EmailBox } from '../EmailBox'
import { LanguageSwitcher } from './LanguageSwitcher'

interface ServerTranslationWrapper {
  className?: string
}

export function ServerTranslationWrapper({
  className,
}: ServerTranslationWrapper) {
  const { common } = useMessages()

  return <LanguageSwitcher options={common.langs} {...{ className }} />
}

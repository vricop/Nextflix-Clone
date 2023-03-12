import { defaultNS } from 'next-i18next.config'
import 'i18next'
import common from './public/locales/en/common.json'
import footer from './public/locales/en/footer.json'
import home from './public/locales/en/home.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: {
      common: typeof common
      home: typeof home
      footer: typeof footer
    }
  }
}

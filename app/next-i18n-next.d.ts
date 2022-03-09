import 'react-i18next'
import common from './public/locales/en/common.json'
import home from './public/locales/en/home.json'

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNs: 'common'
    resources: {
      common: typeof common
      home: typeof home
    }
  }
}

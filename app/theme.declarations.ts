import 'styled-components'
import { theme } from 'theme'

type Theme = typeof theme

// My cool theme declaration based on theme object
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

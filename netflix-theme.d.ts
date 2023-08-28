import 'styled-components'
import { NetflixTheme } from './src/theme/theme'

// My cool theme declaration based on theme object
declare module 'styled-components' {
  export interface DefaultTheme extends NetflixTheme {}
}

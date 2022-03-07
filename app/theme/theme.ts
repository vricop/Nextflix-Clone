import { breakpoints } from './breakpoints'
import { color } from './color'
import { size } from './size'
import { fontFamily } from './fontFamily'
import { fontWeight } from './fontWeight'
import { leading } from './leading'
import { tracking } from './tracking'
import { text } from './text'

export const theme = {
  breakpoints,
  color,
  size,
  text,
  fontFamily,
  fontWeight,
  leading,
  tracking,
}

export type NetflixTheme = typeof theme

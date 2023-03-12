import { createGlobalStyle } from 'styled-components'

export const Reset = createGlobalStyle`
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}

html, body, #root, #__next {
  height: 100%;
}

body {
  font: 100%/1.5 ${({ theme }) => theme.fontFamily.netflixSans};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img, picture, video, canvas {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

/* Avoid text overflows */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

/* Create a root stacking context */
#root, #__next {
  isolation: isolate;
}

@font-face {
  font-family: 'Netflix Sans';
  src: url('/fonts/NetflixSans_W_Rg.woff2') format('woff2'),
    url('/fonts/NetflixSans_W_Rg.woff') format('woff');
  font-weight: 400;
  font-display: optional;
}

@font-face {
  font-family: 'Netflix Sans';
  src: url('/fonts/NetflixSans_W_Md.woff2') format('woff2'),
    url('/fonts/NetflixSans_W_Md.woff') format('woff');
  font-weight: 700;
  font-display: optional;
}
`

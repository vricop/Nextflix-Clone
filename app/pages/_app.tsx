import { GlobalStyles } from 'global-styles'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyles>
      <Component {...pageProps} />
    </GlobalStyles>
  )
}

export default MyApp

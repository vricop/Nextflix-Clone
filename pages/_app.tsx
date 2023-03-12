import { appWithTranslation } from 'next-i18next'
import nextI18nextConfig from 'next-i18next.config'
import type { AppProps } from 'next/app'
import { Reset } from 'reset'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp, nextI18nextConfig)

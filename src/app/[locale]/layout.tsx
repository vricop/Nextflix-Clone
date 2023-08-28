'use client'
import { NextIntlClientProvider } from 'next-intl'
import StyledComponentsRegistry from '../../lib/registry'
import { notFound } from 'next/navigation'
import { theme } from 'src/theme'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'reset'

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: 'en' | 'es' | 'it'
  }
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }, { local: 'es' }]
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  let messages

  try {
    messages = (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale}>
      <head />
      <body>
        <ThemeProvider theme={theme}>
          <Reset />
          <NextIntlClientProvider locale={locale} messages={messages}>
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import '../globals.css'
import { Metadata } from 'next'

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    locale: 'en' | 'es' | 'it'
  }
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'it' }, { local: 'es' }]
}

export const metadata: Metadata = {
  title: 'Netflix Clone',
  description: 'Sideproject',
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
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

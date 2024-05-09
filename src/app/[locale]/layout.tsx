import { Locale, locales } from 'src/config'
import '../globals.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'

interface RootLayoutProps {
  children: ReactNode
  params: {
    locale: Locale
  }
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Netflix Clone',
  description: 'Sideproject',
}

export default function RootLayout({ children, params }: RootLayoutProps) {
  unstable_setRequestLocale(params.locale)

  return (
    <html lang={params.locale}>
      <head />
      <body className="font-sans bg-black relative">{children}</body>
    </html>
  )
}

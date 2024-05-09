import { Locale, locales } from 'src/config'
import '../globals.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'

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

export default function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  return (
    <html lang={locale}>
      <head />
      <body className="font-sans bg-black relative">{children}</body>
    </html>
  )
}

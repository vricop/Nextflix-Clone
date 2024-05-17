import { Locale, locales } from 'src/config'
import './globals.css'
import { Metadata } from 'next'
import { ReactNode } from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import localFont from 'next/font/local'

const netflixSans = localFont({
  src: [

    {
      path: '../../public/fonts/NetflixSans_W_Rg.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NetflixSans_W_Md.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NetflixSans_W_Blk.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NetflixSans_W_Th.woff2',
      weight: '300',
      style: 'normal',
    },
  ],
  variable: '--font-netflix-sans',
  fallback: ["'Helvetica Neue'", 'Helvetica', 'sans-serif'],
})

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
      <body className={`bg-black relative ${netflixSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}

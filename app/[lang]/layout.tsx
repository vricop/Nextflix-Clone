import { dir } from 'i18next'
import StyledComponentsRegistry from 'lib/registry'

interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lang: string,
  }
}

export async function generateStaticParams() {
  return ['en', 'it', 'is']
}

export default function RootLayout({
  children,
  params: { lang },
}: RootLayoutProps) {
  return (
    <html lang={lang} dir={dir(lang)}>
      <head />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  )
}

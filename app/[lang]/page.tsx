'use client'
import { Footer } from '@components/common/Footer'
import { Faq } from '@components/Faq'
import { HeroHeader } from '@components/HeroHeader'
import StoryCards from '@components/StoryCards'
import { Reset } from 'reset'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <HeroHeader />
      <StoryCards />
      <Faq />
      <Footer />
    </ThemeProvider>
  )
}

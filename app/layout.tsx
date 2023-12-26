import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'

import { Toaster } from './../src/components/ui/toaster'

import CrispChat from './../src/components/crisp-chat'
import { ThemeProvider } from './../src/components/theme-provider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Brainfast',
  description: 'Unlock the power of AI',
}

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <CrispChat />
      <body>
        {/* <ClerkProvider> */}
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
            <Toaster />
          </ThemeProvider>
        {/* </ClerkProvider> */}
      </body>
    </html>
  )
}

export default RootLayout

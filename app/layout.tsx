import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { withBasePath } from '@/lib/base-path'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: 'Vlad Furman | Senior Frontend Engineer',
  description: 'Senior Frontend Engineer with 5+ years at Yandex. React, TypeScript, Frontend Architecture.',
  generator: 'v0.app',
  icons: {
    icon: withBasePath('/pixel-me.png'),
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} font-mono antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

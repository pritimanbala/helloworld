import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Induja for DL',
  description: 'nothing',
  generator: 'pritimanBala',
  icons: {
    icon: [
      {
        url: '/placeholder-user.jpg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/placeholder-user.jpg',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/placeholder-user.jpg',
        type: 'image/jpeg',
      },
    ],
    apple: '/placeholder-user.jpg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Dancing_Script, Lexend, Pacifico } from 'next/font/google'
import './globals.css'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script',
  weight: '400',
});

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  weight: '400',
});

const pacifico = Pacifico({
  subsets: ['latin'],
  variable: '--font-pacifico',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Christmas Clue',
  description: 'The website for Christmas clues for 2023! Who did the crime?!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dancingScript.variable} ${lexend.variable} ${pacifico.variable} font-lexend`}>{children}</body>
    </html>
  )
}

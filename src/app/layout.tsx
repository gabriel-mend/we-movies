import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { Page } from '@/presentation/shared/components/layout'
import { StoreCartProvider } from '@/presentation/shared/contexts/StoreCartContext'

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Teste Front React WeFit',
  description: 'Encontre seus filmes favoritos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${openSans.variable} antialiased bg-secondary text-white`}
      >
        <StoreCartProvider>
          <Page>{children}</Page>
        </StoreCartProvider>
      </body>
    </html>
  )
}

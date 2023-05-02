import './globals.css'

import { CacheProvider } from './graphql-client';

export const metadata = {
  title: 'RSC Demo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body><CacheProvider>{children}</CacheProvider></body>
    </html>
  )
}

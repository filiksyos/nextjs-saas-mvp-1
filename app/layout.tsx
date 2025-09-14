import './globals.css'

export const metadata = {
  title: 'Next.js SaaS MVP',
  description: 'A simplified MVP of a Next.js SaaS boilerplate',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}


import './globals.css'
import { SessionProvider } from 'next-auth/react'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'Econ Web Starter',
  description: 'Next.js + Azure AD + Microsoft Graph (SharePoint)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <SessionProvider>
          <Nav />
          <main className="container py-8">{children}</main>
        </SessionProvider>
      </body>
    </html>
  )
}

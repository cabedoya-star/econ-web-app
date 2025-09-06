import './globals.css'
import Providers from '@/components/Providers'
import Nav from '@/components/Nav'

export const metadata = {
  title: 'Econ Web Starter',
  description: 'Next.js + Azure AD + Microsoft Graph (SharePoint)',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          <Nav />
          <main className="container py-8">{children}</main>
        </Providers>
      </body>
    </html>
  )
}



import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid gap-6">
      <section className="card">
        <h1 className="text-3xl font-semibold mb-3">Bienvenido 👋</h1>
        <p className="text-slate-300">
          Starter listo para construir tu app web: autenticación con Microsoft Entra ID (Azure AD), 
          acceso a SharePoint Lists vía Microsoft Graph y una UI base con Tailwind.
        </p>
        <div className="mt-6 flex gap-3">
          <Link className="btn" href="/secure">Ir al Panel</Link>
          <a className="btn" href="https://learn.microsoft.com/graph/" target="_blank" rel="noreferrer">Docs Graph</a>
        </div>
      </section>
      <section className="card">
        <h2 className="text-xl font-semibold mb-2">¿Qué incluye?</h2>
        <ul className="list-disc pl-6 text-slate-300">
          <li>Next.js (App Router) + TypeScript</li>
          <li>NextAuth con proveedor Azure AD (Entra ID)</li>
          <li>Rutas API para leer/crear ítems en SharePoint Lists</li>
          <li>UI moderna con Tailwind</li>
        </ul>
      </section>
    </div>
  )
}

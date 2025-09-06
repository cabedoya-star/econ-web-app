import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid gap-6">
      <section className="card">
        <h1 className="text-3xl font-semibold mb-3">Bienvenido 👋</h1>
        <p className="text-slate-300">
          Starter listo para construir tu app web: autenticación con Microsoft Entra ID (Azure AD),
          base de datos en Neon/Postgres y una UI inicial con Tailwind.
        </p>
        <div className="mt-6 flex gap-3">
          <Link className="btn" href="/secure">Ir al Panel</Link>
          <a
            className="btn"
            href="https://neon.tech/docs/introduction"
            target="_blank"
            rel="noreferrer"
          >
            Docs Neon
          </a>
        </div>
      </section>

      <section className="card">
        <h2 className="text-xl font-semibold mb-2">¿Qué incluye?</h2>
        <ul className="list-disc pl-6 text-slate-300">
          <li>Next.js (App Router) + TypeScript</li>
          <li>NextAuth con proveedor Azure AD (Entra ID)</li>
          <li>Rutas API con Prisma para leer/crear ítems en la BD</li>
          <li>UI moderna con Tailwind</li>
        </ul>
      </section>
    </div>
  );
}

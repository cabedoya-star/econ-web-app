export const dynamic = 'force-dynamic';

import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { listSharePointItems } from '@/lib/graph';
import Link from 'next/link';

export default async function SecurePage() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return (
      <div className="card">
        <h2 className="text-2xl font-semibold mb-2">Acceso restringido</h2>
        <p>Por favor inicia sesión para continuar.</p>
        <div className="mt-4">
          <Link className="btn" href="/api/auth/signin">Ingresar</Link>
        </div>
      </div>
    );
  }

  const accessToken = (session as any).accessToken as string;
  const items = await listSharePointItems(accessToken);

  return (
    <div className="grid gap-6">
      <section className="card">
        <h2 className="text-2xl font-semibold mb-4">SharePoint List — Últimos ítems</h2>
        <form className="flex gap-3" action="/api/sp/item" method="post">
          <input type="text" name="fields[Title]" placeholder="Título" required />
          <button className="btn" formAction="/api/sp/item">Crear</button>
        </form>
        <div className="mt-6 overflow-x-auto">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Modificado</th>
              </tr>
            </thead>
            <tbody>
              {items.map((it: any) => (
                <tr key={it.id}>
                  <td>{it.id}</td>
                  <td>{it.fields?.Title}</td>
                  <td>{it.lastModifiedDateTime}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="card">
        <h3 className="text-xl font-semibold mb-2">Variables necesarias</h3>
        <ul className="list-disc pl-6 text-slate-300">
          <li><b>GRAPH_SITE_ID</b> — ID del sitio de SharePoint</li>
          <li><b>GRAPH_LIST_ID</b> — ID de la lista de SharePoint</li>
        </ul>
      </section>
    </div>
  );
}

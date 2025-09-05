
'use client';

import Link from 'next/link';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function Nav() {
  const { data: session, status } = useSession();

  return (
    <nav className="w-full border-b border-blue-500/30 backdrop-blur sticky top-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">⚡ Econ Web</Link>
        <div className="flex items-center gap-3">
          <Link href="/secure" className="btn">Panel</Link>
          {status === 'loading' ? (
            <span>...</span>
          ) : session ? (
            <button className="btn" onClick={() => signOut()}>Salir</button>
          ) : (
            <button className="btn" onClick={() => signIn('azure-ad')}>Ingresar</button>
          )}
        </div>
      </div>
    </nav>
  );
}

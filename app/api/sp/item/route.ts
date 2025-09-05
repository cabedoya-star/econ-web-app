
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { createSharePointItem } from '@/lib/graph';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  if (!session || !(session as any).accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const body = await req.json();
    const fields = body?.fields || {};
    const created = await createSharePointItem((session as any).accessToken as string, fields);
    return NextResponse.json({ created });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Graph error' }, { status: 500 });
  }
}

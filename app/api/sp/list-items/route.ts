
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { listSharePointItems } from '@/lib/graph';

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session || !(session as any).accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  try {
    const items = await listSharePointItems((session as any).accessToken as string);
    return NextResponse.json({ items });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || 'Graph error' }, { status: 500 });
  }
}

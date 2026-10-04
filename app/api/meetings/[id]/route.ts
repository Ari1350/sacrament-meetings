import { NextResponse } from 'next/server';
import { getMeetingById } from '@/lib/meetings-db';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    // En las versiones recientes de Next.js, params debe ser resuelto con await
    const { id } = await params;
    const meeting = await getMeetingById(id);

    if (!meeting) {
      return NextResponse.json(
        { error: 'Sacrament meeting not found.' },
        { status: 404 }
      );
    }

    return NextResponse.json(meeting);
  } catch (error) {
    console.error('API Dynamic Route Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error: Failed to fetch the requested meeting.' },
      { status: 500 }
    );
  }
}
import { NextResponse } from 'next/server';
import { getMeetings } from "@/lib/meetings-db";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const dateParam = searchParams.get("date");

    const meetings = await getMeetings(dateParam ?? undefined);

    return NextResponse.json(meetings);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error: Failed to fetch sacrament meetings.' },
      { status: 500 }
    );
  }
}
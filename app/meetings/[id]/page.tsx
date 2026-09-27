import MeetingDetail from "@/components/MeetingDetail";
import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

export const dynamic = "force-dynamic";

interface MeetingPageProps {
  params: Promise<{ id: string }>;
}

function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export default async function MeetingPage({ params }: MeetingPageProps) {
  const { id } = await params;

  const response = await fetch(
    `${getBaseUrl()}/api/meetings/${id}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    return (
      <section>
        <h1 className="text-2xl font-bold">Meeting not found</h1>

        <Link
          href="/meetings"
          className="mt-4 inline-block text-blue-700"
        >
          ← Back to meetings
        </Link>
      </section>
    );
  }

  const meeting: SacramentMeeting = await response.json();

  return <MeetingDetail meeting={meeting} />;
}
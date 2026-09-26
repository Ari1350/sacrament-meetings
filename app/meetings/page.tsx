import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";

export const dynamic = "force-dynamic";

export default async function MeetingsPage() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"}/api/meetings`,
    { cache: "no-store" },
  );

  const meetings: SacramentMeeting[] = await response.json();

  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold">All Meetings</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {meetings.map((meeting) => (
          <MeetingCard key={meeting.id} meeting={meeting} />
        ))}
      </div>
    </section>
  );
}
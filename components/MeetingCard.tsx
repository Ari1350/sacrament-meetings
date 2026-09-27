import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <article className="rounded-lg border bg-white p-5 shadow-sm">
      <p className="text-sm text-gray-500">{meeting.date}</p>

      <h2 className="mt-2 text-xl font-semibold">
        {meeting.meetingType} meeting
      </h2>

      <p className="mt-2">
        <strong>Presiding:</strong> {meeting.presiding}
      </p>

      <p>
        <strong>Conducting:</strong> {meeting.conducting}
      </p>

      <Link
        href={`/meetings/${meeting.id}`}
        className="mt-4 inline-block font-medium text-blue-700 hover:underline"
      >
        View meeting →
      </Link>
    </article>
  );
}
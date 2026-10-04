// app/meetings/page.tsx
import MeetingCard from "@/components/MeetingCard";
import type { SacramentMeeting } from "@/lib/types";
import DeleteButton from './DeleteButton';
import Link from 'next/link';

export const dynamic = "force-dynamic";

function getBaseUrl() {
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export default async function MeetingsPage() {
  const response = await fetch(`${getBaseUrl()}/api/meetings`, {
    cache: "no-store",
  });

  const meetings: SacramentMeeting[] = await response.json();

  return (
    <section className="container mx-auto p-4">
      {}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-900">All Sacrament Meetings</h2>
        <Link 
          href="/meetings/create" 
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          + Schedule New Meeting
        </Link>
      </div>

      {}
      {(!meetings || meetings.length === 0) ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed">
          <p className="text-gray-500">No sacrament meetings have been planned yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {meetings.map((meeting) => (
            <div 
              key={meeting.id} 
              className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-between"
            >
              {}
              <MeetingCard meeting={meeting} />
              
              {}
              <div className="mt-4 pt-3 border-t border-gray-100 flex justify-end space-x-4 items-center">
                <Link 
                  href={`/meetings/${meeting.id}/edit`} 
                  className="text-sm font-medium text-blue-600 hover:text-blue-900 focus:outline-none focus:underline"
                >
                  Edit Plan
                </Link>
                {}
                <DeleteButton id={meeting.id} />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

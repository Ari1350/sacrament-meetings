import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <article className="space-y-6 rounded-lg border bg-white p-6 shadow-sm">
      <header>
        <p className="text-sm text-gray-500">{meeting.date}</p>
        <h1 className="text-3xl font-bold capitalize">
          {meeting.meetingType} Meeting
        </h1>
      </header>

      <section>
        <h2 className="text-lg font-semibold">Leadership</h2>
        <p>Presiding: {meeting.presiding}</p>
        <p>Conducting: {meeting.conducting}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Announcements</h2>
        {meeting.announcements?.length ? (
          <ul className="list-disc pl-6">
            {meeting.announcements.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No announcements.</p>
        )}
      </section>

      <section>
        <h2 className="text-lg font-semibold">Opening</h2>
        <p>
          Hymn #{meeting.openingHymn.number}: {meeting.openingHymn.title}
        </p>
        <p>Prayer: {meeting.openingPrayer}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Ward Business</h2>
        <ul className="list-disc pl-6">
          {meeting.wardBusiness.map((item) => (
            <li key={item.description}>{item.description}</li>
          ))}
        </ul>
        <p>Stake business: {meeting.stakeBusiness ? "Yes" : "No"}</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Sacrament</h2>
        <p>
          Hymn #{meeting.sacramentHymn.number}:{" "}
          {meeting.sacramentHymn.title}
        </p>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Speakers & Musical Numbers</h2>
        <ul className="space-y-2">
          {meeting.speakers.map((item) => (
            <li key={`${item.name}-${item.topic}`}>
              <strong>{item.type}:</strong> {item.name} — {item.topic}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold">Closing</h2>
        <p>
          Hymn #{meeting.closingHymn.number}: {meeting.closingHymn.title}
        </p>
        <p>Prayer: {meeting.closingPrayer}</p>
      </section>
    </article>
  );
}
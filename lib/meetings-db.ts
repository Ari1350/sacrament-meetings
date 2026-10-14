import { sql } from '@vercel/postgres';

export interface Meeting {
  id: string;
  date: string;
  conducting: string;
  opening_hymn: string;
  sacrament_hymn: string;
  closing_hymn: string;
}

export async function fetchMeetings(
  date?: string | Date | number
): Promise<Meeting[]> {
  try {
    if (date !== undefined) {
      const dateValue =
        date instanceof Date
          ? date.toISOString().split('T')[0]
          : String(date);

      const data = await sql<Meeting>`
        SELECT
          id,
          date,
          conducting,
          opening_hymn,
          sacrament_hymn,
          closing_hymn
        FROM meetings
        WHERE date = ${dateValue}
        ORDER BY date DESC
      `;

      return data.rows;
    }

    const data = await sql<Meeting>`
      SELECT
        id,
        date,
        conducting,
        opening_hymn,
        sacrament_hymn,
        closing_hymn
      FROM meetings
      ORDER BY date DESC
    `;

    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to load sacrament meetings.');
  }
}

/* Compatibility wrapper for the project\'s existing code */
export const getMeetings = fetchMeetings;

export async function getMeetingById(
  id: string | number
): Promise<Meeting | null> {
  try {
    const meetingId = String(id);

    const data = await sql<Meeting>`
      SELECT
        id,
        date,
        conducting,
        opening_hymn,
        sacrament_hymn,
        closing_hymn
      FROM meetings
      WHERE id = ${meetingId}
    `;

    return data.rows[0] ?? null;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch the sacrament meeting details.');
  }
}

export async function insertMeeting(
  meeting: Omit<Meeting, 'id'>
): Promise<void> {
  try {
    await sql`
      INSERT INTO meetings (
        date,
        conducting,
        opening_hymn,
        sacrament_hymn,
        closing_hymn
      )
      VALUES (
        ${meeting.date},
        ${meeting.conducting},
        ${meeting.opening_hymn},
        ${meeting.sacrament_hymn},
        ${meeting.closing_hymn}
      )
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to create the sacrament meeting.');
  }
}

export async function updateMeetingDb(
  id: string | number,
  meeting: Omit<Meeting, 'id'>
): Promise<void> {
  try {
    await sql`
      UPDATE meetings
      SET
        date = ${meeting.date},
        conducting = ${meeting.conducting},
        opening_hymn = ${meeting.opening_hymn},
        sacrament_hymn = ${meeting.sacrament_hymn},
        closing_hymn = ${meeting.closing_hymn}
      WHERE id = ${String(id)}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to update the sacrament meeting.');
  }
}

export async function deleteMeetingDb(
  id: string | number
): Promise<void> {
  try {
    await sql`
      DELETE FROM meetings
      WHERE id = ${String(id)}
    `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to delete the sacrament meeting.');
  }
}

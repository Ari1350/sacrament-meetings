import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-09-06",
    meetingType: "regular",
    presiding: "Bishop Carlos Mendoza",
    conducting: "Brother Daniel Flores",
    announcements: [
      "Ward activity next Saturday.",
      "Temple recommend interviews this week.",
    ],
    openingHymn: {
      number: 2,
      title: "The Spirit of God",
    },
    openingPrayer: "Sister Maria Lopez",
    wardBusiness: [
      {
        description: "Sustaining of new Primary presidency.",
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: "In Remembrance of Thy Suffering",
    },
    speakers: [
      {
        name: "Sister Ana Garcia",
        topic: "Faith in Jesus Christ",
        type: "speaker",
      },
      {
        name: "Youth Choir",
        topic: "I Am a Child of God",
        type: "musical-number",
      },
    ],
    closingHymn: {
      number: 31,
      title: "O God, Our Help in Ages Past",
    },
    closingPrayer: "Brother Luis Perez",
  },

  {
    id: 2,
    date: "2026-09-13",
    meetingType: "testimony",
    presiding: "Bishop Carlos Mendoza",
    conducting: "Sister Elena Ruiz",
    announcements: [
      "Youth activity on Friday.",
    ],
    openingHymn: {
      number: 85,
      title: "How Firm a Foundation",
    },
    openingPrayer: "Brother Pedro Ramos",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 193,
      title: "I Stand All Amazed",
    },
    speakers: [],
    closingHymn: {
      number: 5,
      title: "High on the Mountain Top",
    },
    closingPrayer: "Sister Laura Torres",
  },

  {
    id: 3,
    date: "2026-09-20",
    meetingType: "regular",
    presiding: "Bishop Carlos Mendoza",
    conducting: "Brother Daniel Flores",
    announcements: [
      "Family history class on Wednesday.",
      "Relief Society activity this month.",
    ],
    openingHymn: {
      number: 96,
      title: "I Need Thee Every Hour",
    },
    openingPrayer: "Sister Julia Castro",
    wardBusiness: [
      {
        description: "Sustaining of a new Sunday School teacher.",
      },
    ],
    stakeBusiness: true,
    sacramentHymn: {
      number: 181,
      title: "Jesus of Nazareth, Savior and King",
    },
    speakers: [
      {
        name: "Brother Miguel Santos",
        topic: "Service in the Church",
        type: "speaker",
      },
      {
        name: "Sister Sofia Morales",
        topic: "Following the Savior",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 219,
      title: "Because I Have Been Given Much",
    },
    closingPrayer: "Brother Andres Vega",
  },

  {
    id: 4,
    date: "2026-09-27",
    meetingType: "general",
    presiding: "Stake President Robert Smith",
    conducting: "Brother John Brown",
    announcements: [
      "Stake conference information.",
    ],
    openingHymn: {
      number: 1,
      title: "The Morning Breaks",
    },
    openingPrayer: "Sister Rebecca Wilson",
    wardBusiness: [],
    stakeBusiness: true,
    sacramentHymn: {
      number: 172,
      title: "In Humility, Our Savior",
    },
    speakers: [
      {
        name: "President Robert Smith",
        topic: "Strengthening Families",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 30,
      title: "Come, Come, Ye Saints",
    },
    closingPrayer: "Brother Thomas Green",
  },

  {
    id: 5,
    date: "2026-10-04",
    meetingType: "regular",
    presiding: "Bishop Carlos Mendoza",
    conducting: "Sister Elena Ruiz",
    announcements: [
      "General conference follow-up meeting.",
    ],
    openingHymn: {
      number: 66,
      title: "Rejoice, the Lord Is King",
    },
    openingPrayer: "Brother David Clark",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 175,
      title: "O God, the Eternal Father",
    },
    speakers: [
      {
        name: "Sister Emily White",
        topic: "The Importance of Prayer",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 152,
      title: "God Be with You Till We Meet Again",
    },
    closingPrayer: "Sister Rachel Young",
  },
];

export function getMeetings(
  date?: string | null
): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(
  id: number
): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}
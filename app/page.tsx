import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <Image
        src="/next.svg"
        alt="Sacrament Meeting Planner"
        width={180}
        height={40}
        priority
      />

      <h1 className="mt-8 text-4xl font-bold">
        Sacrament Meeting Planner
      </h1>

      <p className="mt-4 max-w-xl text-gray-600">
        Plan, review, and view sacrament meeting agendas.
      </p>

      <Link
        href="/meetings"
        className="mt-6 rounded-lg bg-blue-700 px-6 py-3 font-medium text-white hover:bg-blue-800"
      >
        View Meetings
      </Link>
    </section>
  );
}
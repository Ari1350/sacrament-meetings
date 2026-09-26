import InfoCard from "@/components/InfoCard";

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold">About Sacrament Meetings</h1>

      <p className="mt-4 text-lg text-gray-600">
        Sacrament Meetings is a web application designed to help
        organize and review sacrament meeting information in a simple
        and accessible way.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <InfoCard
          title="Purpose"
          description="Keep meeting information organized and easy to access."
        />

        <InfoCard
          title="Technology"
          description="Built with Next.js, TypeScript, Tailwind CSS, and the App Router."
        />
      </div>
    </section>
  );
}
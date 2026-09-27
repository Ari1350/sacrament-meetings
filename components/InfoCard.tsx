interface InfoCardProps {
  title: string;
  description: string;
}

export default function InfoCard({
  title,
  description,
}: InfoCardProps) {
  return (
    <article className="rounded-lg border bg-white p-5 shadow-sm">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
    </article>
  );
}
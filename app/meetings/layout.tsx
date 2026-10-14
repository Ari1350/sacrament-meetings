import NavLinks from "@/components/NavLinks";

export default function MeetingsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <div className="mb-8 border-b pb-4">
        <h1 className="text-3xl font-bold">Sacrament Meetings</h1>
        <div className="mt-4">
          <NavLinks />
        </div>
      </div>

      {children}
    </section>
  );
}
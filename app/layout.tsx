import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Sacrament Meeting Planner",
    template: "%s | Sacrament Planner",
  },
  description: "Plan and manage ward sacrament meetings efficiently.",
  openGraph: {
    title: "Sacrament Meeting Planner",
    description: "Plan and manage ward sacrament meetings efficiently.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <Header />
        <main className="mx-auto min-h-screen max-w-6xl px-6 py-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
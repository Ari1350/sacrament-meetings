import Link from "next/link";

export default function NavLinks() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/meetings", label: "Meetings" },
    { href: "/meetings/current", label: "Current" },
    { href: "/about", label: "About" },
  ];

  return (
    <nav className="flex flex-wrap gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-gray-600 hover:text-blue-700"
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
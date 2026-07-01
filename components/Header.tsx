import Image from "next/image";
import Link from "next/link";
import { siteConfig, telHref, smsHref } from "@/lib/site-config";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#service-area", label: "Service Area" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/100 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="#top" aria-label={siteConfig.name} className="shrink-0">
          <Image
            src="/logo-mark.png"
            alt={siteConfig.name}
            width={930}
            height={180}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-steel lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={smsHref}
            className="hidden rounded-md bg-gold px-4 py-2 text-sm font-semibold text-graphite hover:bg-gold/90 transition-colors sm:inline-block"
          >
            Free Estimate
          </a>
          <a
            href={telHref}
            className="rounded-md border border-gold/90 px-3 py-2 text-sm font-medium text-silver hover:border-gold hover:text-gold transition-colors"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </header>
  );
}

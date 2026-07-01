import Image from "next/image";
import { siteConfig, telHref } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-graphite pb-20 lg:pb-0">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <Image
              src="/logo-mark.png"
              alt={siteConfig.name}
              width={930}
              height={180}
              className="h-9 w-auto"
            />
            <p className="mt-2 text-sm text-steel">
              Mobile service based in {siteConfig.address.city},{" "}
              {siteConfig.address.state} — we come to you anywhere in
              Greater Atlanta.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-silver">Contact</p>
            <a
              href={telHref}
              className="mt-2 block text-sm text-steel hover:text-gold"
            >
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 block text-sm text-steel hover:text-gold"
            >
              {siteConfig.email}
            </a>
            <p className="mt-1 text-sm text-steel">{siteConfig.hours}</p>
          </div>

          <div>
            <p className="text-sm font-semibold text-silver">Follow</p>
            <a
              href={siteConfig.instagram}
              className="mt-2 block text-sm text-steel hover:text-gold"
            >
              Instagram
            </a>
          </div>
        </div>

        <p className="mt-10 text-xs text-steel">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

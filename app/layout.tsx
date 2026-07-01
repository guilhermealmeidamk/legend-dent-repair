import type { Metadata } from "next";
import { Inter, Saira_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { localBusinessJsonLd } from "@/lib/seo";
import StickyMobileCta from "@/components/StickyMobileCta";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const sairaCondensed = Saira_Condensed({
  variable: "--font-saira-condensed",
  weight: ["600", "700", "800"],
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  weight: ["400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `Paintless Dent Repair in Atlanta, GA | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: `Paintless Dent Repair in Atlanta, GA | ${siteConfig.name}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: ["/og-image.jpg"],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sairaCondensed.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-graphite text-silver font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />
        {children}
        <StickyMobileCta />
      </body>
    </html>
  );
}

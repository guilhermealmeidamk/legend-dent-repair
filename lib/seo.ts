import { siteConfig } from "./site-config";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.name,
    image: `${siteConfig.url}/og-image.jpg`,
    url: siteConfig.url,
    telephone: siteConfig.phoneRaw,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.zip,
      addressCountry: "US",
    },
    areaServed: siteConfig.serviceAreaCities.map((city) => ({
      "@type": "City",
      name: city,
    })),
    openingHours: siteConfig.hours,
    sameAs: [siteConfig.instagram],
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

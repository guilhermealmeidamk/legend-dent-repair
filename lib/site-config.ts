// TODO: replace every placeholder below with real client data (see brief section 10).
export const siteConfig = {
  name: "Legend Dent Repair",
  tagline: "Atlanta's Dent Repair Legend",
  description:
    "Fast, affordable paintless dent repair (PDR) across Greater Atlanta — the trusted body shop alternative. Free estimates — text us a photo of your dent. No repaint, no filler, no Carfax record.",
  url: "https://legenddentrepair.com",
  phoneDisplay: "(404) 555-0123",
  phoneRaw: "+14045550123",
  smsBody:
    "Hi! I'd like a free dent repair estimate. Here's a photo of my dent:",
  email: "info@legenddentrepair.com",
  address: {
    street: "TODO Street Address",
    city: "Marietta",
    state: "GA",
    zip: "30060",
  },
  hours: "Mon–Sat: 8am–6pm",
  instagram: "https://instagram.com/dentrepairlegend",
  googleReviewsUrl: "https://g.page/r/TODO/review",
  serviceAreaCities: [
    "Marietta",
    "Atlanta",
    "Kennesaw",
    "Acworth",
    "Alpharetta",
    "Roswell",
    "Sandy Springs",
    "Smyrna",
    "Woodstock",
    "East Cobb",
    "Powder Springs",
    "Dunwoody",
    "Brookhaven",
  ],
} as const;

export const telHref = `tel:${siteConfig.phoneRaw}`;
export const smsHref = `sms:${siteConfig.phoneRaw}?body=${encodeURIComponent(
  siteConfig.smsBody
)}`;

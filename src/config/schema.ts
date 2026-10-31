import { calendlyUrl, siteConfig } from "@/config/site";

/**
 * JSON-LD structured data for every route.
 * Shared entities (organisation, website, people) are referenced by `@id`
 * so Google stitches them into one knowledge graph instead of seeing
 * a separate business on each page.
 */

export const BASE_URL = "https://www.nextgenadvisorsltd.com";

const ORG_ID = `${BASE_URL}/#organization`;
const WEBSITE_ID = `${BASE_URL}/#website`;
const LOGO_ID = `${BASE_URL}/#logo`;

const { global, team, services, about } = siteConfig;

const abs = (path: string) =>
  path.startsWith("http") ? path : `${BASE_URL}${path}`;

const slug = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const personId = (name: string) => `${BASE_URL}/#${slug(name)}`;

/** Banana Island, Lekki — taken from the Google Maps embed in site.ts */
const GEO = { latitude: 6.459473, longitude: 3.449704 };

/* ------------------------------------------------------------------ */
/* Shared entities                                                    */
/* ------------------------------------------------------------------ */

const organization = {
  "@type": ["AccountingService", "ProfessionalService"],
  "@id": ORG_ID,
  name: global.name,
  alternateName: "NexGen Business Advisors",
  legalName: global.name,
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    "@id": LOGO_ID,
    url: abs("/favicon.png"),
    contentUrl: abs("/favicon.png"),
  },
  image: [abs("/og-default.png"), abs(siteConfig.hero.images.main)],
  description: siteConfig.footer.description,
  slogan:
    "Structured, Compliant, and Growth-Ready Business Solutions in Nigeria",
  telephone: global.phone,
  email: global.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Banana Island, Lekki",
    addressLocality: global.city,
    addressRegion: "Lagos State",
    postalCode: "106104",
    addressCountry: "NG",
  },
  geo: { "@type": "GeoCoordinates", ...GEO },
  hasMap: global.mapsDirectionsUrl,
  areaServed: [
    { "@type": "Country", name: global.country },
    { "@type": "City", name: global.city },
  ],
  currenciesAccepted: "NGN",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: global.phone,
      email: global.email,
      availableLanguage: ["en"],
      areaServed: "NG",
    },
    {
      "@type": "ContactPoint",
      contactType: "sales",
      url: calendlyUrl,
      availableLanguage: ["en"],
    },
  ],
  founder: { "@id": personId(team.members[0].name) },
  employee: team.members.map((m) => ({ "@id": personId(m.name) })),
  knowsAbout: [
    "Business setup and market entry in Nigeria",
    "CAC company registration",
    "FIRS tax compliance",
    "VAT and WHT compliance",
    "IFRS financial reporting",
    "Statutory audit",
    "Bookkeeping and accounting systems",
    "Loan and investment facilitation",
    "Diaspora investment advisory",
  ],
  memberOf: {
    "@type": "Organization",
    name: "Institute of Chartered Accountants of Nigeria",
    alternateName: "ICAN",
    url: "https://icanig.org",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: services.main.heading,
    itemListElement: services.main.servicesList.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: `${s.items.join(". ")}.`,
        image: abs(s.image),
        provider: { "@id": ORG_ID },
        areaServed: { "@type": "Country", name: global.country },
      },
    })),
  },
};

const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: BASE_URL,
  name: global.name,
  publisher: { "@id": ORG_ID },
  inLanguage: "en",
};

const people = team.members.map((m) => ({
  "@type": "Person",
  "@id": personId(m.name),
  name: m.name,
  jobTitle: m.role,
  description: m.bio,
  image: abs(m.photo),
  email: m.memberEmailAddress,
  sameAs: [m.memberLinkedInUrl],
  worksFor: { "@id": ORG_ID },
}));

const webPage = (opts: {
  path: string;
  name: string;
  description: string;
  image?: string;
}) => ({
  "@type": "WebPage",
  "@id": `${abs(opts.path)}#webpage`,
  url: abs(opts.path),
  name: opts.name,
  description: opts.description,
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": ORG_ID },
  inLanguage: "en",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: abs(opts.image ?? "/og-default.png"),
  },
});

const breadcrumb = (items: { name: string; path: string }[]) => ({
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: abs(item.path),
  })),
});

/* ------------------------------------------------------------------ */
/* Per-page graphs                                                    */
/* ------------------------------------------------------------------ */

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    website,
    ...people,
    webPage({
      path: "/",
      name: "Chartered Accountants & Business Advisors in Nigeria",
      description: about.whyChooseUs.description,
      image: siteConfig.hero.images.main,
    }),
  ],
};

export const auditTaxationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/audit-taxation#service`,
      name: "Audit, Taxation & Statutory Compliance",
      serviceType: [
        "Statutory Audit",
        "Tax Advisory",
        "FIRS Tax Consulting",
        "VAT and WHT Compliance",
        "CAC Corporate Compliance",
        "IFRS Financial Reporting",
      ],
      description:
        "Independent statutory and regulatory audit, FIRS and State tax advisory, PAYE/VAT/WHT structuring, IFRS financial reporting and CAC corporate filings, delivered by licensed chartered accountants in Lagos, Nigeria.",
      provider: { "@id": ORG_ID },
      brand: {
        "@type": "Brand",
        name: "Joy Ozua & Co. (Chartered Accountants)",
      },
      areaServed: { "@type": "Country", name: global.country },
      url: abs("/audit-taxation"),
      image: abs(siteConfig.pages.auditTaxation.heroImage),
      audience: {
        "@type": "BusinessAudience",
        audienceType:
          "SMEs, foreign companies and diaspora investors operating in Nigeria",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Core Statutory Services",
        itemListElement: [
          "Audit & Financial Integrity",
          "Tax Intelligence & Strategy",
          "Corporate & Regulatory Compliance",
        ].map((name) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name,
            provider: { "@id": ORG_ID },
          },
        })),
      },
    },
    webPage({
      path: "/audit-taxation",
      name: "Audit, Taxation & Statutory Compliance",
      description:
        "Statutory audit, FIRS tax advisory, VAT and WHT compliance, IFRS financial reporting and CAC corporate filings in Lagos, Nigeria.",
      image: siteConfig.pages.auditTaxation.heroImage,
    }),
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Audit & Taxation", path: "/audit-taxation" },
    ]),
  ],
};

export const financialStrategySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${BASE_URL}/financial-strategy#service`,
      name: "Financial Strategy & Business Transformation",
      serviceType: [
        "Financial Strategy",
        "Business Transformation",
        "Investment Readiness",
        "CFO Advisory",
        "IFRS Restatement",
        "SME Accounting",
      ],
      description:
        "Financial cleanup, IFRS restatements, CFO advisory, investment readiness and SME accounting services that turn unreconciled accounts into structured, decision-ready numbers.",
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: global.country },
      url: abs("/financial-strategy"),
      image: abs(siteConfig.pages.financialStrategy.heroImage),
      audience: {
        "@type": "BusinessAudience",
        audienceType: "SMEs and growing corporates in Nigeria",
      },
      potentialAction: {
        "@type": "ReserveAction",
        name: "Book a Consultation",
        target: calendlyUrl,
      },
    },
    webPage({
      path: "/financial-strategy",
      name: "Financial Strategy & Business Transformation",
      description:
        "Fix the structure, fix the business. Financial cleanup, IFRS restatements, CFO advisory and investment readiness for SMEs in Nigeria.",
      image: siteConfig.pages.financialStrategy.heroImage,
    }),
    breadcrumb([
      { name: "Home", path: "/" },
      { name: "Financial Strategy", path: "/financial-strategy" },
    ]),
  ],
};

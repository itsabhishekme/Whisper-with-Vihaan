import type { Metadata } from "next";

/**
 * -------------------------------------------------------
 * Whisper with Vihaan
 * One Meal One Hope
 * Global SEO Configuration
 * -------------------------------------------------------
 */

export const siteConfig = {
  name: "Whisper with Vihaan",
  title: "Whisper with Vihaan | One Meal One Hope",
  description:
    "Whisper with Vihaan is a storytelling platform dedicated to inspiring compassion through the One Meal One Hope campaign, working toward a future where every individual has access to at least one nutritious meal every day.",

  url: "https://www.whisperwithvihaan.org",

  ogImage: "/images/og-image.jpg",

  creator: "Vihaan Writes",

  keywords: [
    "Whisper with Vihaan",
    "One Meal One Hope",
    "End Hunger",
    "Food Donation",
    "Donate Food",
    "Hunger Awareness",
    "NGO India",
    "Volunteer",
    "Community Kitchen",
    "Zero Hunger",
    "Social Impact",
    "Humanitarian",
    "Food Distribution",
    "CSR",
    "Documentary",
    "Child Hunger",
    "Hope",
  ],

  twitter: "@whisperwithvihaan",
};

/**
 * Default SEO
 */

export const defaultSEO: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | Whisper with Vihaan",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.creator,
    },
  ],

  creator: siteConfig.creator,

  publisher: siteConfig.name,

  category: "Non-Profit",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,

    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: "Whisper with Vihaan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    creator: siteConfig.twitter,
    title: siteConfig.title,
    description: siteConfig.description,

    images: [siteConfig.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

/**
 * Dynamic SEO Generator
 */

type SEOProps = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
};

export function generateSEO({
  title,
  description,
  image,
  path,
}: SEOProps): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;

  const pageDescription = description ?? siteConfig.description;

  const pageImage = image ?? siteConfig.ogImage;

  const pageUrl = path
    ? `${siteConfig.url}${path}`
    : siteConfig.url;

  return {
    title: pageTitle,

    description: pageDescription,

    keywords: siteConfig.keywords,

    alternates: {
      canonical: pageUrl,
    },

    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",

      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
  };
}

/**
 * Structured Data
 */

export const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "NGO",

  name: "Whisper with Vihaan",

  url: siteConfig.url,

  logo: `${siteConfig.url}/logo.png`,

  description: siteConfig.description,

  slogan: "One Meal One Hope",

  sameAs: [
    "https://facebook.com/",
    "https://instagram.com/",
    "https://linkedin.com/",
    "https://youtube.com/",
  ],

  address: {
    "@type": "PostalAddress",
    addressCountry: "India",
  },
};

/**
 * JSON-LD Helper
 */

export function generateJsonLd(data: object): string {
  return JSON.stringify(data);
}
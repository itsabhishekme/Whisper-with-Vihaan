import type { Metadata } from "next";

const siteUrl = "https://www.whisperwithvihaan.org";

export const siteConfig = {
  name: "Whisper with Vihaan",
  shortName: "Whisper",
  title: "Whisper with Vihaan | One Meal One Hope",
  description:
    "Whisper with Vihaan is a storytelling platform dedicated to inspiring compassion through the One Meal One Hope campaign. Together, we work toward a future where every individual has access to at least one nutritious meal every day.",

  url: siteUrl,

  ogImage: `${siteUrl}/images/og-image.jpg`,

  creator: "Vihaan Writes",

  keywords: [
    "Whisper with Vihaan",
    "One Meal One Hope",
    "End Hunger",
    "NGO India",
    "Food Donation",
    "Child Hunger",
    "Community Kitchen",
    "Volunteer",
    "Donate",
    "Food Distribution",
    "Zero Hunger",
    "Humanitarian Campaign",
    "Documentary",
    "Social Impact",
    "Non Profit",
    "CSR",
  ],

  links: {
    facebook: "https://facebook.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    youtube: "https://youtube.com/",
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | Whisper with Vihaan",
  },

  description: siteConfig.description,

  keywords: siteConfig.keywords,

  authors: [
    {
      name: siteConfig.creator,
    },
  ],

  creator: siteConfig.creator,

  publisher: "Whisper with Vihaan",

  applicationName: "Whisper with Vihaan",

  category: "Non-Profit",

  robots: {
    index: true,
    follow: true,
    nocache: false,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: siteConfig.url,
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
        alt: "Whisper with Vihaan | One Meal One Hope",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    creator: "@whisperwithvihaan",
    images: [siteConfig.ogImage],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "GOOGLE_VERIFICATION_CODE",
  },
};

export function createMetadata(
  title: string,
  description: string,
  path = ""
): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,

      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],

      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImage],
    },
  };
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.whisperwithvihaan.org"),

  title: {
    default: "Whisper with Vihaan | One Meal One Hope",
    template: "%s | Whisper with Vihaan",
  },

  description:
    "Whisper with Vihaan is a storytelling platform driving social impact through the One Meal One Hope campaign—working toward a future where every individual has access to at least one nutritious meal every day.",

  keywords: [
    "Whisper with Vihaan",
    "One Meal One Hope",
    "End Hunger",
    "Food Donation",
    "NGO",
    "Hunger Awareness",
    "Child Hunger",
    "Volunteer",
    "Donate",
    "Community Kitchen",
    "Food Distribution",
    "Social Impact",
    "Documentary",
    "Humanity",
    "Zero Hunger",
  ],

  authors: [
    {
      name: "Vihaan Writes",
    },
  ],

  creator: "Vihaan Writes",

  publisher: "Whisper with Vihaan",

  category: "Non-Profit",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.whisperwithvihaan.org",
    siteName: "Whisper with Vihaan",
    title: "Whisper with Vihaan | One Meal One Hope",
    description:
      "Together we can ensure that every individual receives at least one nutritious meal a day. Join the movement through donations, volunteering, and storytelling.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Whisper with Vihaan - One Meal One Hope",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Whisper with Vihaan | One Meal One Hope",
    description:
      "Ending hunger begins with one meal, one act of kindness, and one shared hope.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white text-gray-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
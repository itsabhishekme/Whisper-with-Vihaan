import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.whisperwithvihaan.org"),

  title: {
    default: "Whispers with Vihaan | One Meal One Hope",
    template: "%s | Whispers with Vihaan",
  },

  description:
    "Whispers with Vihaan is a storytelling platform dedicated to social impact through the One Meal One Hope initiative. Discover inspiring stories, humanitarian documentaries, magazine editions, volunteer opportunities, and campaigns working toward a future where every individual has access to at least one nutritious meal every day.",

  applicationName: "Whispers with Vihaan",

  keywords: [
    // Brand
    "Whispers with Vihaan",
    "Vihaan Writes",
    "One Meal One Hope",

    // NGO
    "NGO",
    "NGO India",
    "Non Profit",
    "Charity",
    "Social Organization",
    "Humanitarian Organization",
    "Social Welfare",
    "Community Development",
    "Public Welfare",
    "Social Good",

    // Hunger
    "End Hunger",
    "Zero Hunger",
    "Fight Hunger",
    "Food Donation",
    "Donate Food",
    "Food Distribution",
    "Food Security",
    "Community Kitchen",
    "Meal Donation",
    "Feed the Hungry",
    "Feed a Child",
    "Donate Meals",
    "No One Sleeps Hungry",
    "Hunger Awareness",
    "Child Hunger",
    "Global Hunger",
    "Food for All",
    "Nutrition",
    "Malnutrition",
    "Emergency Food Relief",

    // Humanity
    "Humanity",
    "Hope",
    "Compassion",
    "Kindness",
    "Volunteer",
    "Volunteer India",
    "Volunteer Opportunities",
    "Social Impact",
    "Community Service",
    "Giving Back",
    "Helping Communities",
    "Serve Humanity",
    "Human Rights",

    // Documentary
    "Documentary",
    "Documentary Stories",
    "Human Stories",
    "Storytelling",
    "Visual Storytelling",
    "Social Documentary",
    "Photo Documentary",
    "Documentary Film",
    "Independent Documentary",
    "Purpose Driven Storytelling",

    // Magazine
    "Magazine",
    "Digital Magazine",
    "Online Magazine",
    "Humanitarian Magazine",
    "Social Magazine",
    "Culture Magazine",
    "Story Magazine",
    "Editorial",
    "Feature Stories",
    "Longform Journalism",
    "Photo Essay",

    // Books
    "Whispers with Vihaan Vol 1",
    "Whispers with Vihaan Vol 2",
    "Threads of Belonging",
    "Hunger Hope Humanity",
    "Amazon Kindle",
    "Independent Author",

    // Community
    "Community Support",
    "Community Outreach",
    "Community Kitchen",
    "Grassroots Movement",
    "Community Leadership",
    "Local Impact",

    // Education
    "Awareness Campaign",
    "Education",
    "Food Education",
    "Social Awareness",
    "Research",
    "Policy",
    "Sustainability",

    // CSR
    "CSR",
    "Corporate Social Responsibility",
    "NGO Partnership",
    "Corporate Giving",
    "Employee Volunteering",

    // Website
    "Next.js NGO",
    "Social Impact Platform",
    "Volunteer Registration",
    "Donation Platform",
    "Campaign Website",
    "Impact Stories",
    "Hope Stories",
    "Humanitarian Campaign",
    "One Meal Campaign",
    "Mission Driven",
    "Purpose Driven",

    // Search Terms
    "Help the Hungry",
    "Donate to NGO",
    "Best NGO India",
    "Support Hunger Relief",
    "Volunteer for Hunger",
    "Food Relief Program",
    "Humanitarian Stories",
    "Community Empowerment",
    "Change Lives",
    "Together We Can End Hunger",
    "Every Meal Matters",
    "Every Meal Creates Hope"
  ],

  authors: [
    {
      name: "Abhishek Shrivastava",
      url: "https://www.whisperwithvihaan.org",
    },
  ],

  creator: "Vihaan Writes",

  publisher: "Whispers with Vihaan",

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
    title: "Whispers with Vihaan | One Meal One Hope",
    description:
      "Every meal shared creates another story of hope. Join the movement through donations, volunteering, storytelling, and documentary filmmaking.",
    url: "https://www.whisperwithvihaan.org",
    siteName: "Whispers with Vihaan",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Whispers with Vihaan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Whispers with Vihaan",
    description:
      "Together we can end hunger. One Meal One Hope.",
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
        className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased`}
      >
        {/* Global Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="min-h-screen pt-20">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  Scale,
  HeartHandshake,
  FileText,
  Copyright,
  AlertTriangle,
  Mail,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Whispers with Vihaan",
  description:
    "Read the Terms & Conditions governing the use of the Whispers with Vihaan website, One Meal One Hope campaign, volunteer services, magazine, documentaries, and humanitarian initiatives.",
};

const sections = [
  {
    icon: ShieldCheck,
    title: "Acceptance of Terms",
    content:
      "By accessing or using Whispers with Vihaan, you agree to comply with these Terms & Conditions. If you do not agree with any part of these terms, please discontinue the use of this website.",
  },
  {
    icon: HeartHandshake,
    title: "Our Mission",
    content:
      "Whispers with Vihaan and One Meal One Hope exist to raise awareness, inspire compassion, publish humanitarian stories, and support initiatives that address hunger and social well-being. All content is intended for educational, inspirational, and humanitarian purposes.",
  },
  {
    icon: FileText,
    title: "Use of Website",
    content:
      "You agree to use this website responsibly and lawfully. You must not misuse, interfere with, or attempt to gain unauthorized access to any part of the platform, its servers, or related services.",
  },
  {
    icon: Scale,
    title: "Donations",
    content:
      "Donations made through our campaigns are voluntary contributions that support hunger relief, awareness initiatives, publications, community outreach, and other charitable activities. Payment processing may be handled securely by trusted third-party providers.",
  },
  {
    icon: Copyright,
    title: "Intellectual Property",
    content:
      "Unless otherwise stated, all articles, magazine content, documentary concepts, photographs, graphics, illustrations, branding, logos, videos, and written materials are the intellectual property of Whispers with Vihaan. Reproduction, redistribution, or commercial use without prior written permission is prohibited.",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer Participation",
    content:
      "Volunteer applications are reviewed individually. Submission of a volunteer form does not guarantee acceptance into any program or event. Participation may be subject to additional screening and eligibility requirements.",
  },
  {
    icon: AlertTriangle,
    title: "External Links",
    content:
      "Our website may include links to external websites such as Amazon, partner organizations, or social platforms. We are not responsible for the content, privacy practices, or policies of external websites.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy",
    content:
      "Your personal information is handled in accordance with our Privacy Policy. By using our website, you acknowledge and agree to our data collection and privacy practices.",
  },
  {
    icon: Scale,
    title: "Changes to These Terms",
    content:
      "These Terms & Conditions may be updated periodically to reflect changes in our services, legal obligations, or operational practices. Continued use of the website after updates constitutes acceptance of the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-amber-950 py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12),transparent_70%)]" />

        <div className="relative mx-auto max-w-6xl px-6 text-center">
          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
            Legal Information
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            Terms & Conditions
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            These Terms & Conditions explain the rules governing the use of
            Whispers with Vihaan, our publications, campaigns, volunteer
            initiatives, and the One Meal One Hope movement.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="space-y-10">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.title}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex gap-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100">
                    <Icon className="h-8 w-8 text-amber-600" />
                  </div>

                  <div className="flex-1">
                    <h2 className="text-3xl font-black text-gray-900">
                      {section.title}
                    </h2>

                    <p className="mt-5 text-lg leading-8 text-gray-600">
                      {section.content}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Important Notice */}
        <div className="mt-20 rounded-[32px] bg-gradient-to-r from-amber-500 to-orange-500 p-10 text-white shadow-2xl">
          <h2 className="text-4xl font-black">
            Important Notice
          </h2>

          <p className="mt-6 text-lg leading-8">
            Whispers with Vihaan is committed to transparency, ethical
            storytelling, and humanitarian values. By using this website, you
            agree to respect our mission, intellectual property, and the
            communities whose stories we share.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-20 rounded-3xl bg-white p-10 shadow-xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-4xl font-black">
                Questions About These Terms?
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-600">
                If you have any questions regarding these Terms & Conditions,
                please contact our team. We are happy to assist you.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-amber-500 px-8 py-4 font-bold text-white transition hover:bg-amber-600"
            >
              <Mail size={20} />
              Contact Us
            </Link>
          </div>
        </div>

        {/* Back */}
        <div className="mt-16 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 font-semibold text-amber-600 transition hover:text-amber-700"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
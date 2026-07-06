import type { Metadata } from "next";
import {
  Cookie,
  ShieldCheck,
  Globe,
  Database,
  Settings,
  Eye,
  Lock,
  Info,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Cookie Policy | Whispers with Vihaan",
  description:
    "Learn how Whispers with Vihaan uses cookies and similar technologies to improve your experience, website performance, and security.",
};

const sections = [
  {
    icon: Cookie,
    title: "What Are Cookies?",
    content:
      "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, improve functionality, analyze visitor behavior, and deliver a smoother browsing experience.",
  },
  {
    icon: Globe,
    title: "Why We Use Cookies",
    content:
      "Whispers with Vihaan uses cookies to enhance website performance, remember user preferences, improve accessibility, understand visitor interactions, and provide a better overall experience across our humanitarian platform.",
  },
  {
    icon: Eye,
    title: "Analytics Cookies",
    content:
      "Analytics cookies help us understand how visitors interact with our website. These insights allow us to improve our stories, campaigns, volunteer experiences, and educational resources while respecting visitor privacy.",
  },
  {
    icon: Database,
    title: "Performance Cookies",
    content:
      "Performance cookies help improve loading speed, optimize navigation, remember selected preferences, and ensure that our website works efficiently across different devices and browsers.",
  },
  {
    icon: ShieldCheck,
    title: "Security Cookies",
    content:
      "Security cookies help protect our website from malicious activity, prevent fraudulent requests, and ensure a safe browsing experience for visitors, donors, volunteers, and readers.",
  },
  {
    icon: Lock,
    title: "Third-Party Services",
    content:
      "Some pages may use trusted third-party services such as payment providers, embedded videos, analytics platforms, or social media integrations. These providers may place their own cookies according to their individual privacy policies.",
  },
  {
    icon: Settings,
    title: "Managing Cookies",
    content:
      "Most web browsers allow you to manage, block, or delete cookies through browser settings. Disabling certain cookies may affect website functionality and reduce the quality of your browsing experience.",
  },
  {
    icon: Info,
    title: "Policy Updates",
    content:
      "This Cookie Policy may be updated periodically to reflect improvements to our services, new technologies, or legal requirements. Any changes will be published on this page with the latest revision date.",
  },
];

export default function CookiePolicyPage() {
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-amber-950 py-32 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.18),transparent_65%)]" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
            <Cookie size={18} />
            Cookie Policy
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            Your Privacy
            <br />
            Matters to Us
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            At <strong>Whispers with Vihaan</strong>, we believe transparency is
            an essential part of trust. This Cookie Policy explains how cookies
            and similar technologies help us improve your experience while
            protecting your privacy.
          </p>

          <p className="mt-8 text-sm uppercase tracking-[0.25em] text-amber-300">
            Last Updated • July 2026
          </p>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2">
          {sections.map((section) => {
            const Icon = section.icon;

            return (
              <article
                key={section.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 text-white">
                  <Icon size={30} />
                </div>

                <h2 className="mt-6 text-2xl font-black text-gray-900">
                  {section.title}
                </h2>

                <p className="mt-5 leading-8 text-gray-600">
                  {section.content}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Cookie Types */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
              Types of Cookies
            </span>

            <h2 className="mt-6 text-5xl font-black text-gray-900">
              Cookies We May Use
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Depending on the features you use, our website may utilize the
              following categories of cookies.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border border-gray-200 shadow-lg">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
                <tr>
                  <th className="px-8 py-5 text-left">Cookie Type</th>
                  <th className="px-8 py-5 text-left">Purpose</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">
                <tr>
                  <td className="px-8 py-6 font-semibold">
                    Essential Cookies
                  </td>
                  <td className="px-8 py-6 text-gray-600">
                    Required for website functionality and security.
                  </td>
                </tr>

                <tr>
                  <td className="px-8 py-6 font-semibold">
                    Performance Cookies
                  </td>
                  <td className="px-8 py-6 text-gray-600">
                    Improve website speed, usability, and responsiveness.
                  </td>
                </tr>

                <tr>
                  <td className="px-8 py-6 font-semibold">
                    Analytics Cookies
                  </td>
                  <td className="px-8 py-6 text-gray-600">
                    Help us understand visitor behavior anonymously.
                  </td>
                </tr>

                <tr>
                  <td className="px-8 py-6 font-semibold">
                    Preference Cookies
                  </td>
                  <td className="px-8 py-6 text-gray-600">
                    Remember settings such as language or theme preferences.
                  </td>
                </tr>

                <tr>
                  <td className="px-8 py-6 font-semibold">
                    Third-Party Cookies
                  </td>
                  <td className="px-8 py-6 text-gray-600">
                    Used by embedded services including payment gateways,
                    analytics providers, or media platforms.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-gray-950 via-black to-gray-900 py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <ShieldCheck className="mx-auto h-16 w-16 text-amber-400" />

          <h2 className="mt-8 text-5xl font-black">
            Transparency Builds Trust
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            We are committed to protecting your privacy while creating a safe,
            accessible, and meaningful experience for everyone supporting
            <strong> One Meal One Hope</strong> and the
            <strong> Whispers with Vihaan</strong> community.
          </p>

          <div className="mt-12 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <p className="text-lg leading-8 text-gray-300">
              If you have any questions about this Cookie Policy or our privacy
              practices, please visit our Contact page or reach out to our team.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
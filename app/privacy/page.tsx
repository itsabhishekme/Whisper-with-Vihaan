import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Privacy Policy for Whisper with Vihaan and the One Meal One Hope initiative.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-amber-50 to-orange-50">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 text-center">
          <span className="inline-flex rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Legal Information
          </span>

          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Your trust is important to us. Whisper with Vihaan and the
            <span className="font-semibold"> One Meal One Hope </span>
            campaign are committed to protecting your personal information and
            using it responsibly.
          </p>

          <p className="mt-4 text-sm text-gray-500">
            Last Updated: July 2026
          </p>
        </div>

        <div className="space-y-8 rounded-3xl bg-white p-8 shadow-lg">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              1. Introduction
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              This Privacy Policy explains how Whisper with Vihaan collects,
              uses, stores, and protects your information when you visit our
              website or participate in our campaigns, donations, volunteer
              programs, or community initiatives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              2. Information We Collect
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-gray-600">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Donation details</li>
              <li>Volunteer registration information</li>
              <li>Messages submitted through contact forms</li>
              <li>Basic analytics such as browser type and device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              3. How We Use Your Information
            </h2>

            <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-gray-600">
              <li>Process donations securely.</li>
              <li>Respond to inquiries.</li>
              <li>Manage volunteer registrations.</li>
              <li>Share campaign updates and impact reports.</li>
              <li>Improve our website and user experience.</li>
              <li>Comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              4. Donations
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Donations are processed through trusted third-party payment
              providers. We do not store complete payment card information on
              our servers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              5. Cookies
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Our website may use cookies to improve functionality, remember
              preferences, and analyze website traffic. You can manage cookies
              through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              6. Data Protection
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              We implement reasonable administrative, technical, and
              organizational safeguards to help protect your personal
              information against unauthorized access, loss, or misuse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              7. Sharing Information
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              We do not sell your personal information. Information may be
              shared only with trusted service providers or when required by
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              8. Your Rights
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Depending on applicable laws, you may have the right to access,
              update, correct, or request deletion of your personal information.
              You may also opt out of receiving promotional communications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              9. Children's Privacy
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              Our services are intended for a general audience. We do not
              knowingly collect personal information from children without
              appropriate consent where required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              10. Policy Updates
            </h2>

            <p className="mt-4 leading-8 text-gray-600">
              We may update this Privacy Policy periodically. Any changes will
              be posted on this page with the revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900">
              11. Contact Us
            </h2>

            <div className="mt-6 rounded-2xl bg-amber-50 p-6">
              <p className="text-gray-700">
                <strong>Whisper with Vihaan</strong>
              </p>

              <p className="mt-2 text-gray-600">
                One Meal One Hope Initiative
              </p>

              <p className="mt-2 text-gray-600">
                Email: contact@whisperwithvihaan.org
              </p>

              <p className="text-gray-600">
                Website: www.whisperwithvihaan.org
              </p>
            </div>
          </section>
        </div>

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-8 text-center text-white shadow-lg">
          <h2 className="text-3xl font-bold">
            Together, We Can End Hunger
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8">
            Every donation, every volunteer, and every shared story helps bring
            hope to someone in need. Thank you for supporting our mission of
            ensuring that every individual has access to at least one nutritious
            meal every day.
          </p>
        </div>
      </section>
    </main>
  );
}
import type { Metadata } from "next";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  HeartHandshake,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Whisper with Vihaan and the One Meal One Hope initiative. Join us as a volunteer, partner, donor, or supporter in the fight against hunger.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-3xl">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Contact Us
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
              Let's Build a World
              <span className="block text-orange-600">
                Without Hunger.
              </span>
            </h1>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              Every conversation can inspire change. Whether you want to
              volunteer, partner with us, support our campaigns, or simply
              learn more about our mission, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:px-8">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-bold">
              Reach Out
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Whisper with Vihaan is more than a campaign—it is a movement
              dedicated to ensuring every individual receives at least one
              nutritious meal every day.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex gap-5">
                <Mail className="mt-1 h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">
                    hello@whisperwithvihaan.org
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Phone className="mt-1 h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <MapPin className="mt-1 h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-600">
                    Bengaluru, Karnataka, India
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <Clock className="mt-1 h-6 w-6 text-orange-600" />
                <div>
                  <h3 className="font-semibold">Working Hours</h3>
                  <p className="text-gray-600">
                    Monday – Saturday
                  </p>
                  <p className="text-gray-600">
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Mission Card */}
            <div className="mt-14 rounded-3xl bg-orange-50 p-8">
              <HeartHandshake className="h-10 w-10 text-orange-600" />

              <h3 className="mt-5 text-2xl font-bold">
                One Meal One Hope
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                Every donation, every volunteer, every partner, and every act of
                kindness helps bring hope to someone facing hunger. Together, we
                can create lasting impact through compassion and collective
                action.
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl border border-gray-200 bg-white p-10 shadow-lg">
            <h2 className="text-3xl font-bold">
              Send us a Message
            </h2>

            <p className="mt-4 text-gray-600">
              We'd love to hear from you.
            </p>

            <form className="mt-10 space-y-6">
              <div>
                <label className="mb-2 block font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-orange-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-orange-600 px-6 py-4 font-semibold text-white transition hover:bg-orange-700"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Together We Can End Hunger.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Every meal served is a step toward dignity, hope, and a brighter
            future. Join our mission by volunteering, donating, partnering, or
            spreading awareness through your community.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="/donate"
              className="rounded-xl bg-orange-600 px-8 py-4 font-semibold transition hover:bg-orange-700"
            >
              Donate Now
            </a>

            <a
              href="/volunteers"
              className="rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-gray-900"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
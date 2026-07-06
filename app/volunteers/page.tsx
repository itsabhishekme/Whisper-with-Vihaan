import { Heart, Users, CalendarDays, Camera, Megaphone, HandHeart, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Volunteer | Whisper with Vihaan",
  description:
    "Become a volunteer with Whisper with Vihaan and support the One Meal One Hope campaign. Join us in distributing meals, organizing events, documenting stories, and creating lasting social impact.",
};

const volunteerRoles = [
  {
    title: "Food Distribution",
    icon: HandHeart,
    description:
      "Help prepare, pack, and distribute nutritious meals to individuals and families experiencing hunger.",
  },
  {
    title: "Community Outreach",
    icon: Users,
    description:
      "Connect with local communities, identify families in need, and raise awareness about food insecurity.",
  },
  {
    title: "Event Support",
    icon: CalendarDays,
    description:
      "Assist in organizing food drives, awareness campaigns, fundraising events, and community initiatives.",
  },
  {
    title: "Photography & Documentary",
    icon: Camera,
    description:
      "Capture inspiring stories, document our impact, and help share voices that deserve to be heard.",
  },
  {
    title: "Digital Media",
    icon: Megaphone,
    description:
      "Create engaging social media content, write stories, and amplify the mission across digital platforms.",
  },
  {
    title: "Care & Support",
    icon: Heart,
    description:
      "Offer compassion, encouragement, and human connection to every person we serve.",
  },
];

const volunteerSteps = [
  {
    step: "01",
    title: "Apply",
    description:
      "Complete the volunteer registration form with your interests and availability.",
  },
  {
    step: "02",
    title: "Connect",
    description:
      "Meet our team, learn about the campaign, and discover where your skills can make the greatest impact.",
  },
  {
    step: "03",
    title: "Take Action",
    description:
      "Join food distribution drives, awareness programs, and community outreach initiatives.",
  },
  {
    step: "04",
    title: "Create Impact",
    description:
      "Become part of a growing movement dedicated to ensuring that no one goes hungry.",
  },
];

export default function VolunteersPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-white py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-amber-700">
            Join Our Mission
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Become a Volunteer
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            Every act of kindness creates hope. By volunteering with{" "}
            <span className="font-semibold">Whisper with Vihaan</span>, you help
            bring nutritious meals, compassion, and dignity to individuals and
            families facing hunger.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
            <Link
              href="/contact"
              className="rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
            >
              Register Now
            </Link>

            <Link
              href="/campaign"
              className="rounded-full border border-gray-300 px-8 py-4 font-semibold transition hover:border-amber-600 hover:text-amber-700"
            >
              Explore Campaign
            </Link>
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Volunteer With Us?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Hunger is more than a lack of food—it is a lack of opportunity,
            security, and hope. Volunteers are the heartbeat of our campaign,
            helping us transform compassion into meaningful action.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {volunteerRoles.map((role) => {
            const Icon = role.icon;

            return (
              <div
                key={role.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-amber-100 p-4 text-amber-700">
                  <Icon size={32} />
                </div>

                <h3 className="text-2xl font-bold">{role.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {role.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Volunteer Journey */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Your Volunteer Journey
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Becoming part of the movement is simple. Every step you take
              contributes to creating lasting social impact.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {volunteerSteps.map((item) => (
              <div
                key={item.step}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <span className="text-5xl font-extrabold text-amber-500">
                  {item.step}
                </span>

                <h3 className="mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-[40px] bg-gradient-to-r from-amber-600 to-orange-500 px-10 py-20 text-center text-white">
          <h2 className="text-4xl font-bold md:text-5xl">
            Small Actions. Lifelong Impact.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-amber-100">
            Whether you volunteer for one day or one year, your contribution
            helps deliver meals, restore dignity, and inspire hope. Together, we
            can build communities where no one is left behind.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-5xl font-extrabold">10K+</h3>
              <p className="mt-3 text-amber-100">Meals Distributed</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold">500+</h3>
              <p className="mt-3 text-amber-100">Dedicated Volunteers</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold">100+</h3>
              <p className="mt-3 text-amber-100">Community Events</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Together We Can End Hunger
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Every volunteer is a messenger of hope. Join the One Meal One Hope
            campaign and help create a future where everyone has access to at
            least one nutritious meal every day.
          </p>

          <div className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
            >
              Become a Volunteer
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
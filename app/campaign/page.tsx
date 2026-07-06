import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Campaign | One Meal One Hope",
  description:
    "Join the One Meal One Hope campaign to help end hunger through food distribution, community support, volunteering, and donations. Together, we can ensure that no one sleeps hungry.",
};

const campaignGoals = [
  {
    title: "Feed Every Hungry Person",
    description:
      "Provide at least one nutritious meal each day to individuals and families experiencing hunger.",
  },
  {
    title: "Reduce Food Waste",
    description:
      "Partner with restaurants, businesses, and communities to rescue surplus food and redistribute it responsibly.",
  },
  {
    title: "Community Participation",
    description:
      "Encourage volunteers, schools, colleges, and organizations to take part in regular food drives.",
  },
  {
    title: "Long-Term Change",
    description:
      "Support sustainable solutions including community kitchens, nutrition awareness, and local partnerships.",
  },
];

const campaignPrograms = [
  {
    title: "Daily Meal Distribution",
    description:
      "Deliver fresh, nutritious meals to homeless individuals, daily wage workers, elderly citizens, and vulnerable families.",
  },
  {
    title: "School Meal Initiative",
    description:
      "Help children stay healthy and focused in school by supporting nutritious meal programs.",
  },
  {
    title: "Community Kitchen",
    description:
      "Build and support kitchens that prepare meals with dignity, consistency, and care.",
  },
  {
    title: "Emergency Hunger Relief",
    description:
      "Respond quickly during floods, disasters, pandemics, and emergencies with food assistance.",
  },
  {
    title: "Festival Food Drive",
    description:
      "Celebrate festivals by sharing meals with those who would otherwise go without.",
  },
  {
    title: "Corporate CSR Partnership",
    description:
      "Collaborate with companies to create measurable social impact through employee engagement and CSR initiatives.",
  },
];

const waysToHelp = [
  "Donate to sponsor meals.",
  "Volunteer in food distribution drives.",
  "Organize local food collection campaigns.",
  "Partner as a restaurant or business.",
  "Spread awareness on social media.",
  "Support community kitchens.",
];

export default function CampaignPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-24">
        <div className="container mx-auto max-w-6xl px-6 text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            One Meal One Hope
          </span>

          <h1 className="mt-6 text-5xl font-extrabold md:text-7xl">
            Campaign for a Hunger-Free Tomorrow
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Hunger is not just the absence of food—it is the absence of
            opportunity, health, dignity, and hope. Through{" "}
            <strong>One Meal One Hope</strong>, we believe that every meal shared
            has the power to transform lives and build stronger communities.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
            >
              Donate Now
            </Link>

            <Link
              href="/volunteers"
              className="rounded-full border border-amber-600 px-8 py-4 font-semibold text-amber-700 transition hover:bg-amber-600 hover:text-white"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold">Our Mission</h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We aim to eliminate hunger by ensuring that every individual has
              access to at least one nutritious meal every day. We connect
              compassionate donors, volunteers, organizations, and communities
              to create a sustainable movement against hunger.
            </p>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Campaign Goals</h2>
            <p className="mt-4 text-gray-600">
              Every initiative is designed to create lasting impact.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {campaignGoals.map((goal) => (
              <div
                key={goal.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold">{goal.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Our Campaign Programs</h2>

            <p className="mt-4 text-gray-600">
              Practical initiatives creating measurable social impact.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {campaignPrograms.map((program) => (
              <div
                key={program.title}
                className="rounded-3xl border border-gray-200 p-8 transition hover:border-amber-500 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold">{program.title}</h3>

                <p className="mt-4 text-gray-600 leading-7">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="bg-amber-50 py-20">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold">Why This Campaign Matters</h2>

          <p className="mt-8 text-lg leading-8 text-gray-700">
            Millions of people continue to face food insecurity every day.
            Hunger affects children, families, elderly individuals, and entire
            communities. It impacts education, health, employment, and overall
            quality of life.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-700">
            One meal cannot solve every challenge, but it can restore strength,
            dignity, and hope. Every contribution helps build a future where no
            one is left behind.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-20">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">How You Can Help</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {waysToHelp.map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-gray-100 p-6 font-medium"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Together, We Can End Hunger
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Every donation, every volunteer, every shared meal, and every act
            of kindness brings us closer to a world where no one sleeps hungry.
            Join the One Meal One Hope movement today.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Donate Today
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
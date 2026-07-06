import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Discover how One Meal One Hope is transforming lives by fighting hunger through nutritious meals, community support, volunteers, and sustainable action.",
};

const impactStats = [
  {
    number: "50,000+",
    title: "Meals Served",
    description:
      "Nutritious meals shared with children, families, elderly citizens, and vulnerable communities.",
  },
  {
    number: "12,000+",
    title: "Lives Impacted",
    description:
      "Individuals supported through hunger relief, nutrition initiatives, and community outreach.",
  },
  {
    number: "850+",
    title: "Volunteers",
    description:
      "Dedicated changemakers contributing their time, skills, and compassion.",
  },
  {
    number: "45+",
    title: "Communities Reached",
    description:
      "Cities, villages, schools, and shelters served through collaborative partnerships.",
  },
];

const initiatives = [
  {
    title: "Daily Meal Distribution",
    description:
      "Providing freshly prepared meals to people experiencing food insecurity through organized distribution drives.",
  },
  {
    title: "School Nutrition Program",
    description:
      "Helping children stay healthy, focused, and ready to learn with nutritious meals.",
  },
  {
    title: "Emergency Hunger Relief",
    description:
      "Rapid food assistance during floods, disasters, pandemics, and other humanitarian emergencies.",
  },
  {
    title: "Community Kitchens",
    description:
      "Creating sustainable kitchens that empower communities to prepare and share meals locally.",
  },
];

const goals = [
  "Ensure every person has access to at least one nutritious meal every day.",
  "Reduce child hunger and malnutrition.",
  "Support families facing financial hardship.",
  "Promote food sustainability and reduce food waste.",
  "Build a nationwide network of volunteers and partners.",
];

export default function ImpactPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            One Meal One Hope
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl">
            Measuring Hope Through
            <span className="block text-amber-600">Real Impact</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Every meal served represents more than nourishment—it restores
            dignity, creates opportunity, and strengthens communities. Together,
            we are building a future where no one has to face hunger alone.
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {impactStats.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h2 className="text-5xl font-extrabold text-amber-600">
                  {item.number}
                </h2>

                <h3 className="mt-4 text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission in Action */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Turning Compassion Into Action
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Our impact extends beyond serving meals. We create long-term
              solutions that strengthen communities, improve nutrition, and
              inspire hope for future generations.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {initiatives.map((initiative) => (
              <div
                key={initiative.title}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold">{initiative.title}</h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="rounded-[40px] bg-gradient-to-r from-amber-500 to-orange-500 p-12 text-white">
            <h2 className="text-4xl font-bold">Our Vision for the Future</h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-amber-100">
              We believe ending hunger requires collaboration, innovation, and
              compassion. These goals guide every campaign, partnership, and
              community initiative we undertake.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {goals.map((goal) => (
                <div
                  key={goal}
                  className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 text-2xl">✓</div>

                    <p className="leading-7">{goal}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gray-900 py-24 text-center text-white">
        <div className="container mx-auto max-w-4xl px-6">
          <blockquote className="text-3xl font-semibold leading-relaxed md:text-4xl">
            “Hope begins with one meal, grows through compassion, and changes
            lives forever.”
          </blockquote>

          <p className="mt-8 text-lg text-gray-300">
            Every contribution creates another story of resilience, dignity, and
            humanity.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="rounded-[40px] bg-amber-50 p-12 text-center">
            <h2 className="text-4xl font-bold">
              Be Part of the Next Success Story
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Whether you donate, volunteer, or share our mission, your support
              helps ensure that every individual has access to at least one
              nutritious meal each day.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/donate"
                className="rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
              >
                Donate Now
              </a>

              <a
                href="/volunteers"
                className="rounded-full border border-amber-600 px-8 py-4 font-semibold text-amber-700 transition hover:bg-amber-600 hover:text-white"
              >
                Become a Volunteer
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
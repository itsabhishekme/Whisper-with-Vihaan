import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Hunger Crisis",
  description:
    "Explore the reality of hunger, food insecurity, child malnutrition, food waste, and how the One Meal One Hope campaign is creating lasting change through compassion and collective action.",
};

const hungerFacts = [
  {
    title: "Food Insecurity",
    description:
      "Millions of people struggle every day without reliable access to safe, nutritious, and sufficient food.",
  },
  {
    title: "Child Malnutrition",
    description:
      "Children affected by hunger face challenges in physical growth, education, and long-term health.",
  },
  {
    title: "Food Waste",
    description:
      "Large amounts of edible food are discarded every day while many families continue to experience hunger.",
  },
  {
    title: "Climate & Agriculture",
    description:
      "Climate change, droughts, floods, and extreme weather reduce food production and threaten livelihoods.",
  },
  {
    title: "Poverty",
    description:
      "Limited income and unemployment often make nutritious meals unaffordable for vulnerable families.",
  },
  {
    title: "Community Action",
    description:
      "Together, volunteers, organizations, and donors can create sustainable food support systems and restore hope.",
  },
];

const solutions = [
  "Support community kitchens.",
  "Reduce household food waste.",
  "Volunteer in local food distribution drives.",
  "Donate meals to families in need.",
  "Promote nutrition education.",
  "Support farmers and sustainable agriculture.",
  "Partner with NGOs and local communities.",
  "Raise awareness through storytelling and documentaries.",
];

export default function HungerPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-amber-50 py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-4xl">
            <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
              Understanding Hunger
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
              Hunger is More Than an Empty Plate
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-9 text-gray-600">
              Hunger affects health, education, dignity, and opportunity.
              Behind every empty plate is a story of resilience, struggle, and
              hope. Through <strong>One Meal One Hope</strong>, we believe that
              every act of kindness can transform lives.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold">
                Why Hunger Matters
              </h2>

              <p className="mt-6 leading-8 text-gray-600">
                Hunger is not simply the absence of food—it is the absence of
                opportunity, health, education, and stability. Families facing
                food insecurity often struggle with unemployment, rising living
                costs, limited access to healthcare, and environmental
                challenges.
              </p>

              <p className="mt-6 leading-8 text-gray-600">
                Ending hunger requires compassion, collaboration, and sustainable
                solutions. Every meal served represents dignity, care, and hope
                for someone in need.
              </p>
            </div>

            <div className="rounded-3xl bg-amber-50 p-10 shadow-sm">
              <h3 className="text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-6 leading-8 text-gray-700">
                We envision communities where no child sleeps hungry, every
                family has access to nutritious meals, and food reaches those
                who need it most rather than going to waste.
              </p>

              <div className="mt-10 border-l-4 border-amber-500 pl-6">
                <p className="text-xl font-semibold italic text-gray-800">
                  "One meal can restore strength. One act of kindness can
                  restore hope."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hunger Facts */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Understanding the Challenge
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Hunger is influenced by multiple interconnected issues that require
              long-term, community-driven solutions.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {hungerFacts.map((fact) => (
              <div
                key={fact.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold">{fact.title}</h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {fact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              How We Can Make a Difference
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Lasting change begins when individuals, communities, businesses,
              and organizations work together toward a common purpose.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {solutions.map((item) => (
              <div
                key={item}
                className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition hover:border-amber-500"
              >
                <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 font-bold text-white">
                  ✓
                </div>

                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Message */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-24 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-5xl font-bold">
            One Meal One Hope
          </h2>

          <p className="mt-8 text-xl leading-9 text-orange-100">
            Every contribution—whether a meal, a donation, a volunteer hour, or
            simply sharing our mission—helps create a future where no one has to
            face hunger alone.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="/donate"
              className="rounded-full bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-100"
            >
              Donate Now
            </a>

            <a
              href="/volunteers"
              className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-orange-600"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
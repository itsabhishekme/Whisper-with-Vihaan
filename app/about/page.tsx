import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Whisper with Vihaan and the One Meal One Hope initiative—our mission, vision, values, and commitment to ending hunger through compassion, storytelling, and community action.",
};

const values = [
  {
    title: "Compassion",
    description:
      "We believe every individual deserves dignity, respect, and access to nutritious food.",
  },
  {
    title: "Hope",
    description:
      "Every meal shared becomes a symbol of possibility and a step toward a brighter tomorrow.",
  },
  {
    title: "Community",
    description:
      "Lasting change happens when people, organizations, and volunteers work together.",
  },
  {
    title: "Transparency",
    description:
      "We are committed to accountability and ensuring every contribution creates meaningful impact.",
  },
];

const objectives = [
  "Provide at least one nutritious meal to people facing hunger.",
  "Raise awareness about food insecurity and malnutrition.",
  "Support children, families, and vulnerable communities.",
  "Encourage volunteering and community participation.",
  "Partner with NGOs, schools, and local organizations.",
  "Reduce food waste through responsible redistribution.",
];

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 font-semibold uppercase tracking-[0.3em] text-amber-600">
              About Us
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              Whisper with Vihaan
            </h1>

            <p className="mt-8 text-xl leading-9 text-gray-600">
              A storytelling movement dedicated to inspiring compassion and
              creating social impact through the
              <span className="font-semibold text-amber-600">
                {" "}
                One Meal One Hope
              </span>{" "}
              campaign.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="container mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-amber-600">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Every Great Change Begins with One Small Act of Kindness
            </h2>

            <p className="mt-8 leading-8 text-gray-600">
              Whisper with Vihaan was created with a simple belief: stories have
              the power to transform lives. By sharing authentic human
              experiences, we aim to inspire empathy, encourage action, and
              bring communities together to fight hunger.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Through documentaries, awareness campaigns, volunteer programs,
              and community partnerships, we strive to ensure that no one has to
              face the pain of an empty plate alone.
            </p>
          </div>

          <div className="rounded-3xl bg-amber-50 p-10 shadow-sm">
            <h3 className="text-3xl font-bold">One Meal One Hope</h3>

            <p className="mt-6 leading-8 text-gray-700">
              Our flagship initiative believes that access to food is a basic
              human right. Every meal served is more than nourishment—it is
              dignity, care, and hope for a better future.
            </p>

            <div className="mt-10 grid gap-6">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h4 className="font-semibold text-amber-600">Mission</h4>
                <p className="mt-2 text-gray-600">
                  End hunger by ensuring every individual has access to at least
                  one nutritious meal each day.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h4 className="font-semibold text-amber-600">Vision</h4>
                <p className="mt-2 text-gray-600">
                  Build a world where no child, family, or community sleeps
                  hungry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-[0.25em] text-amber-600">
              Our Values
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Principles That Guide Every Action
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-lg"
              >
                <h3 className="text-2xl font-bold">{value.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="font-semibold uppercase tracking-[0.25em] text-amber-600">
                Objectives
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                What We Aim to Achieve
              </h2>

              <ul className="mt-10 space-y-5">
                {objectives.map((item) => (
                  <li
                    key={item}
                    className="flex gap-4 rounded-2xl bg-amber-50 p-5"
                  >
                    <span className="text-xl text-amber-600">✓</span>

                    <p className="leading-7 text-gray-700">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 p-10 text-white shadow-xl">
              <h3 className="text-4xl font-bold">
                Together We Can End Hunger
              </h3>

              <p className="mt-8 leading-8 text-amber-100">
                Every donation, every volunteer, every shared story, and every
                meal creates a ripple of hope. When individuals unite with a
                shared purpose, extraordinary change becomes possible.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-6">
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <h4 className="text-4xl font-bold">1+</h4>
                  <p className="mt-2 text-amber-100">
                    Meal can inspire hope.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <h4 className="text-4xl font-bold">100%</h4>
                  <p className="mt-2 text-amber-100">
                    Commitment to compassion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-gray-900 py-24 text-white">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <blockquote className="text-3xl font-light italic leading-relaxed md:text-4xl">
            “One meal may feed a person for today, but compassion can nourish
            hope for a lifetime.”
          </blockquote>

          <p className="mt-10 text-lg text-gray-300">
            — Whisper with Vihaan • One Meal One Hope
          </p>
        </div>
      </section>
    </main>
  );
}
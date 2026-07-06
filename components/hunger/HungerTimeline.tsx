"use client";

import { Clock3, Wheat, HandHeart, UtensilsCrossed, CheckCircle2 } from "lucide-react";

const timeline = [
  {
    year: "Today",
    title: "A Child Wakes Up Hungry",
    description:
      "For millions of children and families, the day begins without the certainty of a nutritious breakfast. Hunger affects health, learning, and emotional well-being.",
    icon: Clock3,
  },
  {
    year: "The Challenge",
    title: "Food Exists, But Access Does Not",
    description:
      "Communities often face barriers such as poverty, unemployment, food waste, natural disasters, and limited access to nutritious meals.",
    icon: Wheat,
  },
  {
    year: "Our Response",
    title: "One Meal One Hope",
    description:
      "Volunteers, donors, and partners work together to prepare and distribute nutritious meals, ensuring dignity and hope for every individual served.",
    icon: HandHeart,
  },
  {
    year: "The Impact",
    title: "A Meal Changes Everything",
    description:
      "A nutritious meal restores energy, supports education, improves health, and reminds every person that they are valued and cared for.",
    icon: UtensilsCrossed,
  },
  {
    year: "The Future",
    title: "Ending Hunger Together",
    description:
      "Through compassion, awareness, and collective action, we can build communities where no one has to wonder where their next meal will come from.",
    icon: CheckCircle2,
  },
];

export default function HungerTimeline() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Hunger Journey
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            From Hunger to Hope
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every meal tells a story. This journey reflects how compassion,
            community, and action can transform lives—one meal at a time.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-amber-200 md:block" />

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group relative flex flex-col gap-6 md:flex-row md:gap-10"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                    <Icon size={28} />
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <span className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-700">
                      {item.year}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mx-auto mt-24 max-w-4xl rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-8 py-14 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            One Meal Can Change a Day.
          </h3>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/90">
            A single act of kindness may seem small, but for someone facing
            hunger it can restore strength, dignity, and hope. Together, we can
            create a future where every plate is filled and every heart carries
            hope.
          </p>
        </div>
      </div>
    </section>
  );
}
"use client";

import { Eye, Globe2, HeartHandshake, Leaf, Sparkles } from "lucide-react";

const visionPoints = [
  {
    icon: Globe2,
    title: "A Hunger-Free World",
    description:
      "We envision a future where no child, family, or individual goes to bed hungry and every person has access to safe, nutritious food.",
  },
  {
    icon: HeartHandshake,
    title: "Communities United",
    description:
      "Building strong partnerships between volunteers, donors, local communities, and organizations to create sustainable food support systems.",
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    description:
      "Beyond providing meals, we aim to reduce food waste, encourage responsible consumption, and promote long-term food security.",
  },
  {
    icon: Sparkles,
    title: "Hope Through Compassion",
    description:
      "Every meal represents dignity, kindness, and hope. Together, small acts of generosity can transform countless lives.",
  },
];

export default function CampaignVision() {
  return (
    <section className="bg-gradient-to-b from-white via-amber-50 to-orange-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
            <Eye className="h-4 w-4" />
            Our Vision
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            One Meal Today.
            <span className="block text-amber-600">
              A Better Tomorrow.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            <strong>One Meal One Hope</strong> is more than a campaign—it is a
            movement to inspire compassion, eliminate hunger, and empower
            communities through collective action. Our vision is rooted in the
            belief that every individual deserves dignity, nourishment, and the
            opportunity to thrive.
          </p>
        </div>

        {/* Vision Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {visionPoints.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-amber-100 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 transition group-hover:bg-amber-600">
                  <Icon className="h-8 w-8 text-amber-600 transition group-hover:text-white" />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vision Statement */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 p-10 text-center text-white shadow-2xl lg:p-16">
          <h3 className="text-3xl font-bold md:text-4xl">
            Our Dream
          </h3>

          <p className="mx-auto mt-6 max-w-4xl text-lg leading-8 text-amber-100">
            We dream of a world where hunger is no longer a daily reality but a
            challenge overcome through unity, innovation, and compassion.
            Together, we can create communities where every meal restores hope,
            every act of kindness builds resilience, and every life is valued.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-full bg-white/15 px-6 py-3 backdrop-blur-sm">
              🍽️ Every Meal Matters
            </div>

            <div className="rounded-full bg-white/15 px-6 py-3 backdrop-blur-sm">
              ❤️ Every Life Matters
            </div>

            <div className="rounded-full bg-white/15 px-6 py-3 backdrop-blur-sm">
              🌍 Together We Can End Hunger
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
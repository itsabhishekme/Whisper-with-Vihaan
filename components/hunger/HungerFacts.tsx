"use client";

import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  HeartHandshake,
  Wheat,
  Soup,
  Users,
  Globe2,
} from "lucide-react";

const hungerFacts = [
  {
    icon: UtensilsCrossed,
    title: "Every Meal Matters",
    description:
      "A nutritious meal is more than food—it restores energy, protects health, and offers hope to individuals and families facing food insecurity.",
  },
  {
    icon: Wheat,
    title: "Food Waste Can Become Hope",
    description:
      "Reducing food waste and improving food distribution can help ensure more people have access to healthy meals within their communities.",
  },
  {
    icon: Users,
    title: "Communities Create Change",
    description:
      "Volunteers, donors, and local organizations can work together to provide meals, strengthen neighborhoods, and support vulnerable families.",
  },
  {
    icon: Soup,
    title: "Community Kitchens",
    description:
      "Community kitchens provide warm, nutritious meals while creating safe spaces where people are treated with dignity and compassion.",
  },
  {
    icon: HeartHandshake,
    title: "Compassion Inspires Action",
    description:
      "Every act of generosity—whether donating, volunteering, or raising awareness—helps move us closer to a future without hunger.",
  },
  {
    icon: Globe2,
    title: "Together We Can End Hunger",
    description:
      "Ending hunger requires collaboration among individuals, communities, nonprofits, businesses, and governments working toward sustainable solutions.",
  },
];

export default function HungerFacts() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
            Understanding Hunger
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Hunger Is More Than an Empty Plate
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hunger affects health, education, opportunity, and dignity. Through
            <span className="font-semibold text-amber-600">
              {" "}
              One Meal One Hope
            </span>
            , we believe every meal shared is a step toward a healthier and more
            compassionate world.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {hungerFacts.map((fact, index) => {
            const Icon = fact.icon;

            return (
              <motion.div
                key={fact.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-400 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                  <Icon size={32} strokeWidth={2} />
                </div>

                <h3 className="mb-4 text-2xl font-bold text-gray-900">
                  {fact.title}
                </h3>

                <p className="leading-7 text-gray-600">
                  {fact.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-8 py-16 text-center text-white shadow-2xl"
        >
          <h3 className="text-3xl font-extrabold md:text-4xl">
            One Meal Can Change a Life
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Hunger is a challenge we can address together. Every donation,
            volunteer effort, and shared meal helps bring hope, dignity, and
            opportunity to people who need it most.
          </p>

          <button className="mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-amber-600 transition hover:scale-105 hover:bg-gray-100">
            Join the Mission
          </button>
        </motion.div>
      </div>
    </section>
  );
}
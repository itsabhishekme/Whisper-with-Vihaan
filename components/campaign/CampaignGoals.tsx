"use client";

import { Target, HeartHandshake, Users, Globe2, School, Utensils } from "lucide-react";
import { motion } from "framer-motion";

const goals = [
  {
    icon: Utensils,
    title: "Provide Nutritious Meals",
    description:
      "Ensure every individual has access to at least one healthy and nutritious meal each day through community kitchens, food distribution, and local partnerships.",
  },
  {
    icon: HeartHandshake,
    title: "Fight Hunger with Compassion",
    description:
      "Build a culture where acts of kindness become daily habits, inspiring individuals and organizations to support those facing food insecurity.",
  },
  {
    icon: Users,
    title: "Empower Communities",
    description:
      "Work alongside volunteers, NGOs, local leaders, and citizens to create sustainable solutions that strengthen communities from within.",
  },
  {
    icon: School,
    title: "Support Children & Education",
    description:
      "Reduce classroom hunger by helping children receive regular meals, improving health, concentration, attendance, and educational outcomes.",
  },
  {
    icon: Globe2,
    title: "Promote Zero Hunger",
    description:
      "Contribute toward the United Nations Sustainable Development Goal of Zero Hunger by raising awareness and encouraging collective action.",
  },
  {
    icon: Target,
    title: "Create Lasting Impact",
    description:
      "Move beyond short-term relief by developing long-term food security initiatives that restore dignity, hope, and opportunity for every family.",
  },
];

export default function CampaignGoals() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            One Meal One Hope
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Campaign Goals
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hunger is more than the absence of food—it is the absence of
            opportunity, dignity, and hope. Our campaign focuses on meaningful,
            sustainable actions that bring communities together to ensure no one
            goes to bed hungry.
          </p>
        </motion.div>

        {/* Goals Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {goals.map((goal, index) => {
            const Icon = goal.icon;

            return (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 transition-colors duration-300 group-hover:bg-amber-500">
                  <Icon className="h-8 w-8 text-amber-700 transition-colors duration-300 group-hover:text-white" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {goal.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {goal.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-10 text-center text-white md:p-16"
        >
          <h3 className="text-3xl font-bold md:text-4xl">
            Every Meal Creates Hope
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
            A single meal can restore strength. A single act of kindness can
            restore dignity. Together, we can build a future where hunger is no
            longer a barrier to health, education, or opportunity. Join us in
            creating lasting change—one meal, one family, one community at a
            time.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/donate"
              className="rounded-full bg-white px-8 py-4 font-semibold text-amber-700 transition hover:scale-105"
            >
              Donate Now
            </a>

            <a
              href="/volunteers"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-amber-700"
            >
              Become a Volunteer
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
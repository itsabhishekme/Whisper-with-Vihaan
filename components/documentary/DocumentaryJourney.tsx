"use client";

import { motion } from "framer-motion";
import {
 HandHeart,
  UtensilsCrossed,
  Users,
  HeartHandshake,
  Sprout,
} from "lucide-react";

const journey = [
  {
    id: "01",
    title: "Awareness",
    subtitle: "Understanding Hunger",
    description:
      "Every movement begins with awareness. Millions of people face hunger every day, struggling to access nutritious food. Recognizing this reality is the first step toward meaningful and lasting change.",
    icon: HandHeart,
  },
  {
    id: "02",
    title: "Hope",
    subtitle: "One Meal One Hope",
    description:
      "A single meal is more than nourishment—it is hope restored. Every donation, every meal served, and every act of kindness reminds someone that they are valued, seen, and never alone.",
    icon: UtensilsCrossed,
  },
  {
    id: "03",
    title: "Community",
    subtitle: "Together We Serve",
    description:
      "Volunteers, donors, partners, and local communities unite with one purpose: ensuring that no one goes to bed hungry. Together, compassion becomes action and action becomes impact.",
    icon: Users,
  },
  {
    id: "04",
    title: "Impact",
    subtitle: "Changing Lives Every Day",
    description:
      "Every meal improves health, supports education, strengthens families, and restores dignity. Small acts of generosity create lasting change across communities and inspire hope for generations.",
    icon: HeartHandshake,
  },
  {
    id: "05",
    title: "Future",
    subtitle: "A World Without Hunger",
    description:
      "Our vision extends beyond feeding today. We strive to build resilient communities where every child grows with opportunity, every family has food security, and hunger becomes a challenge of the past.",
    icon: Sprout,
  },
];

export default function DocumentaryJourney() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Documentary Journey
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-6xl">
            Every Story Begins With a Whisper
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            <strong>Whisper with Vihaan</strong> is a cinematic storytelling
            journey that explores identity, memory, healing, destiny, and
            transformation. Each chapter invites viewers to reflect on the
            shared human experience and discover the quiet strength found in
            compassion and hope.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 hidden h-full w-1 rounded-full bg-gradient-to-b from-amber-400 via-orange-400 to-red-500 lg:block" />

          <div className="space-y-14">
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  className="relative flex flex-col gap-8 rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl lg:ml-16 lg:flex-row lg:items-start"
                >
                  {/* Timeline Icon */}
                  <div className="absolute -left-20 hidden lg:flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg">
                      <Icon size={22} />
                    </div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white lg:hidden">
                    <Icon size={24} />
                  </div>

                  {/* Number */}
                  <div className="min-w-[90px]">
                    <span className="text-5xl font-black text-amber-500">
                      {item.id}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-gray-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-lg font-medium text-amber-600">
                      {item.subtitle}
                    </p>

                    <p className="mt-5 leading-8 text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Quote */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-gray-900 to-black px-8 py-16 text-center text-white">
          <h3 className="text-3xl font-bold md:text-4xl">
            "Every whisper carries a story.
            <br />
            Every story has the power to change a life."
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-300">
            Through documentary filmmaking and purposeful storytelling,
            <strong> Whisper with Vihaan </strong>
            seeks to amplify unheard voices, inspire empathy, and create lasting
            social impact—one story at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
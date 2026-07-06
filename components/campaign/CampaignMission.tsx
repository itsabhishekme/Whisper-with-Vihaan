"use client";

import { ArrowRight, Heart, Target, HandHeart } from "lucide-react";
import Link from "next/link";

const missionPoints = [
  {
    icon: Heart,
    title: "Compassion First",
    description:
      "Every meal begins with empathy. We believe no person should experience hunger while food and kindness exist within our communities.",
  },
  {
    icon: Target,
    title: "Sustainable Impact",
    description:
      "Our goal extends beyond feeding people today. We work toward creating resilient communities through awareness, partnerships, and long-term solutions.",
  },
  {
    icon: HandHeart,
    title: "Community Together",
    description:
      "Volunteers, donors, local organizations, and everyday citizens become part of a movement where every contribution creates meaningful change.",
  },
];

export default function CampaignMission() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Our Mission
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
            One Meal. One Hope. One Human Family.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            <strong>One Meal One Hope</strong> is more than a campaign—it is a
            promise that every individual deserves dignity, nourishment, and the
            opportunity to live without the pain of hunger. Through storytelling,
            compassion, and collective action, we aim to inspire communities to
            become part of a movement where every meal creates hope.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 p-10 text-white shadow-2xl">
          <div className="mx-auto max-w-5xl text-center">
            <h3 className="text-3xl font-bold">
              Our Promise to Every Community
            </h3>

            <p className="mt-6 text-lg leading-8 text-white/90">
              We strive to ensure that no child sleeps hungry, no family feels
              forgotten, and no community is left behind. Every donation,
              volunteer hour, partnership, and shared story contributes to a
              future where access to food is recognized as a basic human right.
            </p>
          </div>
        </div>

        {/* Mission Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {missionPoints.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-amber-300 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 transition group-hover:bg-amber-500">
                <Icon className="h-8 w-8 text-amber-600 transition group-hover:text-white" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-gray-900">
                {title}
              </h3>

              <p className="mt-4 leading-8 text-gray-600">{description}</p>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-20 grid gap-8 rounded-3xl bg-gray-900 p-10 text-center text-white md:grid-cols-4">
          <div>
            <h4 className="text-5xl font-extrabold text-amber-400">1M+</h4>
            <p className="mt-2 text-gray-300">Meals to Deliver</p>
          </div>

          <div>
            <h4 className="text-5xl font-extrabold text-amber-400">500+</h4>
            <p className="mt-2 text-gray-300">Dedicated Volunteers</p>
          </div>

          <div>
            <h4 className="text-5xl font-extrabold text-amber-400">100+</h4>
            <p className="mt-2 text-gray-300">Communities Reached</p>
          </div>

          <div>
            <h4 className="text-5xl font-extrabold text-amber-400">∞</h4>
            <p className="mt-2 text-gray-300">Lives Forever Changed</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900">
            Be the Reason Someone Eats Today
          </h3>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Hunger is not inevitable—it is solvable when compassionate people
            unite. Your support helps provide nutritious meals, strengthen
            communities, and restore hope to those who need it most.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="inline-flex items-center rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
            >
              Donate Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/volunteers"
              className="inline-flex items-center rounded-full border border-gray-300 px-8 py-4 font-semibold text-gray-800 transition hover:border-amber-500 hover:text-amber-600"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
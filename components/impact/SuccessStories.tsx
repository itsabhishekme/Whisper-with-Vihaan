"use client";

import Image from "next/image";
import { Quote, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const stories = [
  {
    id: 1,
    name: "Asha",
    age: "10 Years",
    location: "Bengaluru",
    image: "/images/stories/story-1.jpg",
    title: "A Meal That Changed Everything",
    description:
      "Asha once struggled to attend school because hunger affected her ability to learn. Through the One Meal One Hope campaign, she now receives regular nutritious meals and has rediscovered the joy of learning and dreaming.",
  },
  {
    id: 2,
    name: "Ravi",
    age: "42 Years",
    location: "Mysuru",
    image: "/images/stories/story-2.jpg",
    title: "Hope During Difficult Times",
    description:
      "After losing his livelihood, Ravi and his family faced days without proper meals. Community volunteers ensured food reached his home, restoring hope and dignity during one of the hardest periods of his life.",
  },
  {
    id: 3,
    name: "Meena",
    age: "65 Years",
    location: "Hubballi",
    image: "/images/stories/story-3.jpg",
    title: "No One Should Eat Alone",
    description:
      "Living alone with limited resources, Meena often skipped meals. Today, compassionate volunteers visit regularly, providing food, companionship, and the reassurance that she is never forgotten.",
  },
];

export default function SuccessStories() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Stories of Hope
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Every Meal Creates a New Beginning
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Behind every meal served is a human story—of resilience, compassion,
            and renewed hope. Together, we are transforming lives one meal at a
            time.
          </p>
        </div>

        {/* Stories */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.id}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-2xl font-bold">{story.name}</p>
                  <p className="text-sm opacity-90">
                    {story.age} • {story.location}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <Quote className="mb-4 text-amber-500" size={34} />

                <h3 className="text-2xl font-bold text-gray-900">
                  {story.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {story.description}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-500">
                    <Heart className="fill-red-500" size={18} />
                    <span className="font-medium">Hope Restored</span>
                  </div>

                  <Link
                    href="/stories"
                    className="flex items-center gap-2 font-semibold text-amber-600 transition hover:text-amber-700"
                  >
                    Read Story
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-16 text-center text-white">
          <h3 className="text-4xl font-extrabold">
            Your Kindness Can Change the Next Story
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Every donation, every volunteer, and every shared meal creates hope
            for someone facing hunger. Join the One Meal One Hope movement and
            help write the next chapter of compassion.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-xl bg-white px-8 py-4 font-bold text-amber-600 transition hover:scale-105"
            >
              Donate Now
            </Link>

            <Link
              href="/volunteers"
              className="rounded-xl border border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-amber-600"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
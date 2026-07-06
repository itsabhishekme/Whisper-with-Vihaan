"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock3,
  ExternalLink,
  Star,
} from "lucide-react";

const magazines = [
  {
    id: 1,
    volume: "Vol. 01",
    date: "September 2025",
    title: "Whispers with Vihaan",
    category: "Humanity",
    image: "/images/magazine/volume-1.jpg",
    readTime: "85 Pages",
    description:
      "The inaugural issue explores hunger, hope, forgotten recipes, resilience, and the dignity found in sharing a single meal.",
    highlights: [
      "When Hunger Meets Hope",
      "Forgotten Recipes Revived",
      "Failures That Teach",
      "Food, Love & Dignity",
    ],
    amazon: "https://www.amazon.in/dp/B0FPC8D5C6",
    featured: true,
  },
  {
    id: 2,
    volume: "Vol. 02",
    date: "2025",
    title: "Hunger, Hope & Humanity",
    category: "Social Impact",
    image: "/images/magazine/volume-2.jpg",
    readTime: "92 Pages",
    description:
      "Discover how hunger extends beyond the plate through inspiring stories of resilience, compassion, and sustainable community change.",
    highlights: [
      "Seeds of Hope",
      "Humanity in Action",
      "Community Kitchens",
      "Road Ahead",
    ],
    amazon: "https://www.amazon.in/dp/B0FTBJ8KR5",
    featured: false,
  },
  {
    id: 3,
    volume: "Vol. 03",
    date: "2026",
    title: "Threads of Belonging",
    category: "Culture",
    image: "/images/magazine/volume-3.jpg",
    readTime: "104 Pages",
    description:
      "An exploration of migration, culture, belonging, food, identity, and communities connected through empathy and shared humanity.",
    highlights: [
      "Roots & Routes",
      "Empty Plates",
      "Weaving Cultures",
      "Togetherness",
    ],
    amazon: "https://www.amazon.in/dp/B0FYP3GZ1Q",
    featured: false,
  },
];

export default function MagazineGrid() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="mb-16 text-center">
          <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
            Magazine Collection
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900">
            Explore Every Edition
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every volume is carefully crafted with documentary storytelling,
            humanitarian journalism, photography, and inspiring narratives that
            encourage compassion and meaningful action.
          </p>
        </div>

        {/* Grid */}

        <div className="grid gap-10 lg:grid-cols-3">
          {magazines.map((book, index) => (
            <motion.article
              key={book.id}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -10,
              }}
              className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              {/* Cover */}

              <div className="relative h-[460px] overflow-hidden">
                <Image
                  src={book.image}
                  alt={book.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                <div className="absolute left-6 top-6 flex gap-3">
                  <span className="rounded-full bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-widest text-white">
                    {book.volume}
                  </span>

                  {book.featured && (
                    <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-amber-600">
                      <Star
                        size={14}
                        className="fill-amber-500 text-amber-500"
                      />
                      Featured
                    </span>
                  )}
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <span className="rounded-full bg-white/20 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    {book.category}
                  </span>

                  <h3 className="mt-5 text-3xl font-black text-white">
                    {book.title}
                  </h3>
                </div>
              </div>

              {/* Body */}

              <div className="space-y-6 p-8">
                <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar
                      size={18}
                      className="text-amber-500"
                    />
                    {book.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3
                      size={18}
                      className="text-amber-500"
                    />
                    {book.readTime}
                  </div>
                </div>

                <p className="leading-8 text-gray-600">
                  {book.description}
                </p>

                {/* Highlights */}

                <div>
                  <h4 className="mb-4 flex items-center gap-2 text-lg font-bold">
                    <BookOpen size={20} />

                    Inside This Volume
                  </h4>

                  <ul className="space-y-3">
                    {book.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <div className="h-2 w-2 rounded-full bg-amber-500" />

                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}

                <div className="flex flex-col gap-4 pt-6">
                  <Link
                    href={book.amazon}
                    target="_blank"
                    className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 font-bold text-white transition hover:scale-[1.02]"
                  >
                    Buy on Amazon

                    <ExternalLink size={18} />
                  </Link>

                  <button className="flex items-center justify-center gap-3 rounded-2xl border border-gray-300 px-6 py-4 font-semibold transition hover:border-amber-500 hover:bg-amber-50">
                    Read Preview

                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>

              <div className="h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-[40px] bg-gradient-to-r from-gray-950 via-black to-gray-900 px-10 py-20 text-center text-white">
          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
            Documentary • Humanity • Hope
          </span>

          <h2 className="mt-8 text-5xl font-black">
            Every Volume Tells
            <br />
            A Story Worth Sharing
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-300">
            Whispers with Vihaan is more than a magazine collection—it is a
            growing archive of voices, cultures, struggles, and hope that
            inspire readers to build a kinder and more compassionate world.
          </p>

          <Link
            href="/donate"
            className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-amber-500 px-10 py-5 text-lg font-bold text-white transition hover:bg-amber-600"
          >
            Support Our Mission

            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Clock3,
  User,
  Quote,
  Heart,
  UtensilsCrossed,
  Globe,
} from "lucide-react";

export default function FeaturedArticle() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background */}
      <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
            Featured Cover Story
          </span>

          <h2 className="mt-6 text-5xl font-black text-gray-900 md:text-6xl">
            Hunger, Hope &
            <br />
            Humanity
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-gray-600">
            A documentary-inspired editorial exploring how one shared meal can
            restore dignity, revive traditions, and reconnect humanity through
            compassion.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[40px] bg-white shadow-2xl"
        >
          <div className="grid lg:grid-cols-2">
            {/* Left */}
            <div className="relative min-h-[650px] overflow-hidden">
              <Image
                src="/images/magazine/featured.jpg"
                alt="Whispers with Vihaan Magazine"
                fill
                priority
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              <div className="absolute left-8 top-8">
                <span className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 text-sm font-bold uppercase tracking-widest text-white shadow-lg">
                  Cover Story
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8 text-white">
                <div className="flex flex-wrap gap-4">
                  <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
                    Vol. 02
                  </span>

                  <span className="rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
                    September 2025
                  </span>
                </div>

                <h3 className="mt-6 text-4xl font-black leading-tight">
                  Hunger Beyond the Plate
                </h3>

                <p className="mt-4 text-lg text-gray-200">
                  Exploring dignity, resilience, and humanity through stories
                  that deserve to be heard.
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col justify-center p-10 lg:p-16">
              <div className="flex flex-wrap gap-5 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={18}
                    className="text-amber-500"
                  />

                  September 2025
                </div>

                <div className="flex items-center gap-2">
                  <Clock3
                    size={18}
                    className="text-amber-500"
                  />

                  12 min read
                </div>

                <div className="flex items-center gap-2">
                  <User
                    size={18}
                    className="text-amber-500"
                  />

                  Vihaan Writes
                </div>
              </div>

              <h2 className="mt-8 text-5xl font-black leading-tight text-gray-900">
                Stories That Nourish
                <br />
                More Than Hunger
              </h2>

              <div className="mt-8 flex items-start gap-4 rounded-3xl border-l-4 border-amber-500 bg-amber-50 p-6">
                <Quote
                  className="mt-1 text-amber-500"
                  size={30}
                />

                <p className="leading-8 text-gray-700">
                  Hunger is never just about food. It is about dignity,
                  opportunity, belonging, and the courage to keep hoping even
                  when the table is empty.
                </p>
              </div>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                This feature follows families, volunteers, and communities whose
                lives have been transformed through compassion. From forgotten
                recipes and grassroots kitchens to children dreaming beyond
                hunger, every chapter reminds us that humanity begins with
                sharing.
              </p>

              {/* Highlights */}
              <div className="mt-10 grid gap-5 md:grid-cols-2">
                <div className="rounded-3xl bg-gray-50 p-6">
                  <UtensilsCrossed className="mb-4 h-10 w-10 text-amber-600" />

                  <h4 className="font-bold text-gray-900">
                    Hunger & Food Security
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Understanding the realities behind food insecurity.
                  </p>
                </div>

                <div className="rounded-3xl bg-gray-50 p-6">
                  <Heart className="mb-4 h-10 w-10 fill-red-500 text-red-500" />

                  <h4 className="font-bold text-gray-900">
                    Hope Stories
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Extraordinary journeys of resilience and kindness.
                  </p>
                </div>

                <div className="rounded-3xl bg-gray-50 p-6">
                  <BookOpen className="mb-4 h-10 w-10 text-orange-500" />

                  <h4 className="font-bold text-gray-900">
                    Documentary Essays
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Visual storytelling inspired by real communities.
                  </p>
                </div>

                <div className="rounded-3xl bg-gray-50 p-6">
                  <Globe className="mb-4 h-10 w-10 text-green-600" />

                  <h4 className="font-bold text-gray-900">
                    Global Humanity
                  </h4>

                  <p className="mt-2 text-sm leading-7 text-gray-600">
                    Exploring cultures united by empathy and compassion.
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 flex flex-wrap gap-5">
                <Link
                  href="https://www.amazon.in/dp/B0FTBJ8KR5"
                  target="_blank"
                  className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-5 text-lg font-bold text-white shadow-xl transition hover:scale-105"
                >
                  Buy on Amazon

                  <ArrowRight size={20} />
                </Link>

                <Link
                  href="/magazine"
                  className="inline-flex items-center gap-3 rounded-2xl border border-gray-300 px-8 py-5 font-semibold transition hover:border-amber-500 hover:text-amber-600"
                >
                  Browse Magazine
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
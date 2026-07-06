"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function DocumentaryHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-stone-950 via-neutral-900 to-black text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('/images/documentary/documentary-hero.jpg')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-black/60" />

      {/* Decorative Blur */}
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-orange-600/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-amber-400">
              Documentary Series
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
              Whisper
              <br />
              <span className="text-amber-400">with Vihaan</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl">
              Stories possess the power to transform lives. This documentary
              journey uncovers the realities of hunger, resilience, hope, and
              humanity—revealing the faces behind every statistic and inspiring
              action through compassion.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/documentary"
                className="inline-flex items-center rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
              >
                Watch Documentary
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/stories"
                className="inline-flex items-center rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white/10"
              >
                Explore Stories
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6">
              <div>
                <h2 className="text-4xl font-bold text-amber-400">05</h2>
                <p className="mt-2 text-sm text-gray-400">Chapters</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-amber-400">100+</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Stories Collected
                </p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-amber-400">1</h2>
                <p className="mt-2 text-sm text-gray-400">
                  Shared Mission
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md">
              <div
                className="relative aspect-video bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/images/documentary/documentary-cover.jpg')",
                }}
              >
                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    type="button"
                    className="group transition-transform hover:scale-110"
                    aria-label="Play documentary trailer"
                  >
                    <PlayCircle className="h-24 w-24 text-white transition group-hover:text-amber-400" />
                  </button>
                </div>
              </div>

              <div className="space-y-4 p-8">
                <span className="text-sm uppercase tracking-[0.3em] text-amber-400">
                  Featured Journey
                </span>

                <h3 className="text-3xl font-bold">
                  One Meal. One Hope. One Humanity.
                </h3>

                <p className="leading-7 text-gray-300">
                  Follow the voices of volunteers, families, and communities as
                  they reveal the impact of kindness, resilience, and collective
                  action in the fight against hunger.
                </p>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-8 -left-8 hidden rounded-2xl border border-amber-500/20 bg-stone-900/90 p-6 shadow-xl backdrop-blur-lg lg:block">
              <p className="text-sm uppercase tracking-widest text-amber-400">
                Documentary Theme
              </p>

              <h4 className="mt-3 text-2xl font-bold">
                Humanity Beyond Hunger
              </h4>

              <p className="mt-3 max-w-xs text-sm leading-6 text-gray-400">
                Every frame tells a story of courage, compassion, and hope that
                reminds us that no one should ever face hunger alone.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
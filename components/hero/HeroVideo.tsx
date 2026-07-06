"use client";

import Link from "next/link";
import { ArrowRight, Heart, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroVideo() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/hero/poster.jpg"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

      {/* Decorative Blur */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-amber-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-red-600/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-sm font-semibold text-amber-300 backdrop-blur">
            <Sparkles className="h-4 w-4" />
            One Meal One Hope
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-black leading-tight text-white md:text-7xl lg:text-8xl">
            Every Meal
            <br />
            Creates
            <span className="block text-amber-400">A New Hope.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
            Whisper with Vihaan is a storytelling movement dedicated to ending
            hunger through compassion, awareness, and action. Every donation
            helps provide at least one nutritious meal to someone in need,
            turning kindness into lasting change.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap gap-5">
            <Link
              href="/donate"
              className="inline-flex items-center gap-3 rounded-xl bg-amber-500 px-8 py-4 text-lg font-semibold text-black transition hover:bg-amber-400"
            >
              <Heart className="h-5 w-5" />
              Donate Now
            </Link>

            <Link
              href="/documentary"
              className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur transition hover:bg-white hover:text-black"
            >
              <Play className="h-5 w-5" />
              Watch Documentary
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid max-w-3xl grid-cols-2 gap-8 border-t border-white/10 pt-10 md:grid-cols-4">
            <Stat number="10K+" label="Meals Served" />
            <Stat number="500+" label="Volunteers" />
            <Stat number="25+" label="Communities" />
            <Stat number="100%" label="Hope Shared" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-3 text-white">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-300">
            Scroll
          </span>

          <div className="flex h-14 w-8 justify-center rounded-full border border-white/30">
            <div className="mt-2 h-3 w-1 rounded-full bg-white" />
          </div>
        </div>
      </motion.div>

      {/* Floating Action */}
      <Link
        href="/campaign"
        className="absolute bottom-10 right-8 z-20 hidden items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-black lg:flex"
      >
        Explore Campaign
        <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}

type StatProps = {
  number: string;
  label: string;
};

function Stat({ number, label }: StatProps) {
  return (
    <div>
      <h3 className="text-3xl font-extrabold text-amber-400">{number}</h3>
      <p className="mt-2 text-sm uppercase tracking-wider text-gray-300">
        {label}
      </p>
    </div>
  );
}
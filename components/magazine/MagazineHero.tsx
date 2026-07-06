"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BookOpen,
  ArrowRight,
  Calendar,
  Heart,
  BookMarked,
  Sparkles,
  Quote,
} from "lucide-react";

export default function MagazineHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-black to-amber-950 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-amber-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-orange-500/20 blur-[160px]" />
      </div>

      {/* Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-amber-400/30 bg-amber-500/10 px-5 py-3 text-sm font-semibold text-amber-300">
              <Sparkles size={18} />
              Documentary Magazine
            </div>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Whispers
              <br />
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                with Vihaan
              </span>
            </h1>

            <p className="mt-8 text-2xl font-light text-gray-300">
              Stories of Hunger,
              <br />
              Hope & Humanity
            </p>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-400">
              A premium humanitarian magazine exploring documentary
              storytelling, forgotten voices, food culture, resilience,
              compassion, migration, belonging, and the silent stories shaping
              our shared humanity.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <BookMarked className="mb-3 text-amber-400" />

                <h3 className="text-4xl font-black">3</h3>

                <p className="mt-2 text-sm text-gray-400">
                  Volumes
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <BookOpen className="mb-3 text-amber-400" />

                <h3 className="text-4xl font-black">40+</h3>

                <p className="mt-2 text-sm text-gray-400">
                  Stories
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <Heart className="mb-3 fill-red-500 text-red-500" />

                <h3 className="text-4xl font-black">100%</h3>

                <p className="mt-2 text-sm text-gray-400">
                  Humanity
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <Calendar className="mb-3 text-amber-400" />

                <h3 className="text-4xl font-black">2025</h3>

                <p className="mt-2 text-sm text-gray-400">
                  Started
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-14 flex flex-wrap gap-5">
              <Link
                href="#volumes"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-5 font-bold text-white shadow-2xl transition hover:scale-105"
              >
                Explore Volumes

                <ArrowRight className="transition group-hover:translate-x-2" />
              </Link>

              <Link
                href="/donate"
                className="rounded-2xl border border-white/20 px-8 py-5 font-semibold transition hover:bg-white hover:text-black"
              >
                Support Our Mission
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative flex justify-center"
          >
            {/* Background Card */}
            <div className="absolute h-[650px] w-[420px] rounded-[40px] bg-gradient-to-br from-amber-500/30 to-orange-500/20 blur-3xl" />

            {/* Book Cover */}
            <motion.div
              whileHover={{
                rotateY: -10,
                rotateX: 5,
                scale: 1.03,
              }}
              transition={{
                duration: 0.5,
              }}
              className="relative z-20"
            >
              <Image
                src="/images/magazine/volume-3.jpg"
                alt="Whispers with Vihaan Magazine"
                width={420}
                height={620}
                priority
                className="rounded-[32px] shadow-[0_30px_80px_rgba(0,0,0,.5)]"
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -left-12 top-24 hidden w-64 rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-2xl lg:block"
            >
              <Quote className="mb-4 text-amber-400" />

              <p className="text-sm leading-7 text-gray-200">
                Every page is a whisper of struggle, resilience, compassion,
                and hope—reminding us that the quietest voices often tell the
                greatest stories.
              </p>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="absolute -bottom-6 right-0 rounded-3xl border border-white/10 bg-gradient-to-r from-amber-500 to-orange-500 px-8 py-6 shadow-2xl"
            >
              <h3 className="text-4xl font-black">
                Vol.03
              </h3>

              <p className="mt-2 text-white/80">
                Threads of Belonging
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
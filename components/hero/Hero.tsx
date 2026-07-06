"use client";

import Link from "next/link";
import { ArrowRight, Heart, PlayCircle, Utensils } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
      {/* Background Blur */}
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
              <Heart className="h-4 w-4 fill-amber-500 text-amber-500" />
              One Meal One Hope
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight text-gray-900 md:text-7xl">
              Every Meal
              <span className="block text-amber-500">
                Creates Hope.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-600">
              Whisper with Vihaan is a storytelling movement dedicated to ending
              hunger through compassion, awareness, and action.
              <br />
              <br />
              Your support is more than a donation—it is a warm meal, a smile,
              and a second chance for someone who needs it most.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-amber-600"
              >
                Donate Now
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/documentary"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition hover:border-amber-500 hover:text-amber-600"
              >
                <PlayCircle className="h-5 w-5" />
                Watch Documentary
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-4xl font-extrabold text-amber-500">
                  50K+
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Meals Distributed
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-amber-500">
                  120+
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Volunteers
                </p>
              </div>

              <div>
                <h3 className="text-4xl font-extrabold text-amber-500">
                  25+
                </h3>
                <p className="mt-2 text-sm text-gray-600">
                  Communities Reached
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="overflow-hidden rounded-3xl border border-white/50 bg-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&w=900&q=80"
                alt="Children receiving food"
                className="h-[650px] w-full object-cover"
              />
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{
                repeat: Infinity,
                duration: 5,
              }}
              className="absolute -left-10 top-10 rounded-2xl bg-white p-5 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-amber-100 p-3">
                  <Utensils className="text-amber-500" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Today's Meals
                  </p>
                  <h3 className="text-2xl font-bold">
                    1,280
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{
                repeat: Infinity,
                duration: 6,
              }}
              className="absolute -bottom-10 right-5 rounded-2xl bg-white p-6 shadow-xl"
            >
              <p className="text-sm text-gray-500">
                Every ₹100 Can Provide
              </p>

              <h3 className="mt-2 text-3xl font-black text-amber-500">
                2 Meals
              </h3>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
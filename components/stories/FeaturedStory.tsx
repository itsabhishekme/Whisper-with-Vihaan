"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart, Quote } from "lucide-react";

export default function FeaturedStory() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 py-24">
      {/* Background Blur */}
      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Featured Story
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            One Meal.
            <br />
            One Smile.
            <br />
            One Hope.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every plate served tells a story. Behind every meal is a person who
            regains strength, dignity, and hope. These are the moments that
            inspire our mission to fight hunger every single day.
          </p>
        </div>

        {/* Story Card */}
        <div className="grid items-center gap-14 rounded-3xl bg-white p-8 shadow-2xl lg:grid-cols-2 lg:p-12">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src="/images/stories/featured-story.jpg"
              alt="Volunteers serving meals to children"
              width={700}
              height={700}
              priority
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-xl bg-white/90 px-5 py-3 backdrop-blur">
              <p className="text-sm font-semibold text-amber-600">
                One Meal One Hope
              </p>
              <h4 className="text-lg font-bold text-gray-900">
                Community Food Distribution
              </h4>
            </div>
          </div>

          {/* Content */}
          <div>
            <Quote className="mb-6 h-14 w-14 text-amber-500" />

            <h3 className="text-3xl font-bold text-gray-900">
              "A warm meal reminded us that someone still cared."
            </h3>

            <p className="mt-6 leading-8 text-gray-600">
              For weeks, this family struggled to find enough food. Rising
              costs, unemployment, and uncertainty made every day a challenge.
              When our volunteers arrived with freshly prepared meals, it wasn't
              just nourishment—it was reassurance that their community had not
              forgotten them.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Thousands of similar stories unfold every month through the
              <span className="font-semibold text-amber-600">
                {" "}
                One Meal One Hope
              </span>{" "}
              campaign. Every contribution, no matter how small, helps provide
              food, restore dignity, and inspire hope for families facing
              hunger.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-3xl font-black text-amber-600">50K+</h4>
                <p className="mt-2 text-sm text-gray-500">
                  Meals Distributed
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-black text-amber-600">2K+</h4>
                <p className="mt-2 text-sm text-gray-500">
                  Families Supported
                </p>
              </div>

              <div>
                <h4 className="text-3xl font-black text-amber-600">500+</h4>
                <p className="mt-2 text-sm text-gray-500">
                  Volunteers Joined
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/stories"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-8 py-4 font-semibold text-white transition hover:bg-amber-600"
              >
                Read More Stories
                <ArrowRight size={20} />
              </Link>

              <Link
                href="/donate"
                className="inline-flex items-center gap-2 rounded-xl border border-amber-500 px-8 py-4 font-semibold text-amber-600 transition hover:bg-amber-50"
              >
                <Heart size={18} />
                Donate a Meal
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mx-auto mt-20 max-w-4xl text-center">
          <p className="text-2xl font-semibold italic leading-relaxed text-gray-700">
            "Hope begins with kindness. Kindness begins with a meal.
            Together, we can ensure that no one goes to bed hungry."
          </p>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Heart,
  Users,
  UtensilsCrossed,
  Quote,
  Clock3,
} from "lucide-react";
import { motion } from "framer-motion";

export interface StoryCardProps {
  title: string;
  excerpt: string;
  image: string;
  location: string;
  date: string;
  slug: string;
  category?: string;
  peopleHelped?: number;
  mealsServed?: number;
  readTime?: string;
  featured?: boolean;
}

export default function StoryCard({
  title,
  excerpt,
  image,
  location,
  date,
  slug,
  category = "Hope Story",
  peopleHelped = 125,
  mealsServed = 560,
  readTime = "5 min read",
  featured = false,
}: StoryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      whileHover={{ y: -12 }}
      className={`group relative overflow-hidden rounded-[32px] border bg-white transition-all duration-500 hover:shadow-2xl ${
        featured
          ? "border-amber-500 ring-2 ring-amber-100"
          : "border-gray-200"
      }`}
    >
      {/* Decorative Background */}
      <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-orange-200/20 blur-3xl" />

      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          priority={featured}
          className="object-cover transition duration-700 group-hover:scale-110"
          sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

        {/* Category */}
        <div className="absolute left-6 top-6">
          <span className="rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
            {category}
          </span>
        </div>

        {/* Featured */}
        {featured && (
          <div className="absolute right-6 top-6 rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-wider text-amber-600 shadow-xl">
            Featured
          </div>
        )}

        {/* Bottom Info */}
        <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-5 text-sm text-white">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
            <CalendarDays size={16} />
            {date}
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
            <MapPin size={16} />
            {location}
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md">
            <Clock3 size={16} />
            {readTime}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        <h3 className="text-3xl font-black leading-tight text-gray-900 transition group-hover:text-amber-600">
          {title}
        </h3>

        <div className="mt-6 flex items-start gap-3 rounded-2xl border-l-4 border-amber-500 bg-amber-50 p-5">
          <Quote
            size={26}
            className="mt-1 shrink-0 text-amber-500"
          />

          <p className="leading-8 text-gray-700">
            {excerpt}
          </p>
        </div>

        {/* Impact */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <div className="rounded-2xl bg-gray-50 p-5 text-center transition group-hover:bg-amber-50">
            <UtensilsCrossed className="mx-auto mb-3 h-9 w-9 text-amber-600" />

            <h4 className="text-3xl font-black text-gray-900">
              {mealsServed.toLocaleString()}+
            </h4>

            <p className="mt-1 text-sm text-gray-500">
              Meals Served
            </p>
          </div>

          <div className="rounded-2xl bg-gray-50 p-5 text-center transition group-hover:bg-orange-50">
            <Users className="mx-auto mb-3 h-9 w-9 text-orange-600" />

            <h4 className="text-3xl font-black text-gray-900">
              {peopleHelped.toLocaleString()}+
            </h4>

            <p className="mt-1 text-sm text-gray-500">
              Lives Impacted
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-500 p-6 text-white shadow-lg">
          <Heart className="mb-4 h-8 w-8 fill-white" />

          <p className="text-lg font-medium leading-8 italic">
            "A warm meal does more than satisfy hunger—it restores dignity,
            renews hope, and reminds people they are not alone."
          </p>
        </div>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-between">
          <Link
            href={`/stories/${slug}`}
            className="group/button inline-flex items-center gap-3 rounded-full bg-gray-900 px-7 py-4 font-bold text-white transition hover:bg-amber-600"
          >
            Read Full Story

            <ArrowRight
              size={20}
              className="transition group-hover/button:translate-x-2"
            />
          </Link>

          <button
            type="button"
            aria-label="Like story"
            className="rounded-full bg-red-50 p-4 transition hover:bg-red-100"
          >
            <Heart className="h-6 w-6 text-red-500 hover:fill-red-500" />
          </button>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-2 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
    </motion.article>
  );
}
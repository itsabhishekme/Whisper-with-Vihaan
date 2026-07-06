"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  ExternalLink,
  BookMarked,
  Star,
  Clock3,
  Tag,
} from "lucide-react";
import { motion } from "framer-motion";

export interface MagazineCardProps {
  title: string;
  subtitle?: string;
  volume: string;
  published: string;
  image: string;
  description: string;
  amazonLink: string;
  slug?: string;
  pages?: number;
  readingTime?: string;
  category?: string;
  featured?: boolean;
}

export default function MagazineCard({
  title,
  subtitle,
  volume,
  published,
  image,
  description,
  amazonLink,
  slug = "",
  pages = 120,
  readingTime = "3 Hours",
  category = "Magazine",
  featured = false,
}: MagazineCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -10 }}
      className={`group overflow-hidden rounded-[36px] border bg-white shadow-xl transition-all duration-500 hover:shadow-2xl ${
        featured
          ? "border-amber-500 ring-2 ring-amber-200"
          : "border-gray-200"
      }`}
    >
      {/* Cover */}
      <div className="relative h-[520px] overflow-hidden bg-gradient-to-br from-amber-100 via-orange-50 to-white">
        <Image
          src={image}
          alt={title}
          fill
          priority={featured}
          className="object-contain p-8 transition duration-700 group-hover:scale-105"
        />

        <div className="absolute left-6 top-6">
          <span className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
            {volume}
          </span>
        </div>

        <div className="absolute right-6 top-6">
          <span className="rounded-full bg-white px-4 py-2 text-xs font-bold text-amber-600 shadow-lg">
            {category}
          </span>
        </div>

        {featured && (
          <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-5 py-2 font-semibold text-amber-600 shadow-lg">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            Editor's Choice
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="mb-5 flex flex-wrap gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-amber-500" />
            {published}
          </div>

          <div className="flex items-center gap-2">
            <BookMarked size={16} className="text-amber-500" />
            {pages} Pages
          </div>

          <div className="flex items-center gap-2">
            <Clock3 size={16} className="text-amber-500" />
            {readingTime}
          </div>
        </div>

        <h2 className="text-3xl font-black leading-tight text-gray-900 transition group-hover:text-amber-600">
          {title}
        </h2>

        {subtitle && (
          <p className="mt-3 text-lg font-semibold text-amber-600">
            {subtitle}
          </p>
        )}

        <p className="mt-6 leading-8 text-gray-600">
          {description}
        </p>

        {/* Highlights */}
        <div className="mt-8 rounded-3xl bg-amber-50 p-6">
          <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
            <Tag className="h-5 w-5 text-amber-600" />
            Inside this Edition
          </h3>

          <ul className="space-y-3 text-gray-700">
            <li>• Hunger & Humanity</li>
            <li>• Inspiring Human Stories</li>
            <li>• Food Culture & Heritage</li>
            <li>• Community Voices</li>
            <li>• Documentary Essays</li>
          </ul>
        </div>

        {/* Quote */}
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-gray-900 to-black p-6 text-white">
          <BookOpen className="mb-4 h-8 w-8 text-amber-400" />

          <p className="text-lg italic leading-8">
            "Every page is a whisper of hope, resilience, compassion,
            and humanity waiting to be discovered."
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href={amazonLink}
            target="_blank"
            className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 font-bold text-white shadow-lg transition hover:scale-105"
          >
            Buy on Amazon

            <ExternalLink size={18} />
          </Link>

          {slug && (
            <Link
              href={`/magazine/${slug}`}
              className="flex items-center gap-3 rounded-2xl border border-gray-300 px-8 py-4 font-semibold transition hover:border-amber-500 hover:text-amber-600"
            >
              Read Preview

              <ArrowRight size={18} />
            </Link>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 border-t pt-6">
          <p className="text-sm text-gray-500">
            Published by{" "}
            <span className="font-semibold text-gray-800">
              Whisper with Vihaan
            </span>{" "}
            • Documentary Storytelling • Humanitarian Journalism • Social Impact
          </p>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
    </motion.article>
  );
}
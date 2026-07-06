"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export interface StoryCardProps {
  title: string;
  excerpt: string;
  image: string;
  location: string;
  date: string;
  slug: string;
  category?: string;
}

export default function StoryCard({
  title,
  excerpt,
  image,
  location,
  date,
  slug,
  category = "Hope Story",
}: StoryCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />

        <div className="absolute left-5 top-5 rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
          {category}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <CalendarDays size={16} className="text-amber-500" />
            {date}
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-amber-500" />
            {location}
          </div>
        </div>

        <h3 className="line-clamp-2 text-2xl font-bold text-gray-900 transition-colors group-hover:text-amber-600">
          {title}
        </h3>

        <p className="line-clamp-3 leading-7 text-gray-600">
          {excerpt}
        </p>

        <Link
          href={`/stories/${slug}`}
          className="inline-flex items-center gap-2 font-semibold text-amber-600 transition hover:gap-3"
        >
          Read Story
          <ArrowRight size={18} />
        </Link>
      </div>
    </motion.article>
  );
}
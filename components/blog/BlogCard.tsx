"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  User,
  BookOpen,
  Heart,
  Share2,
  Bookmark,
} from "lucide-react";

export interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export default function BlogCard({
  title,
  excerpt,
  slug,
  image,
  category,
  author,
  date,
  readTime,
}: BlogCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-[32px] border border-gray-200 bg-white transition-all duration-700 hover:-translate-y-3 hover:border-amber-200 hover:shadow-2xl">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-amber-50 opacity-0 transition duration-700 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Category */}
        <div className="absolute left-6 top-6">
          <span className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow-xl">
            {category}
          </span>
        </div>

        {/* Floating Buttons */}
        <div className="absolute right-5 top-5 flex gap-2 opacity-0 transition duration-500 group-hover:opacity-100">
          <button
            type="button"
            aria-label="Save post"
            className="rounded-full bg-white/90 p-3 text-gray-700 backdrop-blur hover:bg-amber-500 hover:text-white"
          >
            <Bookmark size={18} />
          </button>

          <button
            type="button"
            aria-label="Share post"
            className="rounded-full bg-white/90 p-3 text-gray-700 backdrop-blur hover:bg-amber-500 hover:text-white"
          >
            <Share2 size={18} />
          </button>
        </div>

        {/* Reading Time */}
        <div className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-800 backdrop-blur">
          <Clock size={15} />
          {readTime}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 p-8">
        {/* Meta */}
        <div className="mb-6 flex flex-wrap items-center gap-5 text-sm text-gray-500">
          <span className="flex items-center gap-2">
            <User size={16} className="text-amber-500" />
            {author}
          </span>

          <span className="flex items-center gap-2">
            <CalendarDays
              size={16}
              className="text-amber-500"
            />
            {date}
          </span>

          <span className="flex items-center gap-2">
            <BookOpen
              size={16}
              className="text-amber-500"
            />
            {readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-extrabold leading-tight text-gray-900 transition duration-300 group-hover:text-amber-600">
          {title}
        </h3>

        {/* Divider */}
        <div className="my-6 h-1 w-20 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 group-hover:w-40" />

        {/* Excerpt */}
        <p className="leading-8 text-gray-600">
          {excerpt}
        </p>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between">
          {/* Likes */}
          <div className="flex items-center gap-2 text-gray-500">
            <Heart
              size={18}
              className="fill-red-500 text-red-500"
            />

            <span className="text-sm font-medium">
              Inspire Change
            </span>
          </div>

          {/* Button */}
          <Link
            href={`/blog/${slug}`}
            className="group/button inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Read Story

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover/button:translate-x-2"
            />
          </Link>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 opacity-0 transition duration-500 group-hover:opacity-100" />
    </article>
  );
}
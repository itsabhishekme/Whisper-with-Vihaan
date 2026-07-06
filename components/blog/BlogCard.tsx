import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, User } from "lucide-react";

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
    <article className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <div className="absolute left-5 top-5 rounded-full bg-amber-500 px-4 py-1 text-sm font-semibold text-white shadow-lg">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <User size={16} />
            {author}
          </span>

          <span className="flex items-center gap-1">
            <CalendarDays size={16} />
            {date}
          </span>

          <span className="flex items-center gap-1">
            <Clock size={16} />
            {readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-amber-600">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="leading-7 text-gray-600">{excerpt}</p>

        {/* Read More */}
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center gap-2 font-semibold text-amber-600 transition-all duration-300 hover:gap-4"
        >
          Read Article
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}
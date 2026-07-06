"use client";

import { Heart, ArrowRight } from "lucide-react";

type DonateCardProps = {
  title: string;
  amount: string;
  description: string;
  impact: string;
  featured?: boolean;
  buttonText?: string;
};

export default function DonateCard({
  title,
  amount,
  description,
  impact,
  featured = false,
  buttonText = "Donate Now",
}: DonateCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
        featured
          ? "border-amber-500 ring-2 ring-amber-100"
          : "border-gray-200"
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute right-5 top-5 rounded-full bg-amber-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
          Most Needed
        </div>
      )}

      {/* Icon */}
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:scale-110">
        <Heart className="h-8 w-8 fill-current" />
      </div>

      {/* Title */}
      <h3 className="text-2xl font-bold text-gray-900">{title}</h3>

      {/* Amount */}
      <p className="mt-3 text-4xl font-extrabold text-amber-600">{amount}</p>

      {/* Description */}
      <p className="mt-5 leading-7 text-gray-600">{description}</p>

      {/* Impact */}
      <div className="mt-6 rounded-2xl bg-amber-50 p-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-700">
          Your Impact
        </p>

        <p className="mt-2 text-gray-700">{impact}</p>
      </div>

      {/* Divider */}
      <div className="my-8 h-px bg-gray-200" />

      {/* CTA */}
      <button
        type="button"
        className="flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 px-6 py-4 text-lg font-semibold text-white transition hover:bg-amber-600 active:scale-95"
      >
        {buttonText}
        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
      </button>
    </article>
  );
}
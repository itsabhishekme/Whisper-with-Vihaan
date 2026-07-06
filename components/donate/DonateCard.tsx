"use client";

import { Heart, ArrowRight, Users, UtensilsCrossed, ShieldCheck, Sparkles } from "lucide-react";

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
    <section className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-white via-amber-50 to-orange-50 p-10 shadow-2xl">
      {/* Decorative Background */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-orange-400/20 blur-3xl" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-2 lg:items-center">
        {/* Left Side */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-5 py-2 text-sm font-bold text-amber-700">
            <Sparkles size={18} />
            One Meal One Hope
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-gray-900">
            Feed a Life.
            <br />
            Inspire Hope.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hunger is more than the absence of food—it is the absence of
            opportunity, health, and dignity. Your support helps provide
            nutritious meals, empowers vulnerable families, and creates lasting
            change in communities across India.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <UtensilsCrossed className="mb-3 h-10 w-10 text-amber-600" />

              <h4 className="font-bold text-gray-900">
                Fresh Meals
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Every contribution provides healthy meals to children,
                families, and elderly people facing food insecurity.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <Users className="mb-3 h-10 w-10 text-orange-600" />

              <h4 className="font-bold text-gray-900">
                Community Support
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Empowering local volunteers and organizations to reach every
                community with compassion.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <ShieldCheck className="mb-3 h-10 w-10 text-green-600" />

              <h4 className="font-bold text-gray-900">
                Transparent Giving
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                Every donation is directed toward food distribution and
                community welfare initiatives.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-5 shadow-lg">
              <Heart className="mb-3 h-10 w-10 fill-red-500 text-red-500" />

              <h4 className="font-bold text-gray-900">
                Lasting Impact
              </h4>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                One act of kindness can restore hope and transform lives for
                generations.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side Donation Card */}
        <article
          className={`relative overflow-hidden rounded-[32px] border bg-white p-10 shadow-2xl transition duration-500 hover:-translate-y-2 ${
            featured
              ? "border-amber-500 ring-4 ring-amber-100"
              : "border-gray-200"
          }`}
        >
          {featured && (
            <div className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white shadow-lg">
              ⭐ Most Needed
            </div>
          )}

          <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 shadow-xl">
            <Heart className="h-10 w-10 fill-white text-white" />
          </div>

          <h3 className="text-3xl font-black text-gray-900">
            {title}
          </h3>

          <p className="mt-4 text-6xl font-black text-amber-600">
            ₹{amount}
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {description}
          </p>

          <div className="mt-8 rounded-3xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-6">
            <p className="text-sm font-bold uppercase tracking-widest text-amber-700">
              Your Contribution
            </p>

            <p className="mt-3 leading-7 text-gray-700">
              {impact}
            </p>
          </div>

          {/* Statistics */}
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <div className="rounded-2xl bg-gray-50 p-4">
              <h4 className="text-2xl font-black text-amber-600">
                1
              </h4>

              <p className="mt-1 text-xs uppercase text-gray-500">
                Meal
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <h4 className="text-2xl font-black text-orange-600">
                100%
              </h4>

              <p className="mt-1 text-xs uppercase text-gray-500">
                Hope
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <h4 className="text-2xl font-black text-green-600">
                ❤️
              </h4>

              <p className="mt-1 text-xs uppercase text-gray-500">
                Impact
              </p>
            </div>
          </div>

          {/* CTA */}
          <button
            type="button"
            className="group mt-10 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-5 text-lg font-bold text-white shadow-xl transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
          >
            <Heart className="h-5 w-5 fill-white" />

            {buttonText}

            <ArrowRight className="h-5 w-5 transition group-hover:translate-x-2" />
          </button>

          <p className="mt-6 text-center text-sm text-gray-500">
            Secure • Transparent • Tax Benefit Eligible*
          </p>
        </article>
      </div>
    </section>
  );
}
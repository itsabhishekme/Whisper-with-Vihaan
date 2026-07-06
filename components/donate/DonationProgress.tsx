"use client";

import { useEffect, useState } from "react";

interface DonationProgressProps {
  goal?: number;
  raised?: number;
  donors?: number;
  mealsServed?: number;
}

export default function DonationProgress({
  goal = 1000000,
  raised = 642350,
  donors = 1847,
  mealsServed = 32118,
}: DonationProgressProps) {
  const [progress, setProgress] = useState(0);

  const percentage = Math.min((raised / goal) * 100, 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(percentage);
    }, 300);

    return () => clearTimeout(timer);
  }, [percentage]);

  const currency = (value: number) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(value);

  return (
    <section className="w-full rounded-3xl border border-gray-200 bg-white p-8 shadow-lg">
      <div className="mb-8">
        <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
          Donation Progress
        </span>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Together We Can End Hunger
        </h2>

        <p className="mt-3 max-w-2xl text-gray-600">
          Every contribution helps provide nutritious meals to children,
          families, and vulnerable communities. Your generosity creates hope,
          dignity, and a better tomorrow.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-6">
        <div className="mb-3 flex items-center justify-between">
          <span className="font-semibold text-gray-700">Campaign Progress</span>

          <span className="font-bold text-amber-600">
            {percentage.toFixed(1)}%
          </span>
        </div>

        <div className="h-5 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 transition-all duration-1000 ease-out"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      {/* Amounts */}
      <div className="mb-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-green-50 p-6">
          <p className="text-sm font-medium uppercase tracking-wide text-green-700">
            Raised
          </p>

          <h3 className="mt-2 text-3xl font-bold text-green-800">
            {currency(raised)}
          </h3>
        </div>

        <div className="rounded-2xl bg-blue-50 p-6">
          <p className="text-sm font-medium uppercase tracking-wide text-blue-700">
            Goal
          </p>

          <h3 className="mt-2 text-3xl font-bold text-blue-800">
            {currency(goal)}
          </h3>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border bg-gray-50 p-6 text-center">
          <h4 className="text-4xl font-extrabold text-amber-600">
            {donors.toLocaleString()}
          </h4>

          <p className="mt-2 text-gray-600">Generous Donors</p>
        </div>

        <div className="rounded-2xl border bg-gray-50 p-6 text-center">
          <h4 className="text-4xl font-extrabold text-green-600">
            {mealsServed.toLocaleString()}
          </h4>

          <p className="mt-2 text-gray-600">Meals Served</p>
        </div>

        <div className="rounded-2xl border bg-gray-50 p-6 text-center">
          <h4 className="text-4xl font-extrabold text-red-600">
            {(goal - raised > 0
              ? goal - raised
              : 0
            ).toLocaleString("en-IN")}
          </h4>

          <p className="mt-2 text-gray-600">
            Remaining to Reach Goal (₹)
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 rounded-3xl bg-gradient-to-r from-amber-500 to-orange-600 p-8 text-center text-white">
        <h3 className="text-3xl font-bold">
          Every Meal Matters
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-amber-100">
          Your donation is more than financial support—it is nourishment, hope,
          and dignity for someone facing hunger. Together, we can ensure that no
          one sleeps hungry.
        </p>

        <button className="mt-8 rounded-xl bg-white px-8 py-4 text-lg font-semibold text-orange-600 transition hover:scale-105 hover:shadow-xl">
          Donate Now
        </button>
      </div>
    </section>
  );
}
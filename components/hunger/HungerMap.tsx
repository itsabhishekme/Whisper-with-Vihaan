"use client";

import {
  Globe2,
  MapPinned,
  Users,
  Wheat,
  AlertTriangle,
  HeartHandshake,
} from "lucide-react";

const hungerStats = [
  {
    icon: Users,
    value: "735M+",
    title: "People Facing Hunger",
    description:
      "Millions of people around the world continue to experience chronic hunger and food insecurity.",
  },
  {
    icon: Wheat,
    value: "2.4B+",
    title: "Food Insecurity",
    description:
      "Billions struggle to access safe, nutritious, and sufficient food throughout the year.",
  },
  {
    icon: AlertTriangle,
    value: "45M+",
    title: "Children at Risk",
    description:
      "Children remain among the most vulnerable to malnutrition and its lifelong effects.",
  },
  {
    icon: HeartHandshake,
    value: "1 Meal",
    title: "Can Change a Life",
    description:
      "A single nutritious meal offers hope, dignity, and the strength to face another day.",
  },
];

const regions = [
  {
    region: "Sub-Saharan Africa",
    status: "Very High",
    color: "bg-red-500",
  },
  {
    region: "South Asia",
    status: "High",
    color: "bg-orange-500",
  },
  {
    region: "Middle East",
    status: "Moderate",
    color: "bg-yellow-500",
  },
  {
    region: "Latin America",
    status: "Growing Concern",
    color: "bg-amber-500",
  },
  {
    region: "Europe",
    status: "Localized",
    color: "bg-green-500",
  },
  {
    region: "North America",
    status: "Food Insecurity Exists",
    color: "bg-blue-500",
  },
];

export default function HungerMap() {
  return (
    <section className="bg-gradient-to-b from-white via-orange-50 to-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
            Global Hunger Overview
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Hunger Has No Borders
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Hunger is a global challenge affecting millions of families every
            day. Every community deserves access to nutritious food, dignity,
            and hope.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Map Placeholder */}
          <div className="rounded-3xl border border-orange-100 bg-white p-8 shadow-xl">
            <div className="flex h-[500px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 text-center">
              <Globe2 className="mb-6 h-28 w-28 text-orange-500" />

              <h3 className="text-3xl font-bold text-gray-900">
                Interactive Hunger Map
              </h3>

              <p className="mt-5 max-w-md leading-7 text-gray-600">
                This section can later be connected to an interactive world map
                displaying hunger levels, campaign locations, food distribution
                centers, and impact statistics.
              </p>

              <div className="mt-10 flex items-center gap-3 rounded-full bg-orange-100 px-6 py-3">
                <MapPinned className="text-orange-600" />
                <span className="font-semibold text-orange-700">
                  Future GIS Integration
                </span>
              </div>
            </div>
          </div>

          {/* Regions */}
          <div>
            <h3 className="mb-8 text-3xl font-bold text-gray-900">
              Regional Hunger Overview
            </h3>

            <div className="space-y-5">
              {regions.map((item) => (
                <div
                  key={item.region}
                  className="flex items-center justify-between rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`h-4 w-4 rounded-full ${item.color}`}
                    ></span>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {item.region}
                      </h4>

                      <p className="text-sm text-gray-500">
                        Hunger Severity
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {hungerStats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-3xl border border-orange-100 bg-white p-8 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-orange-100 p-4">
                  <Icon className="h-8 w-8 text-orange-600" />
                </div>

                <h3 className="text-4xl font-extrabold text-gray-900">
                  {stat.value}
                </h3>

                <h4 className="mt-3 text-xl font-bold text-gray-800">
                  {stat.title}
                </h4>

                <p className="mt-4 leading-7 text-gray-600">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Quote */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 px-8 py-16 text-center text-white shadow-xl">
          <h3 className="text-3xl font-extrabold md:text-4xl">
            One Meal Can Restore Hope
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-50">
            Hunger is more than the absence of food—it is the absence of
            opportunity, health, and dignity. Together, through the{" "}
            <strong>One Meal One Hope</strong> campaign, we can transform
            compassion into action and ensure that no one is left behind.
          </p>
        </div>
      </div>
    </section>
  );
}
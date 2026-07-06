"use client";

import { useState } from "react";
import { BookOpen, Newspaper, Heart, Globe, Camera, Users, UtensilsCrossed } from "lucide-react";

const categories = [
  {
    id: "all",
    name: "All",
    icon: BookOpen,
  },
  {
    id: "featured",
    name: "Featured",
    icon: Newspaper,
  },
  {
    id: "hunger",
    name: "Hunger",
    icon: UtensilsCrossed,
  },
  {
    id: "hope",
    name: "Hope Stories",
    icon: Heart,
  },
  {
    id: "community",
    name: "Community",
    icon: Users,
  },
  {
    id: "culture",
    name: "Culture",
    icon: Globe,
  },
  {
    id: "photo",
    name: "Photo Essays",
    icon: Camera,
  },
];

interface CategoryFilterProps {
  onCategoryChange?: (category: string) => void;
}

export default function CategoryFilter({
  onCategoryChange,
}: CategoryFilterProps) {
  const [active, setActive] = useState("all");

  const handleCategory = (id: string) => {
    setActive(id);

    if (onCategoryChange) {
      onCategoryChange(id);
    }
  };

  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
            Explore Categories
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900">
            Browse Our Magazine
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-600">
            Explore inspiring stories, humanitarian journalism, documentary
            features, food traditions, and voices that create lasting impact.
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden flex-wrap justify-center gap-5 lg:flex">
          {categories.map((category) => {
            const Icon = category.icon;

            const isActive = active === category.id;

            return (
              <button
                key={category.id}
                onClick={() => handleCategory(category.id)}
                className={`group flex items-center gap-3 rounded-full border px-6 py-4 text-base font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-amber-500 bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xl"
                    : "border-gray-200 bg-white text-gray-700 hover:border-amber-400 hover:bg-amber-50"
                }`}
              >
                <Icon
                  size={20}
                  className={`transition ${
                    isActive
                      ? "text-white"
                      : "text-amber-600 group-hover:scale-110"
                  }`}
                />

                {category.name}
              </button>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="overflow-x-auto lg:hidden">
          <div className="flex gap-4 pb-4">
            {categories.map((category) => {
              const Icon = category.icon;

              const isActive = active === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => handleCategory(category.id)}
                  className={`flex shrink-0 items-center gap-3 rounded-full border px-5 py-3 font-medium transition ${
                    isActive
                      ? "border-amber-500 bg-amber-500 text-white"
                      : "border-gray-200 bg-white text-gray-700"
                  }`}
                >
                  <Icon size={18} />

                  {category.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <BookOpen className="mx-auto mb-4 h-10 w-10 text-amber-500" />

            <h3 className="text-4xl font-black text-gray-900">
              30+
            </h3>

            <p className="mt-2 text-gray-600">
              Inspiring Articles
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <Heart className="mx-auto mb-4 h-10 w-10 text-red-500 fill-red-500" />

            <h3 className="text-4xl font-black text-gray-900">
              15+
            </h3>

            <p className="mt-2 text-gray-600">
              Hope Stories
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <Camera className="mx-auto mb-4 h-10 w-10 text-orange-500" />

            <h3 className="text-4xl font-black text-gray-900">
              120+
            </h3>

            <p className="mt-2 text-gray-600">
              Documentary Photos
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-lg">
            <Users className="mx-auto mb-4 h-10 w-10 text-green-600" />

            <h3 className="text-4xl font-black text-gray-900">
              5K+
            </h3>

            <p className="mt-2 text-gray-600">
              Readers Worldwide
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
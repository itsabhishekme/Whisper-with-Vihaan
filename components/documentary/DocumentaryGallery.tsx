"use client";

import Image from "next/image";

const gallery = [
  {
    id: 1,
    image: "/images/documentary/gallery-1.jpg",
    title: "The First Smile",
    description:
      "A simple meal restores hope and reminds us that compassion begins with small acts.",
  },
  {
    id: 2,
    image: "/images/documentary/gallery-2.jpg",
    title: "Hands That Serve",
    description:
      "Dedicated volunteers preparing and distributing meals to families in need.",
  },
  {
    id: 3,
    image: "/images/documentary/gallery-3.jpg",
    title: "Faces of Hope",
    description:
      "Every face tells a story of resilience, courage, and the dream of a better tomorrow.",
  },
  {
    id: 4,
    image: "/images/documentary/gallery-4.jpg",
    title: "Community Kitchen",
    description:
      "Community kitchens become places where kindness is shared with every meal served.",
  },
  {
    id: 5,
    image: "/images/documentary/gallery-5.jpg",
    title: "Together We Care",
    description:
      "Students, professionals, and citizens joining together to fight hunger.",
  },
  {
    id: 6,
    image: "/images/documentary/gallery-6.jpg",
    title: "A New Beginning",
    description:
      "Every plate served represents a fresh opportunity to build a healthier future.",
  },
];

export default function DocumentaryGallery() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-amber-700">
            Documentary Gallery
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Moments That Speak Without Words
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every photograph captures more than an image—it captures dignity,
            resilience, compassion, and the collective effort to ensure that no
            one sleeps hungry.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {gallery.map((item) => (
            <article
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 p-6">
                <p className="leading-7 text-gray-600">
                  {item.description}
                </p>

                <button className="rounded-xl bg-amber-500 px-5 py-3 font-semibold text-white transition hover:bg-amber-600">
                  View Story
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className="mt-24 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 px-8 py-16 text-center text-white">
          <h3 className="text-3xl font-bold md:text-4xl">
            Every Photograph Holds a Story.
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90">
            Behind every image is a family, a volunteer, a shared meal, and a
            moment that reminds us humanity grows stronger when we care for one
            another. Through storytelling and action, we continue building hope,
            one meal at a time.
          </p>
        </div>
      </div>
    </section>
  );
}
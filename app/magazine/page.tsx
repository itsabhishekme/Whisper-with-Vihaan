import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Calendar, ExternalLink } from "lucide-react";

const magazines = [
  {
    volume: "Vol. 01",
    month: "September 2025",
    title: "Whispers with Vihaan",
    image: "/images/magazine/volume-1.jpg",
    link: "https://www.amazon.in/dp/B0FPC8D5C6",
    description:
      "In this inaugural issue, Whispers with Vihaan takes readers on a journey where silence speaks louder than noise and the smallest voices reveal the deepest truths.",
    highlights: [
      "When hunger meets hope",
      "Forgotten recipes revived",
      "Failures that teach",
      "Food, love & dignity",
      "Stories of humanity",
    ],
  },
  {
    volume: "Vol. 02",
    month: "2025",
    title: "Hunger, Hope & Humanity",
    image: "/images/magazine/volume-2.jpg",
    link: "https://www.amazon.in/dp/B0FTBJ8KR5",
    description:
      "A powerful exploration of hunger beyond the plate, everyday heroes, forgotten recipes, community kitchens, and sustainable futures.",
    highlights: [
      "Hunger beyond the plate",
      "Seeds of hope",
      "Humanity in action",
      "Community kitchens",
      "The road ahead",
    ],
  },
  {
    volume: "Vol. 03",
    month: "2026",
    title: "Threads of Belonging",
    image: "/images/magazine/volume-3.jpg",
    link: "https://www.amazon.in/dp/B0FYP3GZ1Q",
    description:
      "A lyrical journey through identity, migration, belonging, hunger, culture, resilience, and the communities that weave humanity together.",
    highlights: [
      "Roots & Routes",
      "Empty Plates, Empty Promises",
      "Weaving Cultures",
      "The Fabric of Togetherness",
      "Hope through belonging",
    ],
  },
];

export default function MagazinePage() {
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-amber-950 py-32 text-white">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,#f59e0b,transparent_60%)]" />

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
            Whispers with Vihaan Magazine
          </span>

          <h1 className="mt-8 text-5xl font-black md:text-7xl">
            Stories That Feed
            <br />
            Hearts & Humanity
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            Discover a collection of documentary-inspired magazines exploring
            hunger, hope, culture, resilience, belonging, and the quiet voices
            that shape our shared humanity.
          </p>
        </div>
      </section>

      {/* Magazine Grid */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12">
          {magazines.map((book) => (
            <article
              key={book.volume}
              className="overflow-hidden rounded-3xl bg-white shadow-xl"
            >
              <div className="grid lg:grid-cols-2">
                {/* Cover */}
                <div className="relative flex min-h-[500px] items-center justify-center bg-gradient-to-br from-amber-100 to-orange-100 p-10">
                  <Image
                    src={book.image}
                    alt={book.title}
                    width={420}
                    height={620}
                    className="rounded-2xl shadow-2xl"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-10 lg:p-16">
                  <div className="flex flex-wrap gap-3">
                    <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
                      {book.volume}
                    </span>

                    <span className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm">
                      <Calendar size={16} />
                      {book.month}
                    </span>
                  </div>

                  <h2 className="mt-8 text-4xl font-black">
                    {book.title}
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    {book.description}
                  </p>

                  <div className="mt-8">
                    <h3 className="mb-4 flex items-center gap-2 text-xl font-bold">
                      <BookOpen size={22} />
                      Inside this Volume
                    </h3>

                    <ul className="space-y-3">
                      {book.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-3 text-gray-700"
                        >
                          <div className="h-2 w-2 rounded-full bg-amber-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-5">
                    <Link
                      href={book.link}
                      target="_blank"
                      className="inline-flex items-center gap-3 rounded-2xl bg-amber-500 px-8 py-4 font-bold text-white transition hover:bg-amber-600"
                    >
                      Buy on Amazon
                      <ExternalLink size={18} />
                    </Link>

                    <button className="inline-flex items-center gap-3 rounded-2xl border border-gray-300 px-8 py-4 font-semibold transition hover:border-amber-500 hover:text-amber-600">
                      Read Preview
                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-950 py-28 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-400">
            Read • Reflect • Act
          </span>

          <h2 className="mt-8 text-5xl font-black">
            Every Story Has the
            <br />
            Power to Change a Life
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            Whispers with Vihaan is more than a magazine—it is a movement of
            storytelling that inspires compassion, raises awareness, and invites
            readers to become part of a more humane world.
          </p>

          <Link
            href="/donate"
            className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-amber-500 px-10 py-5 text-lg font-bold text-white transition hover:bg-amber-600"
          >
            Support Our Mission
            <ArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}
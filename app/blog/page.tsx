import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore stories, research, campaign updates, volunteer experiences, and insights from Whisper with Vihaan and the One Meal One Hope initiative.",
};

const featuredPost = {
  title: "One Meal Can Change More Than Hunger",
  category: "Featured Story",
  date: "July 2026",
  readTime: "6 min read",
  excerpt:
    "A warm meal is more than nourishment—it restores dignity, strengthens communities, and reminds people that they are not forgotten.",
};

const blogPosts = [
  {
    title: "The Hidden Faces of Hunger",
    category: "Awareness",
    readTime: "5 min read",
    description:
      "Understanding the realities of hunger beyond statistics and why compassion is the first step toward lasting change.",
  },
  {
    title: "Why Food Waste Matters",
    category: "Sustainability",
    readTime: "4 min read",
    description:
      "Millions of meals are wasted while families go hungry. Discover how reducing food waste can create meaningful impact.",
  },
  {
    title: "Stories From the Field",
    category: "Volunteer",
    readTime: "7 min read",
    description:
      "Volunteers share personal experiences from food distribution drives and community outreach programs.",
  },
  {
    title: "Building Community Kitchens",
    category: "Campaign",
    readTime: "6 min read",
    description:
      "Community kitchens provide more than meals—they create spaces of hope, dignity, and belonging.",
  },
  {
    title: "Children Deserve Better",
    category: "Education",
    readTime: "5 min read",
    description:
      "How proper nutrition supports education, health, and brighter futures for children.",
  },
  {
    title: "The Power of Collective Giving",
    category: "Impact",
    readTime: "4 min read",
    description:
      "Small contributions from many people can transform lives and build resilient communities.",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em]">
            Whisper with Vihaan
          </p>

          <h1 className="text-5xl font-extrabold md:text-6xl">
            Stories That Inspire Change
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100">
            Discover stories, research, campaign updates, and voices from people
            working together to ensure that no one goes to bed hungry.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto -mt-12 max-w-7xl px-6">
        <div className="rounded-3xl bg-white p-10 shadow-xl">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            {featuredPost.category}
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            {featuredPost.title}
          </h2>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-500">
            <span>{featuredPost.date}</span>
            <span>•</span>
            <span>{featuredPost.readTime}</span>
          </div>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            {featuredPost.excerpt}
          </p>

          <button className="mt-10 rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700">
            Read Article
          </button>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Latest Articles
          </h2>

          <p className="mt-4 text-gray-600">
            Stories, insights, and updates from the One Meal One Hope campaign.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                {post.category}
              </span>

              <h3 className="mt-5 text-2xl font-bold text-gray-900">
                {post.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {post.description}
              </p>

              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {post.readTime}
                </span>

                <button className="font-semibold text-amber-600 transition hover:text-amber-700">
                  Read →
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-amber-600 to-orange-500 px-8 py-16 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold">
            Stay Connected
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-orange-100">
            Receive inspiring stories, campaign updates, volunteer opportunities,
            and the latest news from Whisper with Vihaan.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-full px-6 py-4 text-gray-900 outline-none"
            />

            <button className="rounded-full bg-white px-8 py-4 font-semibold text-amber-700 transition hover:bg-gray-100">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Every Story Can Spark Hope
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Whether you donate, volunteer, or simply share these stories, your
            voice helps build a future where every person has access to at least
            one nutritious meal each day.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/donate"
              className="rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
            >
              Donate Now
            </Link>

            <Link
              href="/volunteers"
              className="rounded-full border border-amber-600 px-8 py-4 font-semibold text-amber-700 transition hover:bg-amber-600 hover:text-white"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
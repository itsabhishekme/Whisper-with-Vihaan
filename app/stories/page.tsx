import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Stories",
  description:
    "Read inspiring stories of resilience, compassion, volunteers, and communities transformed through the One Meal One Hope campaign.",
};

const featuredStory = {
  title: "One Meal, A New Beginning",
  location: "Bengaluru, India",
  category: "Featured Story",
  date: "July 2026",
  description:
    "A simple meal became the turning point for a family struggling with hunger. Through the kindness of volunteers and supporters, hope returned where uncertainty once existed.",
};

const stories = [
  {
    title: "A Mother's Hope",
    category: "Family",
    description:
      "Nutritious meals helped a mother focus on caring for her children instead of worrying about where the next meal would come from.",
  },
  {
    title: "The Volunteer Who Inspired a Community",
    category: "Volunteer",
    description:
      "One volunteer's commitment encouraged neighbors, students, and local businesses to join the mission against hunger.",
  },
  {
    title: "From Hunger to Opportunity",
    category: "Education",
    description:
      "Regular meals enabled children to attend school consistently, improving attendance and confidence.",
  },
  {
    title: "Serving with Compassion",
    category: "Community",
    description:
      "Local kitchens and volunteers worked together to provide meals while strengthening community connections.",
  },
  {
    title: "Festival of Giving",
    category: "Campaign",
    description:
      "During festive celebrations, thousands of meals were shared with families, reminding everyone that joy grows when it is shared.",
  },
  {
    title: "Together We Can",
    category: "Impact",
    description:
      "Every contribution—large or small—helped bring hope, dignity, and nourishment to people facing food insecurity.",
  },
];

export default function StoriesPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Stories of Hope
          </span>

          <h1 className="mt-6 text-5xl font-extrabold md:text-7xl">
            Every Meal Has a Story
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Behind every meal shared is a human story of resilience,
            compassion, dignity, and hope. These stories celebrate the lives
            touched by the <strong>One Meal One Hope</strong> initiative and the
            people who make this mission possible.
          </p>
        </div>
      </section>

      {/* Featured Story */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-xl">
          <div className="grid gap-10 p-10 md:grid-cols-2 md:p-16">
            <div className="flex items-center justify-center">
              <div className="flex h-72 w-full items-center justify-center rounded-2xl border-2 border-dashed border-white/40 bg-white/10">
                <span className="text-lg opacity-80">
                  Featured Story Image
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-sm uppercase tracking-widest">
                {featuredStory.category}
              </p>

              <h2 className="mt-4 text-4xl font-bold">
                {featuredStory.title}
              </h2>

              <p className="mt-2 text-white/80">
                {featuredStory.location} • {featuredStory.date}
              </p>

              <p className="mt-6 text-lg leading-8 text-white/90">
                {featuredStory.description}
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex w-fit rounded-full bg-white px-8 py-4 font-semibold text-amber-700 transition hover:bg-gray-100"
              >
                Share Your Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Story Grid */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold">
            Stories That Inspire Change
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            Every act of kindness creates a ripple of hope. Explore experiences
            from volunteers, families, communities, and supporters working
            together to end hunger.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-700">
                {story.category}
              </span>

              <h3 className="mt-6 text-2xl font-bold">{story.title}</h3>

              <p className="mt-4 leading-7 text-gray-600">
                {story.description}
              </p>

              <button className="mt-8 font-semibold text-amber-600 transition hover:text-amber-700">
                Read Story →
              </button>
            </article>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Every Story Begins With Compassion
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Hunger is not just about food—it affects health, education,
            opportunity, and dignity. Every meal shared creates another story of
            hope, reminding us that lasting change begins with simple acts of
            generosity.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">
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
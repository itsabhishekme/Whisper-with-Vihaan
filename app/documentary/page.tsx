import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentary Journey",
  description:
    "Explore the documentary journey of Whisper with Vihaan through stories of hunger, resilience, compassion, and hope. Discover how One Meal One Hope transforms lives one meal at a time.",
};
const journey = [
  {
    id: "01",
    title: "Hunger",
    subtitle: "The Silent Reality",
    description:
      "Millions of children, families, and elderly people face hunger every day. Empty plates, uncertain tomorrows, and limited access to nutritious food remain a harsh reality in many communities.",
  },
  {
    id: "02",
    title: "Hope",
    subtitle: "One Meal One Hope",
    description:
      "Every meal served is more than food—it is hope restored. Through the kindness of donors, volunteers, and partners, we provide nourishment, dignity, and the reassurance that no one is forgotten.",
  },
  {
    id: "03",
    title: "Action",
    subtitle: "Communities United",
    description:
      "Volunteers, local organizations, and compassionate individuals come together to prepare, distribute, and deliver meals where they are needed most. Small acts of kindness create meaningful change.",
  },
  {
    id: "04",
    title: "Impact",
    subtitle: "Changing Lives Together",
    description:
      "Each contribution creates lasting impact by improving health, supporting education, strengthening families, and building resilient communities where people can look toward the future with confidence.",
  },
  {
    id: "05",
    title: "Future",
    subtitle: "A World Without Hunger",
    description:
      "Our vision is a future where every individual has access to nutritious food, every child has the opportunity to grow and learn, and every community thrives without the burden of hunger.",
  },
];

export default function DocumentaryPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 via-white to-white">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
          <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold text-amber-700">
            Documentary Series
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Whisper with Vihaan
          </h1>

          <p className="mt-6 text-2xl font-semibold text-amber-600">
            The Documentary Journey
          </p>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            Stories have the power to change hearts before they change the
            world. Through documentary filmmaking, we reveal the human side of
            hunger, resilience, hope, and compassion—inviting every viewer to
            become part of the solution.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
            >
              Support the Mission
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

      {/* Journey Timeline */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            The Five Chapters of the Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every documentary chapter represents a stage of human experience,
            connecting personal stories with the larger mission of ending hunger
            through empathy, awareness, and collective action.
          </p>
        </div>

        <div className="space-y-10">
          {journey.map((chapter) => (
            <div
              key={chapter.id}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber-600 text-3xl font-bold text-white">
                  {chapter.id}
                </div>

                <div className="flex-1">
                  <h3 className="text-3xl font-bold">{chapter.title}</h3>

                  <p className="mt-2 text-lg font-medium text-amber-600">
                    {chapter.subtitle}
                  </p>

                  <p className="mt-6 leading-8 text-gray-600">
                    {chapter.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Documentary Vision */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-bold">
            Why Documentary Storytelling Matters
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Hunger is more than a statistic—it is a human story. Documentary
            filmmaking gives voice to those who are often unheard, revealing the
            dignity, resilience, and dreams behind every face. By sharing these
            stories, we inspire compassion, encourage meaningful conversations,
            and motivate action.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every frame, every interview, and every journey becomes a reminder
            that lasting change begins when people choose to care.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-r from-amber-600 to-orange-600 p-12 text-center text-white">
          <h2 className="text-4xl font-bold">
            One Meal. One Story. One Hope.
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-amber-100">
            Our documentary journey is more than filmmaking. It is a movement to
            awaken empathy, inspire generosity, and create a future where no one
            sleeps hungry. Every story shared has the power to become someone's
            reason to help.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/campaign"
              className="rounded-full bg-white px-8 py-4 font-semibold text-amber-700 transition hover:bg-amber-100"
            >
              Explore Campaign
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-amber-700"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
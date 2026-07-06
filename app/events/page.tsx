import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events | Whisper with Vihaan",
  description:
    "Explore upcoming campaigns, community events, food drives, volunteer programs, and awareness initiatives by Whisper with Vihaan – One Meal One Hope.",
};

const upcomingEvents = [
  {
    title: "One Meal One Hope Food Drive",
    date: "20 July 2026",
    location: "Bengaluru, Karnataka",
    category: "Food Distribution",
    description:
      "Join our volunteers in preparing and distributing nutritious meals to underserved communities.",
  },
  {
    title: "Community Kitchen Day",
    date: "03 August 2026",
    location: "Mysuru, Karnataka",
    category: "Community Service",
    description:
      "Support local kitchens by helping cook, pack, and serve meals to families in need.",
  },
  {
    title: "Youth Against Hunger Workshop",
    date: "15 August 2026",
    location: "Online + On-site",
    category: "Awareness",
    description:
      "Empowering young leaders with knowledge and practical ways to fight hunger in their communities.",
  },
];

const pastEvents = [
  {
    title: "Hope Meal Distribution",
    year: "2025",
    impact: "5,000+ Meals Served",
  },
  {
    title: "Winter Relief Campaign",
    year: "2025",
    impact: "700+ Families Supported",
  },
  {
    title: "School Nutrition Initiative",
    year: "2026",
    impact: "1,200+ Children Reached",
  },
];

export default function EventsPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-amber-50 py-24">
        <div className="container mx-auto max-w-7xl px-6 text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Community • Compassion • Action
          </span>

          <h1 className="mt-8 text-5xl font-extrabold tracking-tight md:text-6xl">
            Events & Campaigns
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every event brings people together with one shared purpose—to ensure
            that no one sleeps hungry. Join us in creating meaningful impact,
            one meal at a time.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">Upcoming Events</h2>
            <p className="mt-4 text-gray-600">
              Participate, volunteer, or support our upcoming initiatives.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-medium text-orange-700">
                  {event.category}
                </span>

                <h3 className="mt-6 text-2xl font-bold">{event.title}</h3>

                <div className="mt-5 space-y-2 text-sm text-gray-500">
                  <p>📅 {event.date}</p>
                  <p>📍 {event.location}</p>
                </div>

                <p className="mt-6 leading-7 text-gray-600">
                  {event.description}
                </p>

                <button className="mt-8 rounded-full bg-amber-600 px-6 py-3 font-semibold text-white transition hover:bg-amber-700">
                  Register
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Participate */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">
              Why Participate?
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-gray-600">
              Your presence creates real change. Whether you volunteer, donate,
              or simply spread awareness, every contribution helps us move
              closer to a hunger-free future.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Volunteer",
                text: "Help prepare, pack, and distribute meals with our dedicated teams.",
              },
              {
                title: "Donate",
                text: "Support food drives and emergency hunger relief campaigns.",
              },
              {
                title: "Advocate",
                text: "Raise awareness and inspire others to become part of the movement.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold">Past Impact</h2>

            <p className="mt-4 text-gray-600">
              Looking back at the milestones we've achieved together.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {pastEvents.map((event) => (
              <div
                key={event.title}
                className="rounded-3xl border border-gray-200 p-8 text-center"
              >
                <p className="text-5xl font-extrabold text-amber-600">
                  {event.year}
                </p>

                <h3 className="mt-5 text-2xl font-bold">
                  {event.title}
                </h3>

                <p className="mt-4 text-gray-600">
                  {event.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-600 py-24 text-white">
        <div className="container mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-4xl font-extrabold">
            Be Part of the Change
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
            Every volunteer, every donor, and every supporter helps bring hope
            to someone facing hunger. Together, we can build communities where
            compassion is stronger than hunger.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">
            <a
              href="/volunteers"
              className="rounded-full bg-white px-8 py-4 font-semibold text-amber-700 transition hover:bg-gray-100"
            >
              Become a Volunteer
            </a>

            <a
              href="/donate"
              className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-amber-700"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
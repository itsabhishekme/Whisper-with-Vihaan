import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Donate | One Meal One Hope",
  description:
    "Support One Meal One Hope by helping provide nutritious meals, emergency food relief, community kitchens, and hope to families facing hunger.",
};

const donationPlans = [
  {
    title: "Feed One Person",
    amount: "₹100",
    description:
      "Provide one nutritious meal to someone experiencing hunger.",
  },
  {
    title: "Support a Family",
    amount: "₹1,000",
    description:
      "Help a family receive meals and essential food supplies for several days.",
  },
  {
    title: "Community Kitchen",
    amount: "₹5,000",
    description:
      "Contribute to preparing and serving meals through community kitchens.",
  },
  {
    title: "Corporate Partnership",
    amount: "Custom",
    description:
      "Partner with us through CSR initiatives to create sustainable community impact.",
  },
];

const impactStats = [
  {
    value: "1 Meal",
    title: "Immediate Relief",
  },
  {
    value: "1 Family",
    title: "Hope Restored",
  },
  {
    value: "1 Community",
    title: "Lives Transformed",
  },
  {
    value: "∞",
    title: "Shared Compassion",
  },
];

export default function DonatePage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-white">
        <div className="mx-auto flex min-h-[70vh] max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
          <span className="rounded-full bg-amber-100 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-amber-700">
            Donate Today
          </span>

          <h1 className="mt-8 max-w-5xl text-5xl font-extrabold leading-tight md:text-7xl">
            Every Meal Begins
            <span className="block text-amber-600">With Your Kindness</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            Hunger steals dignity, opportunity, and hope. Your contribution
            helps provide nutritious meals, support vulnerable families, and
            strengthen communities through the <strong>One Meal One Hope</strong>{" "}
            initiative.
          </p>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#donation-plans"
              className="rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
            >
              Choose a Donation
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

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-amber-600">
              Why Donate?
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              One Meal Can Change a Life
            </h2>

            <p className="mt-8 leading-8 text-gray-600">
              Every day, countless children, families, and elderly individuals
              struggle to find their next meal. Your generosity helps transform
              compassion into action by funding food distribution, emergency
              relief, community kitchens, and sustainable hunger solutions.
            </p>

            <p className="mt-6 leading-8 text-gray-600">
              Your support is more than a donation—it is dignity, nourishment,
              and hope delivered to someone who needs it most.
            </p>
          </div>

          <div className="rounded-3xl bg-amber-50 p-10">
            <h3 className="text-3xl font-bold">
              Every Contribution Creates Impact
            </h3>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {impactStats.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl bg-white p-6 text-center shadow-sm"
                >
                  <h4 className="text-4xl font-extrabold text-amber-600">
                    {item.value}
                  </h4>

                  <p className="mt-3 text-gray-600">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Donation Plans */}
      <section
        id="donation-plans"
        className="bg-gray-50 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="font-semibold uppercase tracking-widest text-amber-600">
              Donation Plans
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Choose How You Want to Help
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Every contribution, regardless of size, brings us closer to a
              hunger-free future.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {donationPlans.map((plan) => (
              <div
                key={plan.title}
                className="rounded-3xl border bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold">{plan.title}</h3>

                <p className="mt-6 text-5xl font-extrabold text-amber-600">
                  {plan.amount}
                </p>

                <p className="mt-6 leading-7 text-gray-600">
                  {plan.description}
                </p>

                <button
                  className="mt-10 w-full rounded-full bg-amber-600 py-3 font-semibold text-white transition hover:bg-amber-700"
                  type="button"
                >
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="rounded-3xl bg-gradient-to-r from-amber-600 to-orange-500 p-12 text-white">
          <h2 className="text-4xl font-bold">
            Transparency Builds Trust
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-amber-100">
            We believe every donor deserves complete transparency. Donations are
            directed toward food distribution, emergency hunger relief,
            community kitchens, volunteer support, and sustainable nutrition
            programs. Annual reports and impact updates help demonstrate how
            every contribution creates meaningful change.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-semibold uppercase tracking-widest text-amber-400">
            Join the Movement
          </p>

          <h2 className="mt-6 text-5xl font-bold">
            Together We Can End Hunger
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            A single act of kindness can nourish a life, inspire a community,
            and build a future where no one goes to bed hungry.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="rounded-full bg-amber-500 px-8 py-4 font-semibold text-gray-900 transition hover:bg-amber-400"
            >
              Donate Securely
            </button>

            <Link
              href="/contact"
              className="rounded-full border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-gray-900"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
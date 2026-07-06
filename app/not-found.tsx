import Link from "next/link";

export const metadata = {
  title: "404 | Page Not Found",
  description:
    "The page you are looking for could not be found on Whisper with Vihaan.",
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white via-amber-50 to-orange-50 px-6">
      <section className="mx-auto max-w-3xl text-center">
        <div className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-full bg-amber-100">
          <span className="text-5xl">🍽️</span>
        </div>

        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-amber-600">
          Error 404
        </p>

        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
          Page Not Found
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          The page you're looking for doesn't exist or may have been moved.
          Every journey toward ending hunger begins with finding the right path.
          Let's help you get back on track.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-amber-700"
          >
            Return Home
          </Link>

          <Link
            href="/donate"
            className="rounded-full border border-amber-600 px-8 py-4 font-semibold text-amber-700 transition-all duration-300 hover:bg-amber-600 hover:text-white"
          >
            Support the Mission
          </Link>
        </div>

        <div className="mt-16 rounded-3xl border border-amber-100 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">
            One Meal One Hope
          </h2>

          <p className="mt-4 leading-8 text-gray-600">
            Hunger is more than an empty stomach—it is the absence of
            opportunity, dignity, and hope. Together, we can create a future
            where every person has access to at least one nutritious meal every
            day.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/about"
              className="rounded-full bg-gray-100 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
            >
              About
            </Link>

            <Link
              href="/campaign"
              className="rounded-full bg-gray-100 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
            >
              Campaign
            </Link>

            <Link
              href="/impact"
              className="rounded-full bg-gray-100 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
            >
              Impact
            </Link>

            <Link
              href="/stories"
              className="rounded-full bg-gray-100 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
            >
              Stories
            </Link>

            <Link
              href="/volunteers"
              className="rounded-full bg-gray-100 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
            >
              Volunteer
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-gray-100 px-5 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
            >
              Contact
            </Link>
          </div>
        </div>

        <p className="mt-12 text-sm text-gray-500">
          © {new Date().getFullYear()} Whisper with Vihaan • One Meal One Hope
        </p>
      </section>
    </main>
  );
}
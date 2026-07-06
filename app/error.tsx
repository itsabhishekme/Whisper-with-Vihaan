"use client";

import Link from "next/link";
import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({
  error,
  reset,
}: ErrorProps) {
  useEffect(() => {
    // Log the error for debugging or external monitoring
    console.error(error);
  }, [error]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-b from-white via-amber-50 to-orange-50 px-6 py-12">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-amber-100 bg-white p-10 shadow-xl">
        {/* Icon */}
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
          <span className="text-5xl">⚠️</span>
        </div>

        {/* Heading */}
        <div className="mt-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-red-600">
            Unexpected Error
          </p>

          <h1 className="mt-4 text-4xl font-extrabold text-gray-900 md:text-6xl">
            Something Went Wrong
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We encountered an unexpected problem while loading this page.
            Our mission continues, and we're working to resolve the issue as
            quickly as possible.
          </p>
        </div>

        {/* Mission Message */}
        <div className="mt-10 rounded-2xl bg-amber-50 p-6">
          <h2 className="text-xl font-bold text-gray-900">
            One Meal One Hope
          </h2>

          <p className="mt-3 leading-7 text-gray-700">
            Every act of kindness creates hope. While this page has encountered
            an issue, our commitment to ending hunger remains unchanged.
            Thank you for supporting our mission to ensure every individual has
            access to at least one nutritious meal each day.
          </p>
        </div>

        {/* Optional Error Details (Development Only) */}
        {process.env.NODE_ENV === "development" && (
          <div className="mt-8 overflow-auto rounded-xl border border-red-200 bg-red-50 p-4">
            <p className="mb-2 text-sm font-semibold text-red-700">
              Development Error
            </p>

            <pre className="whitespace-pre-wrap break-words text-sm text-red-800">
              {error.message}
            </pre>

            {error.digest && (
              <p className="mt-3 text-xs text-gray-600">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button
            onClick={reset}
            className="rounded-full bg-amber-600 px-8 py-4 font-semibold text-white transition hover:bg-amber-700"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="rounded-full border border-amber-600 px-8 py-4 text-center font-semibold text-amber-700 transition hover:bg-amber-600 hover:text-white"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-gray-300 px-8 py-4 text-center font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            Contact Us
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Whisper with Vihaan
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Together, one meal at a time, we can create hope.
          </p>
        </div>
      </section>
    </main>
  );
}
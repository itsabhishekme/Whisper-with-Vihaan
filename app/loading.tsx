export default function Loading() {
  return (
    <main className="fixed inset-0 z-50 flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-8">
        {/* Logo Placeholder */}
        <div className="flex flex-col items-center">
          <div className="h-20 w-20 animate-pulse rounded-full border-4 border-amber-500 border-t-transparent" />
        </div>

        {/* Brand */}
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold tracking-wide text-gray-900">
            Whisper with Vihaan
          </h1>

          <p className="text-lg font-medium text-amber-600">
            One Meal One Hope
          </p>

          <p className="max-w-md text-sm leading-relaxed text-gray-500">
            Every meal shared is a promise of hope, dignity, and a brighter
            tomorrow. Preparing your experience...
          </p>
        </div>

        {/* Loading Animation */}
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 animate-bounce rounded-full bg-amber-500 [animation-delay:-0.3s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-amber-500 [animation-delay:-0.15s]" />
          <span className="h-3 w-3 animate-bounce rounded-full bg-amber-500" />
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 w-72 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-full origin-left animate-pulse rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-red-500" />
        </div>

        {/* Quote */}
        <blockquote className="max-w-xl text-center text-sm italic text-gray-600">
          “A single meal can silence hunger for a day, but compassion can change
          a life forever.”
        </blockquote>
      </div>
    </main>
  );
}
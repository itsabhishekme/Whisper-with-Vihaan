"use client";

import { useState } from "react";
import {
  Mail,
  Send,
  BookOpen,
  Bell,
  CheckCircle2,
  Heart,
  Sparkles,
} from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim()) return;

    // TODO:
    // POST /api/newsletter

    console.log(email);

    setSubscribed(true);
    setEmail("");

    setTimeout(() => {
      setSubscribed(false);
    }, 4000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-black to-gray-900 py-28 text-white">
      {/* Background Glow */}
      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-amber-500/20 blur-3xl" />

      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08),transparent_70%)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-300">
              <BookOpen size={18} />
              Magazine Newsletter
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              Never Miss
              <br />
              A Whisper.
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-300">
              Subscribe to receive every new issue of
              <span className="font-semibold text-white">
                {" "}
                Whispers with Vihaan
              </span>
              , inspiring human stories, documentary features, campaign
              updates, and exclusive reflections delivered directly to your
              inbox.
            </p>

            {/* Features */}
            <div className="mt-12 grid gap-6">
              <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <BookOpen className="mt-1 text-amber-400" size={30} />

                <div>
                  <h3 className="font-bold">
                    Every Magazine Issue
                  </h3>

                  <p className="mt-2 text-gray-400">
                    Get notified whenever a new volume is released.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <Heart
                  className="mt-1 fill-red-500 text-red-500"
                  size={30}
                />

                <div>
                  <h3 className="font-bold">
                    Stories of Hope
                  </h3>

                  <p className="mt-2 text-gray-400">
                    Read inspiring stories of resilience, kindness, and
                    communities creating change.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <Bell className="mt-1 text-amber-400" size={30} />

                <div>
                  <h3 className="font-bold">
                    Campaign Updates
                  </h3>

                  <p className="mt-2 text-gray-400">
                    Stay informed about One Meal One Hope, documentaries,
                    events, and volunteer opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-[40px] border border-white/10 bg-white/10 p-10 shadow-2xl backdrop-blur-2xl">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-orange-600 shadow-xl">
              <Mail className="h-11 w-11 text-white" />
            </div>

            <h3 className="mt-8 text-center text-4xl font-black">
              Join Our Community
            </h3>

            <p className="mx-auto mt-5 max-w-md text-center leading-8 text-gray-300">
              Become part of a growing community that believes stories can
              inspire action and every meal shared creates hope.
            </p>

            {!subscribed ? (
              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6"
              >
                <div>
                  <label className="mb-3 block text-sm font-medium text-gray-300">
                    Email Address
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    className="w-full rounded-2xl border border-white/10 bg-white/10 px-5 py-4 text-lg text-white placeholder:text-gray-400 outline-none transition focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-5 text-lg font-bold text-white shadow-xl transition hover:scale-[1.02]"
                >
                  Subscribe Now

                  <Send className="transition group-hover:translate-x-1" />
                </button>
              </form>
            ) : (
              <div className="mt-10 rounded-3xl bg-green-500/20 p-8 text-center">
                <CheckCircle2 className="mx-auto h-14 w-14 text-green-400" />

                <h3 className="mt-5 text-2xl font-bold">
                  Thank You!
                </h3>

                <p className="mt-3 leading-8 text-green-100">
                  You have successfully subscribed to
                  <strong> Whispers with Vihaan.</strong>

                  <br />

                  The next issue will arrive in your inbox.
                </p>
              </div>
            )}

            {/* Bottom Stats */}
            <div className="mt-12 grid grid-cols-3 gap-5">
              <div className="rounded-2xl bg-white/5 p-5 text-center">
                <h4 className="text-3xl font-black text-amber-400">
                  3+
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Magazine
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5 text-center">
                <h4 className="text-3xl font-black text-orange-400">
                  50+
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Stories
                </p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5 text-center">
                <h4 className="text-3xl font-black text-green-400">
                  5K+
                </h4>

                <p className="mt-2 text-sm text-gray-400">
                  Readers
                </p>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-2 text-sm text-gray-400">
              <Sparkles size={18} className="text-amber-400" />

              No spam • Unsubscribe anytime • 100% Free
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
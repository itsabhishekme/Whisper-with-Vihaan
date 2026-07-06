"use client";

import { useEffect, useRef, useState } from "react";
import {
  UtensilsCrossed,
  Users,
  HandHeart,
  MapPinned,
} from "lucide-react";

interface CounterItem {
  icon: React.ElementType;
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

const counters: CounterItem[] = [
  {
    icon: UtensilsCrossed,
    value: 250000,
    suffix: "+",
    label: "Meals Served",
    description:
      "Nutritious meals distributed to individuals and families in need.",
  },
  {
    icon: Users,
    value: 18000,
    suffix: "+",
    label: "Lives Impacted",
    description:
      "People reached through food support, awareness, and community care.",
  },
  {
    icon: HandHeart,
    value: 1200,
    suffix: "+",
    label: "Volunteers",
    description:
      "Passionate volunteers helping us fight hunger every single day.",
  },
  {
    icon: MapPinned,
    value: 42,
    suffix: "",
    label: "Communities Reached",
    description:
      "Cities and rural communities benefiting from our hunger relief mission.",
  },
];

function CountUp({
  end,
  duration = 2000,
}: {
  end: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count.toLocaleString()}</>;
}

export default function Counter() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Our Impact
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Every Meal Creates Hope
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Behind every number is a real person, a real family, and a story of
            resilience. Together, we are building a future where no one goes to
            bed hungry.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {counters.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 transition group-hover:bg-amber-500 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-4xl font-extrabold text-gray-900">
                  {visible ? (
                    <>
                      <CountUp end={item.value} />
                      {item.suffix}
                    </>
                  ) : (
                    "0"
                  )}
                </h3>

                <h4 className="mt-3 text-xl font-semibold text-gray-900">
                  {item.label}
                </h4>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
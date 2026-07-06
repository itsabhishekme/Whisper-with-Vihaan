"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Hunger Crisis", href: "/hunger" },
  { name: "Campaign", href: "/campaign" },
  { name: "Impact", href: "/impact" },
  { name: "Documentary", href: "/documentary" },
  { name: "Stories", href: "/stories" },
  { name: "Events", href: "/events" },
  { name: "Blog", href: "/blog" },
  { name: "Volunteer", href: "/volunteers" },
  { name: "Donate", href: "/donate" },
  { name: "Contact", href: "/contact" },
];

export default function MobileMenu({
  isOpen,
  onClose,
}: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.aside
            className="fixed right-0 top-0 z-50 flex h-screen w-full max-w-sm flex-col bg-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-200 px-6 py-5">
              <div>
                <h2 className="text-xl font-black text-gray-900">
                  Whisper
                  <span className="text-amber-500"> with Vihaan</span>
                </h2>

                <p className="text-sm text-gray-500">
                  One Meal One Hope
                </p>
              </div>

              <button
                onClick={onClose}
                aria-label="Close Menu"
                className="rounded-lg p-2 transition hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-6 py-8">
              <ul className="space-y-2">
                {navigation.map((item) => {
                  const active = pathname === item.href;

                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`block rounded-xl px-5 py-4 text-lg font-medium transition-all duration-300 ${
                          active
                            ? "bg-amber-500 text-white"
                            : "text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer CTA */}
            <div className="border-t border-gray-200 p-6">
              <Link
                href="/donate"
                onClick={onClose}
                className="block w-full rounded-xl bg-amber-500 px-6 py-4 text-center text-lg font-bold text-white transition hover:bg-amber-600"
              >
                ❤️ Donate Now
              </Link>

              <p className="mt-4 text-center text-sm leading-6 text-gray-500">
                Every meal shared is a step toward a world without hunger.
              </p>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
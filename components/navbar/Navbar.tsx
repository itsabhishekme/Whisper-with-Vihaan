"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Campaign",
    href: "/campaign",
  },
  {
    title: "Hunger",
    href: "/hunger",
  },
  {
    title: "Stories",
    href: "/stories",
  },
  {
    title: "Documentary",
    href: "/documentary",
  },
  {
    title: "Events",
    href: "/events",
  },
 
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenu(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${scrolled
            ? "border-b border-white/10 bg-white/90 shadow-xl backdrop-blur-xl"
            : "bg-transparent"
          }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <div className="relative h-14 w-14 overflow-hidden rounded-full bg-white shadow-lg ring-2 ring-amber-500/20 transition duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                alt="Whisper with Vihaan Logo"
                fill
                priority
                className="object-contain p-1"
              />
            </div>

            <div>
              <h1
                className={`text-xl font-black transition duration-300 ${scrolled ? "text-gray-900" : "text-white"
                  }`}
              >
                Whisper with Vihaan
              </h1>

              <p
                className={`text-xs font-medium tracking-wider uppercase transition duration-300 ${scrolled ? "text-amber-600" : "text-amber-300"
                  }`}
              >
                One Meal One Hope
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`relative font-medium transition ${scrolled
                    ? "text-gray-700 hover:text-amber-600"
                    : "text-white hover:text-amber-300"
                  }`}
              >
                {item.title}

                <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-amber-500 transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Donate Button */}
          <div className="hidden lg:block">
            <a
              href="#donate"
              className="rounded-full bg-gradient-to-r from-amber-500 to-orange-600 px-7 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
            >
              Donate Now
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className={`lg:hidden ${scrolled ? "text-gray-900" : "text-white"
              }`}
          >
            {mobileMenu ? (
              <X size={32} />
            ) : (
              <Menu size={32} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-md transition-all duration-300 lg:hidden ${mobileMenu
            ? "visible opacity-100"
            : "invisible opacity-0"
          }`}
      >
        <div className="absolute right-0 top-0 flex h-screen w-80 flex-col bg-white p-8 shadow-2xl">
          <div className="mb-10 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-black">
                Whisper with Vihaan
              </h2>

              <p className="text-sm text-gray-500">
                One Meal One Hope
              </p>
            </div>

            <button
              type="button"
              onClick={closeMenu}
              title="Close menu"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="space-y-6">
            {navLinks.map((item) => (
              <a
                key={item.title}
                href={item.href}
                onClick={closeMenu}
                className="block text-lg font-semibold text-gray-700 transition hover:text-amber-600"
              >
                {item.title}
              </a>
            ))}
          </nav>

          <div className="mt-10">
            <a
              href="#donate"
              onClick={closeMenu}
              className="block rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-4 text-center font-bold text-white shadow-lg"
            >
              ❤️ Donate Now
            </a>
          </div>

          <div className="mt-auto border-t pt-8">
            <p className="text-center text-sm text-gray-500">
              Together, we can ensure that no one sleeps hungry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
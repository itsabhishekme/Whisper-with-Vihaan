"use client";

import Link from "next/link";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Magazine", href: "/magazine" },
  { name: "The Hunger Crisis", href: "/hunger" },
  { name: "Campaign", href: "/campaign" },
  { name: "Impact", href: "/impact" },
  { name: "Stories", href: "/stories" },
  { name: "Documentary", href: "/documentary" },
  { name: "Events", href: "/events" },
  { name: "Volunteer", href: "/volunteers" },
  { name: "Donate", href: "/donate" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const campaignLinks = [
  { name: "One Meal One Hope", href: "/campaign" },
  { name: "Community Kitchen", href: "/campaign" },
  { name: "Food Distribution", href: "/campaign" },
  { name: "Emergency Relief", href: "/campaign" },
  { name: "School Feeding", href: "/campaign" },
  { name: "Monthly Giving", href: "/donate" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "#" },
  { name: "Cookie Policy", href: "#" },
];

const socialLinks = [
  {
    icon: FaFacebookF,
    href: "https://facebook.com",
    label: "Facebook",
  },
  {
    icon: FaInstagram,
    href: "https://instagram.com",
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaYoutube,
    href: "https://youtube.com",
    label: "YouTube",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      {/* CTA */}
      <section className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-16 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <span className="rounded-full bg-amber-500/20 px-4 py-2 text-sm font-semibold text-amber-400">
              One Meal One Hope
            </span>

            <h2 className="mt-6 text-4xl font-extrabold leading-tight">
              Every Meal Shared
              <br />
              Creates Another Story of Hope.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-300">
              Together we can build a future where no child sleeps hungry and no
              family is forgotten. Your kindness today becomes someone's hope
              tomorrow.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/donate"
              className="rounded-xl bg-amber-500 px-8 py-4 font-semibold text-black transition hover:bg-amber-400"
            >
              Donate Now
            </Link>

            <Link
              href="/volunteers"
              className="rounded-xl border border-white/20 px-8 py-4 font-semibold transition hover:bg-white hover:text-black"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-3xl font-black">
            Whisper
            <span className="text-amber-400"> with Vihaan</span>
          </h3>

          <p className="mt-6 leading-8 text-gray-400">
            A storytelling movement inspiring compassion through the
            <span className="font-semibold text-white">
              {" "}
              One Meal One Hope
            </span>{" "}
            campaign, ensuring every individual has access to at least one
            nutritious meal every day.
          </p>

          <div className="mt-8 flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/10 p-3 transition hover:border-amber-500 hover:bg-amber-500 hover:text-black"
                  aria-label={social.label}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-6 text-xl font-bold">Quick Links</h4>

          <ul className="space-y-4">
            {quickLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-gray-400 transition hover:text-amber-400"
                >
                  <ArrowUpRight size={16} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Campaign */}
        <div>
          <h4 className="mb-6 text-xl font-bold">Our Campaign</h4>

          <ul className="space-y-4">
            {campaignLinks.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-gray-400 transition hover:text-amber-400"
                >
                  <ArrowUpRight size={16} />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-6 text-xl font-bold">Contact</h4>

          <div className="space-y-6">
            <div className="flex gap-4">
              <Mail className="mt-1 text-amber-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <a
                  href="mailto:hello@whisperwithvihaan.org"
                  className="hover:text-amber-400"
                >
                  hello@whisperwithvihaan.org
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Phone className="mt-1 text-amber-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Phone</p>
                <a href="tel:+910000000000" className="hover:text-amber-400">
                  +91 00000 00000
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <MapPin className="mt-1 text-amber-400" size={20} />
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p>Bengaluru, Karnataka, India</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 text-center md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Whisper with Vihaan. All Rights
            Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-gray-400 transition hover:text-amber-400"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            Made with <Heart className="fill-red-500 text-red-500" size={16} />
            for Humanity
          </div>
        </div>
      </div>
    </footer>
  );
}
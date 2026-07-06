"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  HeartHandshake,
  Send,
} from "lucide-react";

type FormData = {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  age: string;
  profession: string;
  availability: string;
  interest: string;
  message: string;
};

const initialForm: FormData = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  age: "",
  profession: "",
  availability: "",
  interest: "",
  message: "",
};

export default function VolunteerForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(form);

    setSubmitted(true);
    setForm(initialForm);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            Become a Volunteer
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Join{" "}
            <span className="text-amber-500">One Meal One Hope</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Every helping hand brings hope to someone in need. Whether you can
            volunteer a few hours or dedicate your time regularly, your
            contribution can transform lives.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h3 className="mb-8 text-3xl font-bold text-gray-900">
              Why Volunteer?
            </h3>

            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="rounded-xl bg-amber-100 p-4">
                  <HeartHandshake className="text-amber-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Make a Real Difference
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Help distribute meals, support food drives, and restore hope
                    to families facing hunger.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-xl bg-blue-100 p-4">
                  <Users className="text-blue-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Join a Community
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Meet passionate individuals committed to creating a world
                    without hunger.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-xl bg-green-100 p-4">
                  <Calendar className="text-green-600" />
                </div>

                <div>
                  <h4 className="font-semibold text-xl">
                    Flexible Opportunities
                  </h4>

                  <p className="mt-2 text-gray-600">
                    Volunteer on weekends, during events, or become a regular
                    community ambassador.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h3 className="mb-8 text-3xl font-bold text-gray-900">
              Volunteer Registration
            </h3>

            {submitted && (
              <div className="mb-8 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700">
                🎉 Thank you for registering! We will contact you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="mb-2 block font-medium">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="text"
                    name="fullName"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block font-medium">
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block font-medium">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 9876543210"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block font-medium">
                  City
                </label>

                <div className="relative">
                  <MapPin className="absolute left-4 top-4 text-gray-400" />

                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Bengaluru"
                    className="w-full rounded-xl border border-gray-300 py-3 pl-12 pr-4 outline-none transition focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Age */}
              <div>
                <label className="mb-2 block font-medium">
                  Age
                </label>

                <input
                  type="number"
                  name="age"
                  value={form.age}
                  onChange={handleChange}
                  placeholder="22"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500"
                />
              </div>

              {/* Profession */}
              <div>
                <label className="mb-2 block font-medium">
                  Profession
                </label>

                <input
                  type="text"
                  name="profession"
                  value={form.profession}
                  onChange={handleChange}
                  placeholder="Student / Teacher / Engineer"
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500"
                />
              </div>

              {/* Availability */}
              <div>
                <label htmlFor="availability" className="mb-2 block font-medium">
                  Availability
                </label>

                <select
                  id="availability"
                  name="availability"
                  value={form.availability}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500"
                >
                  <option value="">Select</option>
                  <option>Weekends</option>
                  <option>Weekdays</option>
                  <option>Evenings</option>
                  <option>Flexible</option>
                </select>
              </div>

              {/* Interest */}
              <div>
                <label htmlFor="interest" className="mb-2 block font-medium">
                  Area of Interest
                </label>

                <select
                  id="interest"
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-amber-500"
                >
                  <option value="">Select</option>
                  <option>Food Distribution</option>
                  <option>Community Kitchen</option>
                  <option>Fundraising</option>
                  <option>Photography</option>
                  <option>Content Creation</option>
                  <option>Event Management</option>
                  <option>Social Media</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block font-medium">
                  Why do you want to volunteer?
                </label>

                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about yourself..."
                  className="w-full rounded-xl border border-gray-300 p-4 outline-none transition focus:border-amber-500"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-amber-500 py-4 text-lg font-semibold text-white transition hover:bg-amber-600"
              >
                <Send size={20} />
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
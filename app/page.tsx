import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import HungerFacts from "@/components/hunger/HungerFacts";
import CampaignMission from "@/components/campaign/CampaignMission";
import Counter from "@/components/impact/Counter";
import DocumentaryJourney from "@/components/documentary/DocumentaryJourney";
import FeaturedStory from "@/components/stories/FeaturedStory";
import DonateCard from "@/components/donate/DonateCard";
import VolunteerForm from "@/components/volunteers/VolunteerForm";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-gray-900">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>

      {/* Hunger Crisis */}
      <section id="hunger" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
              The Hunger Crisis
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Hunger Is Not Just About Food
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Millions of people around the world struggle every day to find
              their next meal. Hunger affects health, education, dignity, and
              opportunity. Together, we can change this story—one meal, one
              family, and one community at a time.
            </p>
          </div>

          <HungerFacts />
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="bg-gray-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <CampaignMission />
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Our Impact
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Every Contribution Makes a Difference
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Together with volunteers, donors, and compassionate communities,
              we are creating meaningful change across lives.
            </p>
          </div>

          <Counter />
        </div>
      </section>

      {/* Documentary Journey */}
      <section id="documentary" className="bg-black py-24 text-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <span className="rounded-full bg-amber-500/20 px-4 py-2 text-sm font-semibold text-amber-400">
              Our Journey
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              One Meal One Hope
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
              Every meal served tells a story of kindness, compassion, and hope.
              Together, we are building a movement where no one has to face
              hunger alone.
            </p>
          </div>

          <DocumentaryJourney />
        </div>
      </section>

      {/* Stories */}
      <section id="stories" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
              Stories of Hope
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Real Lives. Real Impact.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
              Behind every meal is a story of resilience. Meet the people whose
              lives have been transformed through compassion and community
              support.
            </p>
          </div>

          <FeaturedStory />
        </div>
      </section>

      {/* Donate */}
      <section
        id="donate"
        className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl px-6">
          <DonateCard
            title="Donate Today"
            amount="25"
            description="Provide meals to families in need with your contribution."
            impact="Every donation helps provide nutritious meals, dignity, and hope to vulnerable communities."
          />
        </div>
      </section>

      {/* Volunteer */}
      <section id="volunteer" className="bg-gray-100 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-14 text-center">
            <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              Join Our Mission
            </span>

            <h2 className="mt-6 text-4xl font-black md:text-5xl">
              Become a Volunteer
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
              Your time, compassion, and commitment can change lives. Join our
              volunteers in serving meals, spreading awareness, and bringing
              hope to communities in need.
            </p>
          </div>

          <VolunteerForm />
        </div>
      </section>

      {/* Final Call To Action */}
      <section id="contact" className="bg-gray-950 py-28 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="rounded-full bg-amber-500/20 px-5 py-2 text-sm font-semibold text-amber-400">
            One Meal One Hope
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
            Together We Can End Hunger
            <br />
            One Meal at a Time
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-300">
            Every meal shared brings dignity. Every volunteer creates impact.
            Every donor inspires hope. Together we can build a future where no
            child, family, or elder sleeps hungry.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <a
              href="#donate"
              className="rounded-xl bg-amber-500 px-8 py-4 text-lg font-semibold text-black transition hover:bg-amber-400"
            >
              Donate Now
            </a>

            <a
              href="#volunteer"
              className="rounded-xl border border-white px-8 py-4 text-lg font-semibold transition hover:bg-white hover:text-black"
            >
              Become a Volunteer
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
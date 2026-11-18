import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "DSA & interview prep",
    description: "NeetCode, LeetCode, CodePath, and system design all in one place",
  },
  {
    title: "Career materials done right",
    description: "Resume rewrite, LinkedIn revamp, and job applications handled for you",
  },
  {
    title: "Unlimited mock interviews",
    description: "Unlimited technical and behavioral mock interviews led by current FAANG engineers",
  },
  {
    title: "Mentorship + community",
    description: "Mentorship from engineers at Microsoft, Amazon, and Google + lifetime community access",
  },
];

const founders = [
  { name: "Maxwell Myers", title: "CEO & Co-Founder" },
  { name: "Gerdin Ventura", title: "Co-Founder" },
  { name: "Brian Quainoo", title: "CRO & Co-Founder" },
  { name: "Papa Asibuo", title: "Product Manager" },
];

const stats = [
  "100+ students have already landed offers or interviews at Microsoft, Amazon, and Google",
  "600+ resumes rewritten",
  "Founded by University of Maryland grads now at Microsoft and Robinhood",
];

export default function ZeroToLaunch() {
  return (
    <div className="review-program min-h-screen">
      <section className="review-program-hero">
        <div className="review-program-shell">
          <a
            href="https://learnwleo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="review-program-label review-program-label-link"
          >
            In Partnership with LiLO x Learn with Leo
          </a>

          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Free Summer Academy - Zero to Launch
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85 md:text-xl">
            Didn&apos;t land an internship this summer? Spend it leveling up instead. A completely free
            12-week remote program starting June 14.
          </p>
          <p className="review-program-deadline mt-4">
            Application deadline: June 1st
          </p>

          <div className="mt-8">
            <a
              href="https://learnwleo.com/academy"
              target="_blank"
              rel="noopener noreferrer"
              className="review-program-button"
            >
              Apply Now - It&apos;s Free <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="review-program-section">
        <div className="review-program-shell">
          <h2 className="text-2xl font-extrabold text-[#114634] md:text-3xl">About LiLO</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-[#1a1a1a]/80">
            LiLO is a network of software engineers who came up through non-traditional paths. They&apos;ve
            rewritten 600+ resumes and coached 100+ students into interviews at Amazon, Microsoft, and Meta.
            Every learner gets paired with a mentor who stays with them from the first resume rewrite through
            the final offer.
          </p>

          <div className="review-program-roster mt-8">
            {founders.map((founder) => (
              <div key={founder.name} className="review-program-person py-4">
                <p className="font-bold text-[#1a1a1a]">{founder.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{founder.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="review-program-section">
        <div className="review-program-shell">
          <h2 className="text-2xl font-extrabold text-[#114634] md:text-3xl">What You Get</h2>
          <div className="review-program-list mt-8">
            {features.map(({ title, description }) => (
              <article key={title} className="review-program-row">
                <h3 className="text-lg font-bold text-[#1a1a1a]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/80">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="review-program-section">
        <div className="review-program-shell review-program-roster">
          {stats.map((stat) => (
            <div key={stat} className="review-program-person py-4">
              <p className="text-sm font-semibold leading-relaxed">{stat}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="review-program-section review-program-last">
        <div className="review-program-shell flex flex-wrap items-center justify-between gap-5">
          <p className="text-sm font-semibold text-secondary">
            This is the last cohort it&apos;ll be free. Deadline is June 1st.
          </p>
          <a
            href="https://learnwleo.com/academy"
            target="_blank"
            rel="noopener noreferrer"
            className="review-program-button"
          >
            Apply at learnwleo.com/academy
          </a>
        </div>
      </section>
    </div>
  );
}

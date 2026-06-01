import { Code2, FileText, Users, UserRoundCheck, ArrowRight } from "lucide-react";

const features = [
  {
    title: "DSA & interview prep",
    description: "NeetCode, LeetCode, CodePath, and system design all in one place",
    Icon: Code2,
  },
  {
    title: "Career materials done right",
    description: "Resume rewrite, LinkedIn revamp, and job applications handled for you",
    Icon: FileText,
  },
  {
    title: "Unlimited mock interviews",
    description: "Unlimited technical and behavioral mock interviews led by current FAANG engineers",
    Icon: UserRoundCheck,
  },
  {
    title: "Mentorship + community",
    description: "Mentorship from engineers at Microsoft, Amazon, and Google + lifetime community access",
    Icon: Users,
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
    <div className="min-h-screen bg-[#F5F5F5] text-[#1a1a1a]">
      <section className="bg-[#114634] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <a
            href="https://learnwleo.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full border border-[#C9A84C]/55 bg-[#C9A84C]/15 px-4 py-2 text-xs font-semibold tracking-wide text-[#F4E2A8] hover:bg-[#C9A84C]/25"
          >
            In Partnership with LiLO x Learn with Leo
          </a>

          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Free Summer Academy — Zero to Launch
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/85 md:text-xl">
            Didn&apos;t land an internship this summer? Spend it leveling up instead. A completely free
            12-week remote program starting June 14.
          </p>
          <p className="mt-4 inline-flex rounded-lg bg-[#EC7524] px-4 py-2 text-sm font-bold text-white">
            Application deadline: June 1st
          </p>

          <div className="mt-8">
            <a
              href="https://learnwleo.com/academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#EC7524] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#d9681d]"
            >
              Apply Now — It&apos;s Free <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl rounded-2xl border border-[#114634]/15 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-extrabold text-[#114634] md:text-3xl">About LiLO</h2>
          <p className="mt-4 max-w-4xl leading-relaxed text-[#1a1a1a]/80">
            LiLO is a network of software engineers who came up through non-traditional paths. They&apos;ve
            rewritten 600+ resumes and coached 100+ students into interviews at Amazon, Microsoft, and Meta.
            Every learner gets paired with a mentor who stays with them from the first resume rewrite through
            the final offer.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder) => (
              <div key={founder.name} className="rounded-xl border border-[#114634]/15 bg-[#f7f7f7] p-4">
                <p className="font-bold text-[#1a1a1a]">{founder.name}</p>
                <p className="mt-1 text-sm text-[#C9A84C]">{founder.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-extrabold text-[#114634] md:text-3xl">What You Get</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {features.map(({ title, description, Icon }) => (
              <article key={title} className="rounded-2xl border border-[#C9A84C]/35 bg-white p-6 shadow-sm">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#C9A84C]/18 text-[#9a7e2f]">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#1a1a1a]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#1a1a1a]/80">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat} className="rounded-xl border border-[#114634]/15 bg-[#114634] p-5">
              <p className="text-sm font-semibold leading-relaxed text-white">{stat}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sticky bottom-0 z-20 border-t border-[#C9A84C]/35 bg-[#1a1a1a]/95 px-6 py-4 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-semibold text-[#F2DF9B]">
            This is the last cohort it&apos;ll be free. Deadline is June 1st.
          </p>
          <a
            href="https://learnwleo.com/academy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg bg-[#EC7524] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#d9681d]"
          >
            Apply at learnwleo.com/academy
          </a>
        </div>
      </section>
    </div>
  );
}

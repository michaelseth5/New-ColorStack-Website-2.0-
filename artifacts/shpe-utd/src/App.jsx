import {
  ArrowRight,
  Code2,
  Database,
  FileText,
  Shield,
  UserRoundCheck,
  Users,
  Wrench,
} from "lucide-react";

const tracks = [
  {
    name: "Frontend Development",
    description:
      "Build what people see. Earn a Meta Front-End Developer certificate through Coursera.",
    Icon: Code2,
  },
  {
    name: "Backend Development",
    description:
      "Power the engine. Build APIs and server-side systems. Meta Back-End + Node.js/Express via Coursera.",
    Icon: Database,
  },
  {
    name: "Cybersecurity",
    description:
      "Defend the perimeter. 70% backend foundations, 30% security — the way internships actually work.",
    Icon: Shield,
  },
];

const steps = [
  "Submit the ColorStack UTD enrollment form",
  "Complete the CodePath placement assessment (15 min)",
  "Get placed into CodePath TIP",
  "Pick your specialization track",
  "Build your capstone project",
  "Present at Week 10 showcase",
];

const zeroToLaunchFeatures = [
  {
    text: "Comprehensive Zero-to-SWE Curriculum",
    Icon: Wrench,
  },
  {
    text: "Resume rewrite, LinkedIn revamp, and job applications handled for you",
    Icon: FileText,
  },
  {
    text: "Unlimited technical and behavioral mock interviews led by current FAANG engineers",
    Icon: UserRoundCheck,
  },
  {
    text: "Mentorship from current FAANG engineers + lifetime access to a private Software Engineers community",
    Icon: Users,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D1B2A] text-white font-sans">
      <main>
        <section className="px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-xs tracking-[0.18em] text-white/75 uppercase">
              ColorStack UTD Summer 2026
            </p>
            <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
              ColorStack UTD Summer Roadmap: Pipeline to Your Internship
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
              A 10-week coding bootcamp for UT Dallas students, built in partnership with CodePath
            </p>
            <button
              onClick={() => window.open("#", "_self")}
              className="mt-10 inline-flex items-center gap-2 rounded-xl bg-[#BF5700] px-7 py-3.5 text-sm font-semibold transition hover:bg-[#a94d00]"
            >
              Apply Now <ArrowRight size={16} />
            </button>
          </div>
        </section>

        <section className="bg-[#12263A] px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold md:text-4xl">Program Overview</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-sm text-white/70">Duration</p>
                <p className="mt-1 text-xl font-semibold">10 weeks total</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-sm text-white/70">Prerequisite</p>
                <p className="mt-1 text-xl font-semibold">CodePath Technical Interview Prep (TIP)</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-sm text-white/70">Weeks 1–2</p>
                <p className="mt-1 text-base font-medium">
                  Everyone starts with Power BI (Microsoft Learn + freeCodeCamp)
                </p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                <p className="text-sm text-white/70">Weeks 3–9</p>
                <p className="mt-1 text-base font-medium">Students branch into their chosen track</p>
              </div>
              <div className="rounded-xl border border-white/15 bg-white/5 p-5 sm:col-span-2">
                <p className="text-sm text-white/70">Week 10</p>
                <p className="mt-1 text-base font-medium">Final project showcase</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold md:text-4xl">Tracks</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {tracks.map(({ name, description, Icon }) => (
                <article key={name} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[#BF5700]/20 text-[#BF5700]">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-xl font-semibold">{name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#12263A] px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold md:text-4xl">How It Works</h2>
            <ol className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/5 p-4">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#BF5700] text-sm font-bold">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-white/90">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl rounded-3xl border border-[#C9A84C]/35 bg-[#1A2433] p-8 md:p-12">
            <p className="text-sm font-medium text-[#C9A84C]">
              In Partnership with{" "}
              <a
                href="https://learnwleo.com/"
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-4 hover:text-[#d8ba67]"
              >
                Learn with Leo
              </a>
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl text-[#F1E3B7]">Zero to Launch SWE Academy</h2>
            <p className="mt-4 max-w-3xl text-lg text-white/85">
              Didn't land a summer internship? Still looking for your first offer? This is the program for you.
            </p>
            <p className="mt-4 max-w-3xl text-white/75">
              A 12-week intensive bootcamp for students who didn't land a summer internship and recent grads still
              searching for their first offer.
            </p>

            <div className="mt-8 space-y-4">
              {zeroToLaunchFeatures.map(({ text, Icon }) => (
                <div key={text} className="flex items-start gap-3 rounded-xl border border-[#C9A84C]/20 bg-[#0D1B2A]/70 p-4">
                  <Icon size={20} className="mt-0.5 shrink-0 text-[#C9A84C]" />
                  <p className="text-white/90">{text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => window.open("https://learnwleo.com/", "_blank", "noopener,noreferrer")}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#C9A84C] px-6 py-3 font-semibold text-[#0D1B2A] transition hover:bg-[#b5963d]"
            >
              Learn More <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
          <p>ColorStack UTD @ The University of Texas at Dallas</p>
          <p>@colorstackutd</p>
        </div>
      </footer>
    </div>
  );
}

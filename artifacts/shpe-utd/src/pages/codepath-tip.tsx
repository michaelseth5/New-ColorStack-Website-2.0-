export default function CodePathTip() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] text-[#1a1a1a]">
      <section className="bg-[#114634] px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-6xl">
          <p className="inline-flex items-center rounded-full border border-[#C9A84C]/50 bg-[#C9A84C]/15 px-4 py-2 text-xs font-semibold tracking-wide text-[#F4E2A8]">
            Also Available to ColorStack UTD Members
          </p>
          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Technical Interview Prep with CodePath
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-semibold text-white/90">
            Free DSA and interview prep — exclusively for ColorStack UTD members.
          </p>
          <p className="mt-4 max-w-4xl leading-relaxed text-white/85">
            CodePath&apos;s TIP course is a 10-week, fully remote program covering data structures,
            algorithms, and technical interview strategy. It&apos;s the required foundation for our
            summer bootcamp, and it&apos;s completely free.
          </p>
          <a
            href="https://www.codepath.org/courses/technical-interview-prep"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center rounded-lg bg-[#EC7524] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#d9681d]"
          >
            Apply on CodePath
          </a>
        </div>
      </section>

      <section className="px-6 py-14">
        <div className="mx-auto max-w-6xl rounded-2xl border border-[#114634]/15 bg-white p-6 shadow-sm md:p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#114634]/80">What&apos;s Covered</p>
          <ul className="space-y-3 text-[#1a1a1a]/85">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[#EC7524] shrink-0" />
              Data structures &amp; algorithms
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[#EC7524] shrink-0" />
              Technical interview strategy
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[#EC7524] shrink-0" />
              HackerRank and LeetCode-style problem solving
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-[#EC7524] shrink-0" />
              Placement assessment to match you to the right class level
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

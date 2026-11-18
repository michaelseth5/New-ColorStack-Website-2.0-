export default function CodePathTip() {
  return (
    <div className="review-program min-h-screen">
      <section className="review-program-hero">
        <div className="review-program-shell">
          <p className="review-program-label">
            Also Available to ColorStack UTD Members
          </p>
          <h1 className="mt-6 text-4xl font-black leading-tight md:text-6xl">
            Technical Interview Prep with CodePath
          </h1>
          <p className="mt-5 max-w-3xl text-lg font-semibold text-white/90">
            Free DSA and interview prep - exclusively for ColorStack UTD members.
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
            className="review-program-button mt-8"
          >
            Apply on CodePath
          </a>
        </div>
      </section>

      <section className="review-program-section">
        <div className="review-program-shell review-program-split">
          <h2 className="review-program-section-title">What&apos;s Covered</h2>
          <ul className="review-program-list">
            <li className="flex items-start gap-2">
              Data structures &amp; algorithms
            </li>
            <li className="flex items-start gap-2">
              Technical interview strategy
            </li>
            <li className="flex items-start gap-2">
              HackerRank and LeetCode-style problem solving
            </li>
            <li className="flex items-start gap-2">
              Placement assessment to match you to the right class level
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

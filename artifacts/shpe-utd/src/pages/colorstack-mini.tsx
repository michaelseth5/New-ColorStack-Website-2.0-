import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Research",
    desc: "get help finding and landing research opportunities early",
  },
  {
    title: "Projects",
    desc: "build real projects with a mentor, from idea to something you can show off",
  },
  {
    title: "Mentorship",
    desc: "regular 1-on-1s for career advice and honest feedback",
  },
  {
    title: "Growth",
    desc: "accountability and real recognition as you make progress",
  },
];

const mentees = ["Anthonio Odonkor", "Sally Duru", "Halema Diab", "Henos Tekie"];

export default function ColorStackMini() {
  return (
    <div className="review-program min-h-screen">
      {/* Header */}
      <section className="review-program-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="review-program-shell"
        >
          <p className="review-program-label">
            1-on-1 Mentorship
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-white md:text-6xl">
            ColorStack Mini
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Upperclassmen mentor lowerclassmen. One person who&apos;s already done it, working
            with one person just starting out.
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="review-program-section">
        <div className="review-program-shell">
          <div className="review-program-list">
            {features.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="review-program-row"
              >
                <h3 className="text-base font-bold text-secondary">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentees */}
      <section className="review-program-section review-program-neutral">
        <div className="review-program-shell">
          <div className="mb-8">
            <h2 className="text-3xl font-black text-foreground md:text-4xl">Mentees</h2>
          </div>

          <div className="review-program-roster">
            {mentees.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="review-program-person"
              >
                <div className="py-4">
                  <h3 className="text-sm font-bold leading-snug text-foreground">{name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="review-program-section review-program-last">
        <div className="review-program-shell">
          <p className="text-lg font-semibold text-foreground">
            Want in? Get paired with a mentor or become one.
          </p>
          <a href="https://colorstackutd.com/join" data-testid="link-colorstack-mini-join" className="review-program-button mt-5">
            Get Involved <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
}

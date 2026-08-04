import { motion } from "framer-motion";
import { Search, Code2, Users, TrendingUp, User, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const features = [
  {
    title: "Research",
    desc: "Mentors help mentees find and get into research opportunities early.",
    Icon: Search,
  },
  {
    title: "Projects",
    desc: "Mentors guide mentees through building real projects, from idea to portfolio-ready.",
    Icon: Code2,
  },
  {
    title: "Mentorship",
    desc: "Regular 1-on-1 check-ins for career advice and honest feedback.",
    Icon: Users,
  },
  {
    title: "Growth",
    desc: "Mentors hold mentees accountable while giving real positive reinforcement.",
    Icon: TrendingUp,
  },
];

const mentors: { name: string; role?: string }[] = [
  { name: "Anthonio Odonkor" },
  { name: "Sally Duru" },
  { name: "Halema Diab" },
  { name: "Henos Tekie" },
];

export default function MiniColorStack() {
  return (
    <div className="min-h-screen bg-background w-full pb-24">
      {/* Header */}
      <section className="bg-[#114634] px-6 py-20 text-center md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-sm font-bold uppercase tracking-widest text-[#EC7524]">
            1-on-1 Mentorship Program
          </p>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-white md:text-6xl">
            Mini ColorStack
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80">
            Mini ColorStack pairs upperclassmen with lowerclassmen for 1-on-1 mentorship. No big
            lecture hall, no generic advice. Just one experienced student who&apos;s already been
            through it, working directly with one student who&apos;s just getting started.
          </p>
        </motion.div>
      </section>

      {/* Features */}
      <section className="px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(({ title, desc, Icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="text-base font-bold text-secondary">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="border-t border-border bg-[#F5F5F5] px-6 py-20 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">Meet the Mentors</p>
            <h2 className="mt-2 text-3xl font-black text-foreground md:text-4xl">
              Students Who&apos;ve Been There
            </h2>
            <div className="mx-auto mt-4 h-1 w-14 rounded-full bg-primary" />
          </div>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {mentors.map((mentor, i) => (
              <motion.div
                key={mentor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden bg-[#EFEFEF]">
                  <User size={40} strokeWidth={1.5} className="text-foreground/20" />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
                </div>
                <div className="flex flex-col items-center gap-0.5 p-4 text-center">
                  <h3 className="text-sm font-bold leading-snug text-foreground">{mentor.name}</h3>
                  {mentor.role && (
                    <p className="text-xs text-muted-foreground">{mentor.role}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 text-center">
        <p className="text-lg font-semibold text-foreground">
          Want to be paired with a mentor, or become one yourself?
        </p>
        <Link href="/join" data-testid="link-mini-colorstack-join">
          <button className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-px hover:bg-primary/90">
            Get Involved <ArrowRight size={16} />
          </button>
        </Link>
      </section>
    </div>
  );
}

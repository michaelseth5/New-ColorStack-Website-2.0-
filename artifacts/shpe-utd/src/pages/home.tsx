import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState, useCallback } from "react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const heroImg = `${BASE}/hero.jpg`;
const logo = `${BASE}/logo-bg.png`;
const speedImg = `${BASE}/speed.jpg`;

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOut * end));
      if (percentage < 1) animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
      name: "Jordan Williams",
      year: "Senior, Computer Science",
      quote:
        "ColorStack UTD gave me the community I didn't know I needed. Being surrounded by people who look like me and are crushing it in tech made me believe I could do it too.",
    },
    {
      name: "Aaliyah Carter",
      year: "Junior, Software Engineering",
      quote:
        "The resume workshops and mock interviews through ColorStack helped me land a summer internship at Microsoft. I genuinely don't think I would have gotten it without this community.",
    },
    {
      name: "Marcus Thompson",
      year: "Sophomore, Computer Engineering",
      quote:
        "Walking into a room full of Black and Latinx engineers who are thriving. That's powerful. ColorStack changed how I see myself in this industry.",
    },
  ];

  const next = useCallback(() => {
    setDirection(1);
    setCurrentTestimonial((c) => (c + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentTestimonial((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const id = setInterval(next, 4500);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="flex flex-col w-full">
      {/* ── Hero ────────────────────────────────────── */}
      <section className="w-full flex flex-col md:flex-row min-h-[calc(100vh-64px)]">
        {/* Left – photo */}
        <div className="w-full md:w-[55%] h-[52vw] md:h-auto relative overflow-hidden">
          <img
            src={heroImg}
            alt="Black and Latinx computing students at UTD"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Right – text on light-tinted bg (mirrors OSU's blush panel) */}
        <div className="w-full md:w-[45%] flex flex-col justify-center bg-[#fdf4ee] px-10 md:px-16 lg:px-20 py-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <img src={logo} alt="ColorStack at UTD" className="h-24 w-auto rounded-2xl mb-8 object-contain bg-secondary p-3" />
            <h1 className="text-[clamp(2.4rem,4vw,3.8rem)] font-bold tracking-tight text-foreground leading-[1.12] mb-6">
              We get our members{" "}
              <span className="text-primary">cracked.</span>
              <br />
              Then we make sure
              <br />
              the world knows it.
            </h1>
            <p className="text-[1.05rem] text-foreground/70 mb-10 max-w-sm leading-relaxed">
              From DSA to cloud infrastructure to internship offers, we build technically strong students and connect them to real opportunities.
            </p>

            <Link href="/about">
              <button
                className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-3.5 text-[15px] font-semibold shadow-sm transition-all hover:shadow-md hover:-translate-y-px active:translate-y-0"
                data-testid="button-hero-join"
              >
                Become a Member
              </button>
            </Link>

            {/* Supporters marquee */}
            <div className="mt-14 overflow-hidden w-full">
              <p className="text-[11px] font-bold text-foreground/40 uppercase tracking-[0.15em] mb-4">
                Our Supporters
              </p>
              <div className="flex w-[200%] gap-10 animate-marquee items-center opacity-50">
                {["Google", "Microsoft", "Goldman Sachs", "Capital One", "Salesforce", "Stripe", "Dropbox"].map(
                  (s) => (
                    <span key={s} className="text-xl font-bold whitespace-nowrap text-foreground">
                      {s}
                    </span>
                  )
                )}
                {["Google", "Microsoft", "Goldman Sachs", "Capital One", "Salesforce", "Stripe", "Dropbox"].map(
                  (s) => (
                    <span key={`${s}-2`} className="text-xl font-bold whitespace-nowrap text-foreground">
                      {s}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission banner ──────────────────────────── */}
      <section className="bg-[#1a1a1a] py-20 md:py-28 text-center px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[clamp(2.6rem,6vw,5.5rem)] font-bold text-white tracking-tight"
        >
          Our Mission.
        </motion.h2>
      </section>

      {/* ── Mission text ────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="text-[1.35rem] md:text-[1.65rem] font-medium text-foreground/85 leading-relaxed"
          >
            ColorStack's core mission is to increase the number of Black, Latinx, and Indigenous students who graduate with Computer Science degrees and launch rewarding technical careers. We achieve this by building community, providing academic support, and fostering career development opportunities for underrepresented students in computing.
          </motion.p>
        </div>
      </section>

      {/* ── Mission pillars ─────────────────────────── */}
      <section className="bg-[#f7f7f7] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              number: "01",
              title: "Get Cracked",
              desc: "We build technically elite members. That means mastering Data Structures and Algorithms in Java and Python, building full stack applications with JavaScript, React, Node.js, and MongoDB, and deploying production ready projects on AWS and Azure with full CI/CD pipelines.",
              img: speedImg,
            },
            {
              number: "02",
              title: "Build Community",
              desc: "We bring together individuals who look like us, from all different backgrounds, and create a space where no one has to figure it out alone. Upperclassmen pour into underclassmen, and every member has access to mentorship, accountability, and people who genuinely want to see them win.",
            },
            {
              number: "03",
              title: "Get Connected",
              desc: "Once our members are built, we connect them to the opportunities they deserve. Internships, new grad roles, and industry relationships. No talented student goes unseen.",
            },
          ].map((pillar, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 border border-border/60 hover:border-primary/40 hover:shadow-lg transition-all duration-300 group flex flex-col overflow-hidden"
            >
              <span className="text-[3rem] font-black text-primary/15 leading-none mb-4 group-hover:text-primary/25 transition-colors">
                {pillar.number}
              </span>
              <h3 className="text-xl font-black mb-4 text-foreground">{pillar.title}</h3>
              <p className="text-[0.92rem] text-foreground/60 leading-relaxed">{pillar.desc}</p>
              {"img" in pillar && pillar.img && (
                <img
                  src={pillar.img}
                  alt=""
                  className="mt-6 w-full rounded-xl object-cover opacity-50"
                />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { num: 150, label: "Active Members", suffix: "+" },
            { num: 35, label: "Events This Year", suffix: "+" },
            { num: 60, label: "Internship Offers", suffix: "+" },
            { num: 15, label: "Industry Partners", suffix: "+" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="text-[3rem] md:text-[3.5rem] font-black text-white leading-none mb-2">
                <AnimatedCounter end={stat.num} />
                {stat.suffix}
              </div>
              <p className="text-primary text-[12px] font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-[2rem] md:text-[2.6rem] font-bold text-foreground mb-2">
              Don't take our word for it.
            </h2>
            <p className="text-foreground/50 text-[0.95rem]">Hear directly from our members.</p>
          </motion.div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -40 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-[#fdf4ee] rounded-2xl px-10 md:px-16 py-12 text-center">
                  <p className="text-[1.2rem] md:text-[1.45rem] font-medium italic text-foreground/80 leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <p className="font-bold text-foreground">{testimonials[currentTestimonial].name}</p>
                  <p className="text-primary text-sm font-medium mt-1">{testimonials[currentTestimonial].year}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-3 mt-7">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-border hover:border-primary/60 hover:text-primary transition-colors"
                data-testid="testimonial-prev"
              >
                <ChevronLeft size={18} />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > currentTestimonial ? 1 : -1); setCurrentTestimonial(i); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentTestimonial ? "bg-primary w-5" : "bg-border"}`}
                />
              ))}
              <button
                onClick={next}
                className="p-2 rounded-full border border-border hover:border-primary/60 hover:text-primary transition-colors"
                data-testid="testimonial-next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Get Involved ────────────────────────────── */}
      <section className="bg-[#f7f7f7] py-24 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Sponsorship",
              desc: "Hire the most technically prepared Black and Latinx engineers coming out of UTD. Access resume books, host events, build your pipeline.",
              cta: "Partner with us",
              href: "/sponsors",
              accent: false,
            },
            {
              title: "Get Cracked with Us",
              desc: "Join ColorStack UTD. We'll make sure you have the technical skills, the network, and the opportunities to land wherever you want.",
              cta: "Become a Member",
              href: "/about",
              accent: true,
            },
            {
              title: "Say Wassup",
              desc: "Questions? Want to collab? Think you can help our members? We want to hear from you.",
              cta: "Get in Touch",
              href: "/about",
              accent: false,
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`rounded-2xl p-8 flex flex-col ${
                card.accent ? "bg-primary text-white shadow-lg shadow-primary/20" : "bg-white border border-border/60"
              }`}
            >
              <h3 className={`text-lg font-bold mb-3 ${card.accent ? "text-white" : "text-foreground"}`}>
                {card.title}
              </h3>
              <p className={`text-sm leading-relaxed mb-8 flex-1 ${card.accent ? "text-white/85" : "text-foreground/60"}`}>
                {card.desc}
              </p>
              <Link href={card.href}>
                <button
                  className={`rounded-full px-6 py-3 text-[14px] font-semibold transition-all hover:-translate-y-px ${
                    card.accent
                      ? "bg-white text-primary hover:bg-white/90"
                      : "bg-foreground text-white hover:bg-foreground/90"
                  }`}
                  data-testid={`button-card-${i}`}
                >
                  {card.cta}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

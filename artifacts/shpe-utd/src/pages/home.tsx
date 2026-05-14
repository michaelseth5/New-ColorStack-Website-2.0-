import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Terminal, GitMerge, Globe } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState, useCallback, useRef } from "react";
import eboardHajar from "@assets/Hajar_Abdulkadir_1778782883426.jpg";
import eboardOluwadamilare from "@assets/Oluwadamilare_Sunmola_1778782883429.jpg";
import eboardMichael from "@assets/Michael_Katongole_1778782883428.png";
import eboardRamzi from "@assets/Ramzi_Burhan_1778782883429.jpg";
import eboardMarwan from "@assets/Marwan_Hegazy_1778782883427.jpg";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const heroImg = `${BASE}/hero.jpg`;
const logo = `${BASE}/logo-bg.png`;


const carouselSlides = [
  { src: `${BASE}/gbm-1.jpg`, event: "First GBM", date: "Sep 15, 2025" },
  { src: `${BASE}/gbm-2.jpg`, event: "First GBM", date: "Sep 15, 2025" },
  { src: `${BASE}/gbm-3.jpg`, event: "First GBM", date: "Sep 15, 2025" },
  { src: `${BASE}/rn-1.jpg`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-2.jpg`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-3.jpg`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-4.jpg`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-5.jpg`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/at-1.jpg`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/at-2.jpg`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/at-3.jpg`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/at-4.jpg`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/at-5.jpg`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/sk-1.jpg`, event: "Spring Kick-Off GBM", date: "Feb 14, 2026" },
  { src: `${BASE}/sk-2.jpg`, event: "Spring Kick-Off GBM", date: "Feb 14, 2026" },
  { src: `${BASE}/sk-3.jpg`, event: "Spring Kick-Off GBM", date: "Feb 14, 2026" },
  { src: `${BASE}/sk-4.jpg`, event: "Spring Kick-Off GBM", date: "Feb 14, 2026" },
  { src: `${BASE}/tp-1.jpg`, event: "Debugging Your Path Into Tech", date: "Feb 27, 2026" },
  { src: `${BASE}/tp-2.jpg`, event: "Debugging Your Path Into Tech", date: "Feb 27, 2026" },
  { src: `${BASE}/tp-3.jpg`, event: "Debugging Your Path Into Tech", date: "Feb 27, 2026" },
  { src: `${BASE}/tp-4.jpg`, event: "Debugging Your Path Into Tech", date: "Feb 27, 2026" },
  { src: `${BASE}/api101.jpg`, event: "API 101: Wall St. Decoded", date: "Mar 27, 2026" },
];

function EventCarousel() {
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(3);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = carouselSlides.length;

  useEffect(() => {
    const update = () => {
      if (window.innerWidth >= 1024) setPerView(3);
      else if (window.innerWidth >= 640) setPerView(2);
      else setPerView(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, total - perView);

  const next = useCallback(() => setIndex(i => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);
  const prev = useCallback(() => setIndex(i => (i <= 0 ? maxIndex : i - 1)), [maxIndex]);

  useEffect(() => {
    timerRef.current = setInterval(next, 3500);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [next]);

  useEffect(() => {
    setIndex(i => Math.min(i, maxIndex));
  }, [maxIndex]);

  return (
    <section className="bg-[#114634] py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-10 text-center tracking-tight" style={{ fontFamily: "'Fira Code', monospace" }}>
          <span className="text-white/30">&lt;</span>
          <span className="text-white"> Our Events </span>
          <span className="text-white/30">/&gt;</span>
        </h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {carouselSlides.map((slide, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 px-1.5"
                  style={{ width: `${100 / perView}%` }}
                >
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                      src={slide.src}
                      alt={slide.event}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-bold text-sm leading-tight">{slide.event}</p>
                      <p className="text-white/70 text-xs mt-0.5">{slide.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="absolute left-[-14px] top-1/2 -translate-y-1/2 bg-white/20 hover:bg-[#EC7524] text-white rounded-full p-2.5 transition-all duration-200 backdrop-blur-sm z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="absolute right-[-14px] top-1/2 -translate-y-1/2 bg-white/20 hover:bg-[#EC7524] text-white rounded-full p-2.5 transition-all duration-200 backdrop-blur-sm z-10"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8 flex-wrap">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "bg-[#EC7524] w-6" : "bg-white/30 w-2 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
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
  }, [inView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
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
              Then we make sure the world knows it.
              <span className="cursor-blink text-primary ml-1 font-light">|</span>
            </h1>
            <p className="text-[1.05rem] text-foreground/70 mb-10 max-w-sm leading-relaxed">
              ColorStack UTD is building the next generation of Black, Latinx, and Indigenous engineers at UT Dallas. Come get technical. Come get connected.
            </p>

            <Link href="/about">
              <button
                className="bg-[#114634] hover:bg-[#0d3528] text-white rounded-full px-8 py-3.5 text-[15px] font-bold shadow-sm transition-all hover:shadow-md hover:-translate-y-px active:translate-y-0"
                data-testid="button-hero-join"
              >
                Join the Chapter
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── How We Deliver ──────────────────────────── */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-black text-foreground text-center mb-14"
          >
            Our Three Pillars
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Get Cracked",
                desc: "We build technically elite members. That means mastering Data Structures and Algorithms in Java and Python, building full stack applications with JavaScript, React, Node.js, and MongoDB, and deploying production ready projects on AWS and Azure with full CI/CD pipelines.",
                img: `${BASE}/speed.jpg`,
                icon: <Terminal size={18} strokeWidth={1.8} />,
                bg: "#EC7524",
              },
              {
                title: "Build Community",
                desc: "We bring together individuals who look like us, from all different backgrounds, and create a space where no one has to figure it out alone. Upperclassmen pour into underclassmen, and every member has access to mentorship, accountability, and people who genuinely want to see them win.",
                img: `${BASE}/community.jpg`,
                icon: <GitMerge size={18} strokeWidth={1.8} />,
                bg: "#114634",
              },
              {
                title: "Get Connected",
                desc: "Once our members are built, we connect them to the opportunities they deserve. Internships, new grad roles, and industry relationships. No talented student goes unseen.",
                img: `${BASE}/connected.png`,
                icon: <Globe size={18} strokeWidth={1.8} />,
                bg: "#1a1a1a",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl p-7 flex flex-col shadow-sm"
                style={{ backgroundColor: pillar.bg }}
              >
                <div className="w-9 h-9 rounded-full bg-white/15 text-white flex items-center justify-center mb-5 flex-shrink-0">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3">{pillar.title}</h3>
                <p className="text-[0.93rem] text-white/70 leading-relaxed mb-6 flex-1">{pillar.desc}</p>
                <img
                  src={pillar.img}
                  alt={pillar.title}
                  className="w-full rounded-xl object-cover"
                  style={{ maxHeight: "220px" }}
                />
              </motion.div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center pt-6 pb-2">
            <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[#EC7524]/70 text-xs mb-5 tracking-wide">// what we do</p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="text-[1.2rem] md:text-[1.45rem] font-medium text-foreground/80 leading-relaxed"
            >
              ColorStack's core mission is to increase the number of Black, Latinx, and Indigenous students who graduate with Computer Science degrees and launch rewarding technical careers. We achieve this by building community, providing academic support, and fostering career development opportunities for underrepresented students in computing.
            </motion.p>
          </div>

        </div>
      </section>

      <EventCarousel />

      {/* ── Mission banner ──────────────────────────── */}
      <section className="bg-[#1a1a1a] py-20 md:py-28 text-center px-4">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-[clamp(2.6rem,6vw,5.5rem)] font-bold text-white tracking-tight"
          style={{ fontFamily: "'Fira Code', monospace" }}
        >
          <span className="text-white/30">&lt;</span>
          <span className="text-white"> Our Mission </span>
          <span className="text-white/30">/&gt;</span>
        </motion.h2>
      </section>

      {/* ── Stats ───────────────────────────────────── */}
      <section className="bg-[#1a1a1a] py-24 px-6">
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { num: 60, label: "Active Members", suffix: "+" },
            { num: 10, label: "Events This Year", suffix: "+" },
            { num: 20, label: "Internship Offers", suffix: "+" },
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

      {/* ── Eboard Preview ──────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{ fontFamily: "'Fira Code', monospace" }}
            className="text-primary/70 text-xs mb-4 tracking-wide"
          >
            // the people behind the mission
          </motion.p>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-foreground mb-4"
            style={{ fontFamily: "'Fira Code', monospace" }}
          >
            <span className="text-foreground/25">&lt;</span>
            <span> Meet The Eboard </span>
            <span className="text-foreground/25">/&gt;</span>
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-foreground/55 text-[0.95rem] mb-14 max-w-md mx-auto"
          >
            The people building this chapter from the ground up.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-10 mb-12">
            {[
              { name: "Hajar Abdulkadir", title: "Co-President", img: eboardHajar },
              { name: "Oluwadamilare Sunmola", title: "Co-President", img: eboardOluwadamilare },
              { name: "Michael Katongole", title: "Vice President", img: eboardMichael },
              { name: "Ramzi Burhan", title: "Treasurer", img: eboardRamzi },
              { name: "Marwan Hegazy", title: "Secretary", img: eboardMarwan },
            ].map((member, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex flex-col items-center w-[120px]"
              >
                <div className="w-20 h-20 rounded-full overflow-hidden mb-3 border-2 border-border/50 shadow-sm">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top" />
                </div>
                <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[0.58rem] text-primary/65 mb-1 leading-tight">
                  role = "{member.title}"
                </p>
                <p className="text-sm font-bold text-foreground leading-snug text-center">{member.name}</p>
              </motion.div>
            ))}
          </div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <Link href="/board">
              <button className="bg-[#114634] text-white rounded-full px-8 py-3.5 text-[14px] font-semibold hover:bg-[#114634]/90 transition-all hover:-translate-y-px">
                Meet The Full Board
              </button>
            </Link>
          </motion.div>
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

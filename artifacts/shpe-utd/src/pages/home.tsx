import { m as motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState, useCallback } from "react";

import eboardHajar from "@assets/Hajar_Abdulkadir_1778782883426.jpg";
import eboardOluwadamilare from "@assets/Oluwadamilare_Sunmola_1778782883429.jpg";
import eboardMichael from "@assets/Michael_Katongole_1778782883428.png";
import eboardRamzi from "@assets/Ramzi_Burhan_1778782883429.jpg";
import eboardJose from "@assets/Jose_Rogel_1778782883427.png";
import eboardHenos from "@assets/Henos_1778797249996.webp";
import eboardHasset from "@assets/Hasset_Getachew_1778782883426.jpg";
import eboardAnthonio from "@assets/Anthonio_Odonkor.jpg";
import eboardTimage from "@assets/Timage_Abubaker_1778782883430.jpg";
import eboardMayowa from "@assets/Mayowa_Akinyede.png";
import eboardAlejandro from "@assets/Alejandro_Gomez_De_Mendieta.jpg";
import eboardNoha from "@assets/Noha_Markose_1778782883428.jpg";
import eboardMamoudou from "@assets/Mamoudou_Balde.jpg";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const heroImg = `${BASE}/hero.webp`;
const logo = `${BASE}/logo-bg.webp`;
const utdIcon = `${BASE}/colorstack-logo.webp`;


const techPanelEvent = "Debugging Your Path Into Tech";
const techPanelDate = "Feb 27, 2026";

type Slide = { src: string; event: string; date: string };

/** Pinned opening slides: positions 3–4 show the 3rd and 4th new tech panel photos. */
const featuredCarouselSlides: Slide[] = [
  { src: `${BASE}/gbm-1.webp`, event: "First GBM", date: "Sep 15, 2025" },
  { src: `${BASE}/gbm-2.webp`, event: "First GBM", date: "Sep 15, 2025" },
  { src: `${BASE}/tp-9.webp`, event: techPanelEvent, date: techPanelDate },
  { src: `${BASE}/tp-10.webp`, event: techPanelEvent, date: techPanelDate },
  { src: `${BASE}/gbm-3.webp`, event: "First GBM", date: "Sep 15, 2025" },
];

const carouselSlides = [
  ...featuredCarouselSlides,
  { src: `${BASE}/rn-1.webp`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-2.webp`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-3.webp`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-4.webp`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-5.webp`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-6.webp`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-7.webp`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-8.webp`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-9.webp`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-10.webp`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/rn-11.webp`, event: "Resume Night", date: "Sep 21, 2025" },
  { src: `${BASE}/at-1.webp`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/at-2.webp`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/at-4.webp`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/at-5.webp`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/at-6.webp`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/at-7.webp`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/at-8.webp`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/at-9.webp`, event: "AfroTech Meetup", date: "Nov 13, 2025" },
  { src: `${BASE}/sk-1.webp`, event: "Spring Kick-Off GBM", date: "Feb 14, 2026" },
  { src: `${BASE}/sk-2.webp`, event: "Spring Kick-Off GBM", date: "Feb 14, 2026" },
  { src: `${BASE}/sk-3.webp`, event: "Spring Kick-Off GBM", date: "Feb 14, 2026" },
  { src: `${BASE}/sk-4.webp`, event: "Spring Kick-Off GBM", date: "Feb 14, 2026" },
  { src: `${BASE}/sk-5.webp`, event: "Spring Kick-Off GBM", date: "Feb 14, 2026" },
  { src: `${BASE}/sk-6.webp`, event: "Spring Kick-Off GBM", date: "Feb 14, 2026" },
  { src: `${BASE}/tp-1.webp`, event: "Debugging Your Path Into Tech", date: "Feb 27, 2026" },
  { src: `${BASE}/tp-2.webp`, event: "Debugging Your Path Into Tech", date: "Feb 27, 2026" },
  { src: `${BASE}/tp-3.webp`, event: "Debugging Your Path Into Tech", date: "Feb 27, 2026" },
  { src: `${BASE}/tp-4.webp`, event: "Debugging Your Path Into Tech", date: "Feb 27, 2026" },
  { src: `${BASE}/tp-5.webp`, event: "Debugging Your Path Into Tech", date: "Feb 27, 2026" },
  { src: `${BASE}/tp-6.webp`, event: techPanelEvent, date: techPanelDate },
  { src: `${BASE}/tp-7.webp`, event: techPanelEvent, date: techPanelDate },
  { src: `${BASE}/tp-8.webp`, event: techPanelEvent, date: techPanelDate },
  { src: `${BASE}/tp-9.webp`, event: techPanelEvent, date: techPanelDate },
  { src: `${BASE}/tp-10.webp`, event: techPanelEvent, date: techPanelDate },
  { src: `${BASE}/tp-11.webp`, event: techPanelEvent, date: techPanelDate },
  { src: `${BASE}/api101.webp`, event: "API 101: Wall St. Decoded", date: "Mar 27, 2026" },
  { src: `${BASE}/cf-1.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-2.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-3.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-4.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-5.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-6.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-7.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-8.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-9.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-10.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-11.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-12.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-13.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
  { src: `${BASE}/cf-14.webp`, event: "Career Fair Prep 101 Workshop", date: "Sep 9, 2026" },
];

const featuredSrcs = new Set(featuredCarouselSlides.map((s) => s.src));

function fisherYates<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildShuffledSlides(slides: Slide[]): Slide[] {
  const seen = new Set<string>();
  const unique = slides.filter(s => { if (seen.has(s.src)) return false; seen.add(s.src); return true; });

  const groupMap = new Map<string, Slide[]>();
  for (const slide of unique) {
    const g = groupMap.get(slide.event) ?? [];
    g.push(slide);
    groupMap.set(slide.event, g);
  }

  // Shuffle within each event group, then shuffle the event order
  const groups = fisherYates([...groupMap.values()].map(fisherYates));

  // Round-robin interleave so adjacent slides are never from the same event
  const result: Slide[] = [];
  const maxLen = Math.max(...groups.map(g => g.length));
  for (let i = 0; i < maxLen; i++) {
    for (const group of groups) {
      if (i < group.length) result.push(group[i]);
    }
  }
  return result;
}

function cardsPerView() {
  return window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
}

function EventCarousel() {
  const [slides] = useState<Slide[]>(() => [
    ...featuredCarouselSlides,
    ...buildShuffledSlides(carouselSlides.filter((s) => !featuredSrcs.has(s.src))),
  ]);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(cardsPerView);
  const total = slides.length;

  useEffect(() => {
    const update = () => setPerView(cardsPerView());
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, total - perView);

  const next = useCallback(() => setIndex(i => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);
  const prev = useCallback(() => setIndex(i => (i <= 0 ? maxIndex : i - 1)), [maxIndex]);


  useEffect(() => {
    setIndex(i => Math.min(i, maxIndex));
  }, [maxIndex]);

  return (
    <section className="chapter-section chapter-events">
      <div className="max-w-7xl mx-auto">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="chapter-heading mb-10">
          Our Events
        </motion.h2>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="chapter-carousel-track flex"
              style={{ transform: `translateX(-${index * (100 / perView)}%)` }}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="relative flex-shrink-0 px-1.5"
                  style={{ width: `${100 / perView}%` }}
                >
                  <div className="chapter-event-card">
                    <img
                      src={slide.src}
                      alt={slide.event}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    <div className="px-5 py-4">
                      <p className="font-bold text-sm leading-tight">{slide.event}</p>
                      <p className="text-muted-foreground text-xs mt-1">{slide.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prev}
            className="chapter-carousel-arrow chapter-carousel-left"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            className="chapter-carousel-arrow chapter-carousel-right"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="mt-6">
          <select
            className="chapter-event-select"
            aria-label="Go to slide"
            value={index}
            onChange={event => setIndex(Number(event.target.value))}
          >
            {slides.slice(0, maxIndex + 1).map((slide, position) => (
              <option key={position} value={position}>{position + 1}. {slide.event}</option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function ChapterHero() {
  return (
    <section className="chapter-hero">
      <div className="chapter-shell chapter-hero-grid">
        <motion.div
          className="chapter-hero-copy"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.p variants={fadeUp} transition={{ duration: .7, ease }} className="chapter-kicker">
            At The University Of Texas At Dallas
          </motion.p>
          <motion.h1 variants={fadeUp} transition={{ duration: .7, ease }}>
            ColorStack
          </motion.h1>
          <motion.p variants={fadeUp} transition={{ duration: .7, ease }} className="chapter-tagline">
            Come get technical. Come get connected.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: .7, ease }}>
            <Link href="/join" className="chapter-button" data-testid="button-hero-join">
              Join The Chapter <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </motion.div>
        <div className="chapter-hero-frame">
          <img
            src={heroImg}
            srcSet={`${BASE}/hero-mobile.webp 800w, ${heroImg} 1600w`}
            sizes="(min-width: 900px) 55vw, 100vw"
            alt="Black and Latinx computing students at UTD"
            width={1600}
            height={1067}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>
      <div className="chapter-shell chapter-hero-detail">
        <div>
          <div className="chapter-mark">
            <img loading="lazy" decoding="async" src={logo} alt="ColorStack" width={44} height={44} />
            <img loading="lazy" decoding="async" src={utdIcon} alt="UT Dallas" width={24} height={24} />
            <span>ColorStack <small>AT UTD</small></span>
          </div>
          <p className="chapter-kicker">// Welcome To</p>
          <p className="chapter-intro">Building The Next Generation Of Black, Latinx, And Indigenous Engineers At UT Dallas.</p>
          <Link href="/about" className="chapter-text-link" aria-label="Learn More about ColorStack UTD">Learn More <ArrowUpRight size={16} aria-hidden="true" /></Link>
        </div>
        <ol className="chapter-pledges">
          {[
            "We Pour Into Our Members First.",
            "Build Their Confidence, Sharpen Their Skills.",
            "Get Them Technically Sound.",
            "Then We Make Sure The World Knows It!!",
          ].map((text, index) => (
            <li key={text}><span>{String(index + 1).padStart(2, "0")}</span>{text}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}

interface EboardMember {
  name: string;
  title: string;
  img: string;
}

/** Front row shown by default, in display order — Michael Katongole (President) sits in the
 * center (index 2 of 5). */
const eboardFront: EboardMember[] = [
  { name: "Jose Juan Rogel Ramirez", title: "Vice President", img: eboardJose },
  { name: "Henos Habteab Tekie", title: "Secretary", img: eboardHenos },
  { name: "Michael Katongole", title: "President", img: eboardMichael },
  { name: "Hasset Getachew", title: "Treasurer", img: eboardHasset },
  { name: "Anthonio Duke Odonkor", title: "Committee Chair / Corporate & Outreach Director", img: eboardAnthonio },
];

/** Remaining 2026–2027 officers (per the full roster on /board) the arrows rotate into. */
const eboardMore: EboardMember[] = [
  { name: "Hajar Abdulkadir", title: "Founder", img: eboardHajar },
  { name: "Oluwadamilare Sunmola", title: "Founder", img: eboardOluwadamilare },
  { name: "Timage Abubaker", title: "Public Communications", img: eboardTimage },
  { name: "Mayowa Akinyede", title: "Tech Coordinator", img: eboardMayowa },
  { name: "Alejandro Gomez De Mendieta", title: "Tech Coordinator", img: eboardAlejandro },
  { name: "Noha Markose", title: "Historian", img: eboardNoha },
  { name: "Mamoudou Balde", title: "Academic Chair", img: eboardMamoudou },
  { name: "Ramzi Burhan", title: "Treasurer Deputy", img: eboardRamzi },
];

const eboardMembers: EboardMember[] = [...eboardFront, ...eboardMore];

function EboardPreview() {
  const [page, setPage] = useState(0);
  const visibleCount = 5;
  const total = eboardMembers.length;
  const pageCount = Math.ceil(total / visibleCount);

  const next = () => setPage((p) => (p + 1) % pageCount);
  const prev = () => setPage((p) => (p - 1 + pageCount) % pageCount);

  const visible = eboardMembers.slice(page * visibleCount, page * visibleCount + visibleCount);

  return (
    <section className="chapter-section chapter-board">
      <div className="chapter-shell">
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}

          className="text-primary/70 text-xs mb-4 tracking-wide"
        >
          // the people behind the mission
        </motion.p>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-3xl md:text-4xl font-black text-foreground mb-4"

        >
          <span> Meet The Eboard </span>
        </motion.h2>
        <motion.p
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-muted-foreground text-base mb-10 max-w-md"
        >
          The people building this chapter from the ground up.
        </motion.p>

        <div className="flex items-center justify-center gap-3 sm:gap-6 mb-4">
          <button
            onClick={prev}
            className="shrink-0 p-2 rounded-full border border-border hover:border-primary/60 hover:text-primary transition-colors"
            aria-label="Show previous board member"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="chapter-board-row">
            {visible.map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ delay: i * 0.1, duration: .7, ease }}
                className="chapter-board-card"
              >
                <div className="aspect-[4/5] w-full overflow-hidden rounded-[16px] mb-4">
                  <img src={member.img} alt={member.name} loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
                </div>
                <p className="text-[0.58rem] text-[#B54708] mb-1 leading-tight">
                  role = "{member.title}"
                </p>
                <p className="text-sm font-bold text-foreground leading-snug">{member.name}</p>
              </motion.div>
            ))}
          </div>

          <button
            onClick={next}
            className="shrink-0 p-2 rounded-full border border-border hover:border-primary/60 hover:text-primary transition-colors"
            aria-label="Show next board member"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex justify-center gap-1.5 mb-12">
          {Array.from({ length: pageCount }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="chapter-dot"
              aria-pressed={i === page}
              aria-label={`Show board members page ${i + 1}`}
            />
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
  );
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduceMotion = useReducedMotion();

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

  return (
    <div className="flex flex-col w-full">

      <ChapterHero />

      {/* ── What We Do ──────────────────────────────── */}
      <section className="chapter-section chapter-mission">
        <div className="chapter-shell chapter-sticky-grid">
          <div className="chapter-sticky-heading">
            <p className="chapter-kicker mb-5">// what we do</p>
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="chapter-heading mb-5"
            >
              Three Pillars. One Mission.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              className="text-[1.1rem] md:text-[1.25rem] font-medium text-foreground/70 leading-relaxed"
            >
              ColorStack's Core Mission Is To Increase The Number Of Black, Latinx, And Indigenous Students Who Graduate With Computer Science Degrees And Launch Rewarding Technical Careers. We Do That Through Three Pillars.
            </motion.p>
          </div>

          <div className="chapter-feature-list">
            {[
              {
                title: "Get Technically Sharp",
                desc: "We build technically elite members. That means mastering Data Structures and Algorithms in Java and Python, building full stack applications with JavaScript, React, Node.js, and MongoDB, and deploying production ready projects on AWS and Azure with full CI/CD pipelines.",
                img: `${BASE}/speed.webp`,
              },
              {
                title: "Build Community",
                desc: "We bring together individuals who look like us, from all different backgrounds, and create a space where no one has to figure it out alone. Upperclassmen pour into underclassmen, and every member has access to mentorship, accountability, and people who genuinely want to see them win.",
                img: `${BASE}/community.webp`,
              },
              {
                title: "Get Connected",
                desc: "Once our members are built, we connect them to the opportunities they deserve. Internships, new grad roles, and industry relationships. No talented student goes unseen.",
                img: `${BASE}/connected.webp`,
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: .7, ease }}
                className="chapter-feature-card"
              >
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
                <img
                  src={pillar.img}
                  alt={pillar.title}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full rounded-[16px] object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="chapter-results">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="chapter-heading mb-10"

            >
              Our Results
            </motion.h2>
            <div className="chapter-stats">
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
                  transition={{ delay: i * 0.1, duration: .7, ease }}
                >
                  <div className="chapter-stat-number">
                    {stat.num}{stat.suffix}
                  </div>
                  <p className="chapter-stat-label">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <EventCarousel />

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
              <span> Member Testimonials </span>
            </h2>
            <p className="text-foreground/50 text-[0.95rem]">Hear directly from our members.</p>
          </motion.div>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial}
                custom={direction}
                initial={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: reduceMotion ? 1 : 0, x: reduceMotion ? 0 : direction * -24 }}
                transition={{ duration: reduceMotion ? 0 : 0.38, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="chapter-quote">
                  <p className="text-[1.2rem] md:text-[1.45rem] font-medium italic text-foreground/80 leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-3 mt-7">
              <button
                onClick={prev}
                className="p-2 rounded-full border border-border hover:border-primary/60 hover:text-primary transition-colors"
                aria-label="Previous testimonial" data-testid="testimonial-prev"
              >
                <ChevronLeft size={18} />
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => { setDirection(i > currentTestimonial ? 1 : -1); setCurrentTestimonial(i); }}
                  className="chapter-dot"
                  aria-pressed={i === currentTestimonial}
                />
              ))}
              <button
                onClick={next}
                className="p-2 rounded-full border border-border hover:border-primary/60 hover:text-primary transition-colors"
                aria-label="Next testimonial" data-testid="testimonial-next"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      <EboardPreview />

      {/* ── Get Involved ────────────────────────────── */}
      <section className="chapter-section chapter-join">
        <div className="chapter-shell chapter-action-grid">
          {[
            {
              title: "Sponsorship",
              desc: "Hire the most technically prepared Black and Latinx engineers coming out of UTD. Access resume books, host events, build your pipeline.",
              cta: "Partner with us",
              href: "/sponsors",
              accent: false,
            },
            {
              title: "Come Get Locked In",
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
              transition={{ delay: i * 0.1, duration: .7, ease }}
              className={`chapter-action-card p-8 flex flex-col ${
                card.accent ? "bg-secondary text-white" : "bg-white border border-border/60"
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

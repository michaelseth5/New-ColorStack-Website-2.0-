import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Mail, Linkedin, ChevronRight } from "lucide-react";
import { SiInstagram } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import team1 from "@/assets/images/team-1.png";
import team2 from "@/assets/images/team-2.png";
import team3 from "@/assets/images/team-3.png";
import team4 from "@/assets/images/team-4.png";
import team5 from "@/assets/images/team-5.png";
import heroBg from "@/assets/images/hero-bg.png";

import logoCiti from "@/assets/images/companies/citi.png";
import logoJPMC from "@/assets/images/companies/jpmc.jpg";
import logoJnJ from "@/assets/images/companies/jnj.png";
import logoPurdue from "@/assets/images/companies/purdue.jpg";
import logoEA from "@/assets/images/companies/ea-sports.svg";
import logoStellantis from "@/assets/images/companies/stellantis.png";
import logoMicrosoft from "@/assets/images/companies/microsoft.png";
import logoCapitalOne from "@/assets/images/companies/capital-one.png";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const events = [
  {
    title: "Resume Workshop",
    date: "Sep 15, 2025",
    time: "6:00 PM",
    location: "ECSW 1.100",
    type: "Career",
    color: "text-primary",
  },
  {
    title: "Big Tech Panel",
    date: "Sep 22, 2025",
    time: "7:00 PM",
    location: "TI Auditorium",
    type: "Networking",
    color: "text-accent",
  },
  {
    title: "LeetCode Grind",
    date: "Oct 5, 2025",
    time: "5:30 PM",
    location: "SSA 14.244",
    type: "Technical",
    color: "text-primary",
  },
  {
    title: "Industry Coffee Chat",
    date: "Oct 18, 2025",
    time: "5:00 PM",
    location: "SSA 21.118",
    type: "Networking",
    color: "text-accent",
  },
];

const team = [
  { name: "Marcus Johnson", role: "President", image: team1 },
  { name: "Elena Rodriguez", role: "Vice President", image: team2 },
  { name: "Sarah Williams", role: "Treasurer", image: team3 },
  { name: "David Martinez", role: "Events Lead", image: team4 },
  { name: "James Carter", role: "Technical Director", image: team5 },
  { name: "Michael Katongole", role: "Tech Coordinator", image: team1, internLogo: logoCiti, internCompany: "Citi" },
  { name: "Hajar Abdulkadir", role: "Member", image: team2, internLogo: logoJPMC, internCompany: "JPMC" },
  { name: "Ugonna", role: "Member", image: team3, internLogo: logoJPMC, internCompany: "JPMC" },
  { name: "Elizabeth Gonzalez", role: "Member", image: team4, internLogo: logoJPMC, internCompany: "JPMC" },
  { name: "Rodolfo", role: "Member", image: team5, internLogo: logoJPMC, internCompany: "JPMC" },
  { name: "Musa Mudesir", role: "Member", image: team1, internLogo: logoJnJ, internCompany: "Johnson & Johnson" },
  { name: "Alejandro Gomez De Mendieta", role: "Tech Coordinator", image: team2, internLogo: logoPurdue, internCompany: "Purdue" },
  { name: "Mayowa Akinyede", role: "Member", image: team3, internLogo: logoEA, internCompany: "EA Sports" },
  { name: "Mamoudou Balde", role: "Member", image: team4, internLogo: logoStellantis, internCompany: "Stellantis" },
  { name: "Ramzi Burhan", role: "Member", image: team5, internLogo: logoMicrosoft, internCompany: "Microsoft" },
  { name: "Oluwadamilare Sunmola", role: "Member", image: team1, internLogo: logoCapitalOne, internCompany: "Capital One" },
];

const sponsors = {
  platinum: ["Google", "Microsoft"],
  gold: ["Capital One", "JPMorgan Chase"],
  silver: ["Toyota", "Lockheed Martin"],
};

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">

      {/* Subtle background orbs — less aggressive than before */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-8%] w-[35%] h-[35%] rounded-full bg-primary/15 blur-[130px]" />
        <div className="absolute bottom-[5%] left-[-5%] w-[30%] h-[30%] rounded-full bg-accent/12 blur-[110px]" />
      </div>

      {/* ── NAVBAR ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/8 bg-background/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-[70px] flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            ColorStack <span className="text-primary">UTD</span>
          </span>

          <div className="hidden md:flex items-center gap-8">
            {["About", "Events", "Team", "Sponsors", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          <Button
            data-testid="button-join-nav"
            asChild
            className="rounded-full px-5 h-9 text-sm font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href="#contact">Join Us</a>
          </Button>
        </div>
      </nav>

      {/* ── HERO — full-bleed photo (SHPE) + gradient overlay + ACM text ── */}
      <section className="relative h-screen min-h-[640px] flex items-end">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="ColorStack UTD community"
            className="w-full h-full object-cover"
          />
          {/* Multi-stop gradient overlay: photo at top, dark at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
          {/* Subtle ACM-style orb tint on top of photo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10" />
        </div>

        {/* Hero content — bottom-aligned like SHPE */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp} className="mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs font-medium text-primary backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                Now accepting Fall 2025 applications
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.05] mb-6"
            >
              Where Ambition<br />
              Meets{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-accent">
                Community.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-white/75 max-w-xl leading-relaxed mb-8"
            >
              First-gen and underrepresented computing students at UT Dallas, united to break into top tech and change what the industry looks like.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Button
                data-testid="button-join-hero"
                size="lg"
                asChild
                className="rounded-full px-7 h-12 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <a href="#contact">
                  Join ColorStack <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                data-testid="button-instagram-hero"
                size="lg"
                variant="outline"
                asChild
                className="rounded-full px-7 h-12 text-base border-white/20 bg-white/10 hover:bg-white/15 text-white backdrop-blur-sm"
              >
                <a href="https://www.instagram.com/colorstackutd/" target="_blank" rel="noopener noreferrer">
                  <SiInstagram className="mr-2 h-4 w-4" /> Follow on Instagram
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-40">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-white" />
        </div>
      </section>

      {/* ── STATS STRIP (SHPE-inspired horizontal band) ── */}
      <section className="border-y border-white/8 bg-white/3 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "100+", label: "Active Members" },
            { value: "50+", label: "Internships Secured" },
            { value: "20+", label: "Events Per Year" },
            { value: "15+", label: "Partner Companies" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <main className="relative z-10">

        {/* ── ABOUT (SHPE two-column layout) ── */}
        <section id="about" className="py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">

              {/* Left: text block */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className="space-y-6"
              >
                <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Who We Are
                </motion.p>
                <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight leading-snug">
                  Building the Next Generation of Tech Leaders.
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed text-base">
                  ColorStack UTD exists to increase the number of Black and Latinx students in computing and tech careers. We offer community, academic support, and career development so every member has what they need to thrive — from freshman year to full-time offer.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <Button
                    data-testid="button-learn-more"
                    variant="outline"
                    asChild
                    className="rounded-full border-white/15 bg-white/5 hover:bg-white/10 gap-2"
                  >
                    <a href="#contact">
                      Learn More <ChevronRight className="h-4 w-4" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Right: pillar cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={stagger}
                className="grid grid-cols-1 gap-4"
              >
                {[
                  {
                    icon: "👥",
                    title: "Community",
                    desc: "Find your people. A network of peers who understand your journey and push you forward.",
                    accent: "border-l-primary",
                  },
                  {
                    icon: "💼",
                    title: "Career Prep",
                    desc: "Resume reviews, mock interviews, and direct recruiter connections at top tech firms.",
                    accent: "border-l-accent",
                  },
                  {
                    icon: "📚",
                    title: "Academic Support",
                    desc: "Study groups, tutoring, and mentorship from peers who've been where you are.",
                    accent: "border-l-primary",
                  },
                ].map((pillar, i) => (
                  <motion.div key={i} variants={fadeUp}>
                    <Card className={`border border-white/8 bg-card/40 backdrop-blur-md border-l-4 ${pillar.accent} hover:bg-card/60 transition-colors`}>
                      <CardContent className="p-5 flex items-start gap-4">
                        <span className="text-2xl mt-0.5">{pillar.icon}</span>
                        <div>
                          <h3 className="font-semibold text-base mb-1">{pillar.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── EVENTS ── */}
        <section id="events" className="py-28 bg-white/[0.02] border-y border-white/6">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
            >
              <div>
                <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                  What's Coming Up
                </motion.p>
                <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight">
                  Upcoming Events
                </motion.h2>
              </div>
              <motion.div variants={fadeUp}>
                <Button
                  data-testid="button-view-calendar"
                  variant="outline"
                  className="rounded-full border-white/15 bg-transparent hover:bg-white/5 text-sm"
                >
                  View Full Calendar
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid md:grid-cols-2 gap-5"
            >
              {events.map((event, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <Card
                    data-testid={`card-event-${i}`}
                    className="bg-card/40 border-white/8 backdrop-blur-md group hover:bg-card/65 transition-all duration-300 overflow-hidden"
                  >
                    <div className="h-0.5 w-full bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    <CardContent className="p-6 flex items-start gap-5">
                      {/* Date block — SHPE style */}
                      <div className="flex-shrink-0 w-14 text-center">
                        <div className="text-2xl font-bold text-primary leading-none">
                          {event.date.split(" ")[1].replace(",", "")}
                        </div>
                        <div className="text-xs text-muted-foreground uppercase tracking-wide mt-0.5">
                          {event.date.split(" ")[0]}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-xs font-semibold uppercase tracking-wide mb-1 ${event.color}`}>
                          {event.type}
                        </div>
                        <h3 className="font-bold text-lg leading-tight mb-2">{event.title}</h3>
                        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" /> {event.time}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5" /> {event.location}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── TEAM (SHPE-style grid, ACM dark aesthetic) ── */}
        <section id="team" className="py-28">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center max-w-2xl mx-auto mb-16"
            >
              <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Leadership
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight mb-4">
                Meet the Team
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground">
                The dedicated students driving ColorStack UTD's mission forward.
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
            >
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  data-testid={`card-team-${i}`}
                  className="text-center group"
                >
                  <div className="relative mx-auto mb-4 overflow-hidden rounded-2xl border border-white/10 aspect-square w-full max-w-[180px] transition-transform duration-400 group-hover:scale-[1.04]">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                    {member.internLogo && (
                      <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center overflow-hidden border border-white/20" title={member.internCompany}>
                        <img src={member.internLogo} alt={member.internCompany} className="w-6 h-6 object-contain" />
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-sm leading-tight">{member.name}</h3>
                  <p className="text-xs text-primary mt-0.5">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── SPONSORS (SHPE-style tiered layout) ── */}
        <section id="sponsors" className="py-28 bg-white/[0.02] border-y border-white/6">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-16"
            >
              <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                Partners
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight mb-3">
                Supported By
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground max-w-md mx-auto">
                Industry leaders investing in the next generation of diverse tech talent.
              </motion.p>
            </motion.div>

            {/* Platinum */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-10"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs font-semibold uppercase tracking-widest text-primary px-3">Platinum</span>
                <div className="h-px flex-1 bg-white/10" />
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-6">
                {sponsors.platinum.map((s) => (
                  <div key={s} className="px-10 py-5 rounded-xl border border-white/10 bg-white/4 text-xl font-bold tracking-wider text-white/60 hover:text-white hover:border-primary/40 transition-all duration-300 cursor-default">
                    {s}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Gold */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-10"
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs font-semibold uppercase tracking-widest text-yellow-500/70 px-3">Gold</span>
                <div className="h-px flex-1 bg-white/10" />
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-5">
                {sponsors.gold.map((s) => (
                  <div key={s} className="px-8 py-4 rounded-xl border border-white/8 bg-white/3 text-base font-bold tracking-wider text-white/45 hover:text-white/80 transition-colors duration-300 cursor-default">
                    {s}
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Silver */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs font-semibold uppercase tracking-widest text-white/30 px-3">Silver</span>
                <div className="h-px flex-1 bg-white/10" />
              </motion.div>
              <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
                {sponsors.silver.map((s) => (
                  <div key={s} className="px-6 py-3 rounded-xl border border-white/6 bg-white/2 text-sm font-semibold tracking-wider text-white/30 hover:text-white/60 transition-colors duration-300 cursor-default">
                    {s}
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── CONTACT (SHPE form + ACM CTA headline) ── */}
        <section id="contact" className="py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">

              {/* Left: CTA copy */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
                className="space-y-6"
              >
                <motion.p variants={fadeUp} className="text-xs font-semibold uppercase tracking-widest text-primary">
                  Get Involved
                </motion.p>
                <motion.h2 variants={fadeUp} className="text-4xl font-bold tracking-tight leading-snug">
                  Ready to make <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                    your mark?
                  </span>
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
                  Join a community of driven individuals. Build your skills, expand your network, and launch your career in tech. Fill out the form and we'll be in touch.
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-2">
                  <a
                    href="https://www.instagram.com/colorstackutd/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-instagram"
                  >
                    <SiInstagram className="h-4 w-4 text-primary" />
                    @colorstackutd
                  </a>
                  <a
                    href="mailto:colorstackutd@utdallas.edu"
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid="link-email"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    colorstackutd@utdallas.edu
                  </a>
                </motion.div>
              </motion.div>

              {/* Right: contact form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="bg-card/40 border-white/8 backdrop-blur-md">
                  <CardContent className="p-8 space-y-5">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80" htmlFor="name">Full Name</label>
                      <input
                        id="name"
                        data-testid="input-name"
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80" htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        data-testid="input-email"
                        type="email"
                        placeholder="you@utdallas.edu"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground/80" htmlFor="message">Message (optional)</label>
                      <textarea
                        id="message"
                        data-testid="input-message"
                        rows={4}
                        placeholder="Tell us about yourself or ask anything…"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none"
                      />
                    </div>
                    <Button
                      data-testid="button-submit"
                      className="w-full h-12 rounded-lg font-semibold bg-primary hover:bg-primary/90 text-primary-foreground text-sm"
                    >
                      Submit Interest <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>

            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="py-10 border-t border-white/8 bg-background/80 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-5">
          <span className="text-base font-bold tracking-tight">
            ColorStack <span className="text-primary">UTD</span>
          </span>
          <div className="flex items-center gap-5 text-muted-foreground">
            <a
              href="https://www.instagram.com/colorstackutd/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              data-testid="link-footer-instagram"
              aria-label="Instagram"
            >
              <SiInstagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-primary transition-colors" data-testid="link-footer-linkedin" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:colorstackutd@utdallas.edu" className="hover:text-primary transition-colors" data-testid="link-footer-email" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-xs text-muted-foreground">© 2025 ColorStack UTD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

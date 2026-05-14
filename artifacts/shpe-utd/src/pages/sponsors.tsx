import { motion } from "framer-motion";
import {
  BookOpen, Ear, Clock, TrendingUp, Target,
  Mic2, Code2, Building2, BookMarked, Users,
  Mail, Star, Award, Trophy,
  FileText, Laptop, Plane,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function SectionLabel({ text }: { text: string }) {
  return (
    <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[#EC7524]/70 text-xs mb-3 tracking-wide">
      // {text.toLowerCase()}
    </p>
  );
}

function SectionHeading({ title }: { title: string }) {
  return (
    <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4" style={{ fontFamily: "'Fira Code', monospace" }}>
      <span className="text-foreground/20">&lt;</span>
      <span> {title} </span>
      <span className="text-foreground/20">/&gt;</span>
    </h2>
  );
}

const idealPartner = [
  {
    Icon: BookOpen,
    text: "Reads thoroughly and responds timely to communication from ColorStack at UTD.",
  },
  {
    Icon: Ear,
    text: "Listens to our board's guidance on how best to engage with our students.",
  },
  {
    Icon: Target,
    text: "Is prepared to deliver content beyond the typical \"how to prepare for technical interviews\".",
  },
  {
    Icon: Clock,
    text: "Approaches this partnership as a long-term investment, not a quick solution to their problem.",
  },
  {
    Icon: TrendingUp,
    text: "Is committed to increasing hiring outcomes for our students at your company.",
  },
];

const ourPlans = [
  {
    Icon: Mic2,
    text: "Invites tech professionals and alumni to speak on career journeys.",
  },
  {
    Icon: Code2,
    text: "Hosts regular LeetCode prep sessions to strengthen interview readiness.",
  },
  {
    Icon: Building2,
    text: "Partners with companies for networking, mentorship, and tech talks.",
  },
  {
    Icon: Laptop,
    text: "Develops project opportunities for members to build real-world impact and skills.",
  },
  {
    Icon: BookMarked,
    text: "Organizes study nights to support academic success and community.",
  },
];

const tiers = [
  {
    name: "Gold",
    price: "$1,250+",
    color: "#B8860B",
    bg: "from-yellow-50 to-amber-50",
    border: "border-yellow-300",
    badge: "bg-yellow-400 text-yellow-900",
    Icon: Trophy,
    perks: [
      "Everything in Silver",
      "Priority booking for any workshops",
      "Recruit a member to a career program",
      "Events posted on our Instagram",
      "Host a private workshop/event 3x a year with us",
    ],
  },
  {
    name: "Silver",
    price: "$1,000+",
    color: "#6B7280",
    bg: "from-gray-50 to-slate-50",
    border: "border-gray-300",
    badge: "bg-gray-300 text-gray-800",
    Icon: Award,
    perks: [
      "Everything in Bronze",
      "Access to our resume book",
      "Host a private workshop/event 2x a year with us",
    ],
  },
  {
    name: "Bronze",
    price: "$500+",
    color: "#92400E",
    bg: "from-orange-50 to-amber-50",
    border: "border-orange-300",
    badge: "bg-orange-400 text-white",
    Icon: Star,
    perks: [
      "Your logo featured monthly in our social media card",
      "All jobs, events, and opportunities featured in our monthly newsletter",
      "Host one private workshop/event a year with us",
    ],
  },
];

const alaCarteItems = [
  { Icon: FileText, name: "Resume Book", price: "$250", desc: "Access to a curated book of our members' resumes for direct recruiting." },
  { Icon: Laptop, name: "Workshop", price: "$500", desc: "Host a sponsored technical workshop, career session, or info night." },
  { Icon: Plane, name: "Tech Conference Scholarships", price: "~$1,500/pp", desc: "Sponsor a student to attend a major tech conference such as AfroTech or Grace Hopper." },
];

export default function Sponsors() {
  return (
    <div className="min-h-screen bg-white w-full">

      {/* Hero */}
      <section className="bg-[#114634] py-24 md:py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-white/50 text-xs mb-5 tracking-widest uppercase">
              2025 - 2026 Corporate Sponsorship Packet
            </p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6" style={{ fontFamily: "'Fira Code', monospace" }}>
              <span className="text-white/30">&lt;</span>
              <span> Partner With Us </span>
              <span className="text-white/30">/&gt;</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
              Our members are technically elite, community-driven, and ready to work. Partner with ColorStack UTD to build your pipeline of the best Black, Latinx, and Indigenous engineers at UT Dallas.
            </p>
            <a
              href="mailto:utdcolorstack@gmail.com"
              className="inline-flex items-center gap-2.5 bg-[#EC7524] hover:bg-[#d46620] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-px shadow-lg shadow-[#EC7524]/30"
            >
              <Mail size={18} />
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* The Ideal Corporate Partner */}
      <section className="bg-[#EC7524] py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-white/60 text-xs mb-3 tracking-widest uppercase">
              // who we work best with
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "'Fira Code', monospace" }}>
              The Ideal Corporate Partner
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {idealPartner.map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl p-6 flex gap-4 items-start shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EC7524]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#EC7524]" strokeWidth={1.8} />
                </div>
                <p className="text-foreground/80 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Plans */}
      <section className="bg-[#1a1a1a] py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-center mb-14"
          >
            <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[#EC7524]/60 text-xs mb-3 tracking-widest uppercase">
              // what we do for our members
            </p>
            <h2 className="text-3xl md:text-4xl font-black text-white" style={{ fontFamily: "'Fira Code', monospace" }}>
              Our Plans
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {ourPlans.map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start hover:bg-white/8 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EC7524]/20 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#EC7524]" strokeWidth={1.8} />
                </div>
                <p className="text-white/75 text-sm leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mb-4"
          >
            <SectionLabel text="investment levels" />
            <SectionHeading title="Sponsorship Tiers" />
            <p className="text-foreground/60 text-sm mb-12">
              Your tier is determined by the total sum of your engagement items.
            </p>
          </motion.div>

          <div className="flex flex-col gap-5">
            {tiers.map(({ name, price, bg, border, badge, Icon, perks }, i) => (
              <motion.div
                key={name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl border ${border} bg-gradient-to-r ${bg} overflow-hidden flex flex-col md:flex-row`}
              >
                {/* Tier label */}
                <div className="md:w-52 flex-shrink-0 flex flex-col items-center justify-center p-8 gap-3">
                  <div className={`w-14 h-14 rounded-2xl ${badge} flex items-center justify-center shadow-sm`}>
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                  <p className="text-2xl font-black tracking-wide">{name}</p>
                  <p className="text-lg font-bold text-foreground/60">{price}</p>
                </div>
                {/* Perks */}
                <div className="flex-1 border-t md:border-t-0 md:border-l border-current/10 p-8">
                  <ul className="space-y-2.5">
                    {perks.map((perk, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#EC7524] flex-shrink-0" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A-La Carte Items */}
      <section className="bg-[#fdf4ee] py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mb-4"
          >
            <SectionLabel text="pick what works" />
            <SectionHeading title="A-La Carte Items" />
            <p className="text-foreground/60 text-sm mb-12">
              Specific items given separately if that suits your company's needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {alaCarteItems.map(({ Icon, name, price, desc }, i) => (
              <motion.div
                key={name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-border shadow-sm flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#EC7524]/10 flex items-center justify-center">
                  <Icon size={22} className="text-[#EC7524]" strokeWidth={1.6} />
                </div>
                <div>
                  <p className="font-black text-foreground text-base mb-1">{name}</p>
                  <p className="text-2xl font-black text-[#EC7524] mb-3">{price}</p>
                  <p className="text-sm text-foreground/60 leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fine print */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-white rounded-2xl border border-border p-6 text-center text-sm text-foreground/60 leading-relaxed"
          >
            If these A-La Carte items are not what your company is looking for, contact us at{" "}
            <a href="mailto:utdcolorstack@gmail.com" className="text-[#EC7524] font-semibold hover:underline">
              utdcolorstack@gmail.com
            </a>
            . We would love to work with you to create a sponsorship package that works for your company.
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#114634] py-20 md:py-28 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="relative max-w-3xl mx-auto text-center"
        >
          <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-white/50 text-xs mb-4 tracking-widest uppercase">
            // let's build together
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-5" style={{ fontFamily: "'Fira Code', monospace" }}>
            Ready To Partner With Us?
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Reach out and our team will connect you with the right package. We are excited to build a long-term relationship with companies that genuinely invest in our students.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:utdcolorstack@gmail.com"
              className="inline-flex items-center gap-2.5 bg-[#EC7524] hover:bg-[#d46620] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-px shadow-lg shadow-black/20"
            >
              <Mail size={18} />
              utdcolorstack@gmail.com
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}

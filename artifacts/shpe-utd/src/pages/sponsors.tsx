import { motion } from "framer-motion";
import {
  BookOpen, Ear, Clock, TrendingUp, Target,
  Mic2, Code2, Building2, BookMarked,
  Mail, Check,
  FileText, Megaphone, Send, Wrench, Tag, Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

function SectionLabel({ text, light }: { text: string; light?: boolean }) {
  return (
    <p
      style={{ fontFamily: "'Fira Code', monospace" }}
      className={`text-xs mb-3 tracking-wide ${light ? "text-white/50" : "text-[#EC7524]/70"}`}
    >
      // {text.toLowerCase()}
    </p>
  );
}

function SectionHeading({ title, light }: { title: string; light?: boolean }) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-black mb-4 ${light ? "text-white" : "text-foreground"}`}
      style={{ fontFamily: "'Fira Code', monospace" }}
    >
      <span className={light ? "text-white/20" : "text-foreground/20"}>&lt;</span>
      <span> {title} </span>
      <span className={light ? "text-white/20" : "text-foreground/20"}>/&gt;</span>
    </h2>
  );
}

const idealPartner = [
  { Icon: BookOpen, text: "Reads thoroughly and responds timely to communication from ColorStack at UTD." },
  { Icon: Ear, text: "Listens to our board's guidance on how best to engage with our students." },
  { Icon: Target, text: "Is prepared to deliver content beyond the typical \"how to prepare for technical interviews\"." },
  { Icon: Clock, text: "Approaches this partnership as a long-term investment, not a quick solution to their problem." },
  { Icon: TrendingUp, text: "Is committed to increasing hiring outcomes for our students at your company." },
];

const ourPlans = [
  { Icon: Mic2, text: "Invites tech professionals and alumni to speak on career journeys." },
  { Icon: Code2, text: "Hosts regular LeetCode prep sessions to strengthen interview readiness." },
  { Icon: Building2, text: "Partners with companies for networking, mentorship, and tech talks." },
  { Icon: Code2, text: "Develops project opportunities for members to build real-world impact and skills." },
  { Icon: BookMarked, text: "Organizes study nights to support academic success and community." },
];

type TierStyle = "neutral" | "green-light" | "green" | "orange-light" | "founding";

const tiers: {
  name: string;
  price: string;
  style: TierStyle;
  perks: string[];
}[] = [
  {
    name: "Supporter",
    price: "$100",
    style: "neutral",
    perks: [
      "Logo On Website",
      "Shoutout On Instagram And LinkedIn",
      "Recognition At General Body Meetings",
    ],
  },
  {
    name: "Advocate",
    price: "$250",
    style: "green-light",
    perks: [
      "Logo On Website",
      "Shoutout On Instagram And LinkedIn",
      "Recognition At General Body Meetings",
      "Logo On Event Flyers",
      "One Dedicated Social Media Post",
    ],
  },
  {
    name: "Partner",
    price: "$500",
    style: "green",
    perks: [
      "Logo On Website",
      "Shoutout On Instagram And LinkedIn",
      "Recognition At General Body Meetings",
      "Logo On Event Flyers",
      "One Dedicated Social Media Post",
      "Branded Table At One Event",
      "Resume Book Access",
    ],
  },
  {
    name: "Investor",
    price: "$1,000",
    style: "orange-light",
    perks: [
      "Everything In Partner",
      "Co-Branded Workshop Or Event",
      "Dedicated Email Blast To Full Member List",
      "Two Dedicated Social Media Posts",
      "Logo On Chapter Merchandise",
    ],
  },
  {
    name: "Founding Partner",
    price: "$2,500+",
    style: "founding",
    perks: [
      "Everything In Investor",
      "Exclusive Naming Rights To One Flagship Event",
      "Priority Recruiting Access At All Events",
      "Custom Panel Or Tech Talk With Your Team",
      "Featured Sponsor Spotlight On Homepage",
      "Recognition As A Founding Partner Of ColorStack UTD",
    ],
  },
];

function tierStyles(style: TierStyle) {
  switch (style) {
    case "neutral":
      return {
        card: "bg-white border-2 border-gray-200",
        bar: "bg-gray-300",
        name: "text-gray-700",
        price: "text-gray-500",
        check: "text-gray-400",
        perk: "text-foreground/70",
      };
    case "green-light":
      return {
        card: "bg-white border-2 border-[#114634]/20",
        bar: "bg-[#114634]",
        name: "text-[#114634]",
        price: "text-foreground/60",
        check: "text-[#114634]",
        perk: "text-foreground/75",
      };
    case "green":
      return {
        card: "bg-white border-2 border-[#114634]/40",
        bar: "bg-[#114634]",
        name: "text-[#114634]",
        price: "text-foreground/60",
        check: "text-[#114634]",
        perk: "text-foreground/75",
      };
    case "orange-light":
      return {
        card: "bg-white border-2 border-[#EC7524]/30",
        bar: "bg-[#EC7524]",
        name: "text-[#EC7524]",
        price: "text-foreground/60",
        check: "text-[#EC7524]",
        perk: "text-foreground/75",
      };
    case "founding":
      return {
        card: "bg-[#114634] border-2 border-[#114634]",
        bar: "bg-[#EC7524]",
        name: "text-white",
        price: "text-white/70",
        check: "text-[#EC7524]",
        perk: "text-white/85",
      };
  }
}

const alaCarteItems = [
  { Icon: Megaphone, name: "Social Media Shoutout", price: "$50" },
  { Icon: FileText, name: "Resume Book Access", price: "$150" },
  { Icon: Users, name: "Branded Table At One Event", price: "$200" },
  { Icon: Send, name: "Dedicated Email Blast", price: "$200" },
  { Icon: Wrench, name: "Custom Workshop Or Tech Talk", price: "$400" },
  { Icon: Tag, name: "Event Naming Rights", price: "$500" },
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
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
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
                key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
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
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center mb-14">
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
                key={i} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
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
      <section className="bg-[#f7f7f5] py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <SectionLabel text="investment levels" />
            <SectionHeading title="Sponsorship Tiers" />
            <p className="text-foreground/55 text-sm max-w-xl mx-auto">
              Choose the level that fits your company's goals. Every tier is a step toward building a lasting pipeline with the best talent at UTD.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 items-start">
            {tiers.map((tier, i) => {
              const s = tierStyles(tier.style);
              return (
                <motion.div
                  key={tier.name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className={`rounded-2xl overflow-hidden flex flex-col shadow-sm hover:-translate-y-1 transition-transform duration-200 ${s.card}`}
                >
                  {/* Colored top bar */}
                  <div className={`h-1.5 w-full ${s.bar}`} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Tier name */}
                    <p className={`text-lg font-black mb-1 ${s.name}`} style={{ fontFamily: "'Fira Code', monospace" }}>
                      {tier.name}
                    </p>
                    {/* Price */}
                    <p className={`text-2xl font-black mb-5 ${s.price}`}>
                      {tier.price}
                    </p>

                    {/* Divider */}
                    <div className={`h-px w-full mb-5 ${tier.style === "founding" ? "bg-white/15" : "bg-foreground/10"}`} />

                    {/* Perks */}
                    <ul className="flex flex-col gap-2.5">
                      {tier.perks.map((perk, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Check
                            size={14}
                            className={`mt-0.5 flex-shrink-0 ${s.check}`}
                            strokeWidth={2.5}
                          />
                          <span className={`text-xs leading-relaxed ${s.perk}`}>{perk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* A-La Carte */}
      <section className="bg-white py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mb-14 text-center">
            <SectionLabel text="mix and match" />
            <SectionHeading title="A-La Carte Options" />
            <p className="text-foreground/55 text-sm max-w-xl mx-auto">
              Add any of these to your chosen tier or purchase them independently. Build the package that works best for your company.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {alaCarteItems.map(({ Icon, name, price }, i) => (
              <motion.div
                key={name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-[#f7f7f5] rounded-2xl p-5 border border-border flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-[#EC7524]/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className="text-[#EC7524]" strokeWidth={1.7} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-foreground text-sm leading-snug">{name}</p>
                </div>
                <p className="text-lg font-black text-[#EC7524] flex-shrink-0">{price}</p>
              </motion.div>
            ))}
          </div>

          {/* Custom package note */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-[#114634] rounded-2xl p-7 text-center"
          >
            <p className="text-white/85 text-sm leading-relaxed">
              Are These Tiers Not What You Are Looking For? No Problem. You Can Choose To Sponsor A Specific Event Or Build A Custom Package.{" "}
              Reach Out To Us At{" "}
              <a href="mailto:utdcolorstack@gmail.com" className="text-[#EC7524] font-semibold hover:underline">
                utdcolorstack@gmail.com
              </a>
            </p>
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
          <a
            href="mailto:utdcolorstack@gmail.com"
            className="inline-flex items-center gap-2.5 bg-[#EC7524] hover:bg-[#d46620] text-white font-bold px-8 py-4 rounded-full transition-all duration-200 hover:-translate-y-px shadow-lg shadow-black/20"
          >
            <Mail size={18} />
            utdcolorstack@gmail.com
          </a>
        </motion.div>
      </section>

    </div>
  );
}

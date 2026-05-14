import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Slack, Terminal, GitMerge, Globe, Instagram, Linkedin, TreePine, Mail } from "lucide-react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const MAJORS = [
  "Computer Science",
  "Software Engineering",
  "Computer Engineering",
  "Electrical Engineering",
  "Information Technology",
  "Data Science",
  "Cybersecurity",
  "Mathematics",
  "Other",
];

const YEARS = ["Freshman", "Sophomore", "Junior", "Senior", "Graduate Student"];

export default function Join() {
  const [form, setForm] = useState({ name: "", email: "", major: "", year: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("https://formspree.io/utdcolorstack@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          major: form.major,
          year: form.year,
          _subject: `New ColorStack UTD Interest Form — ${form.name}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("idle");
        alert("Something went wrong. Please email us at utdcolorstack@gmail.com.");
      }
    } catch {
      setStatus("idle");
      alert("Something went wrong. Please email us at utdcolorstack@gmail.com.");
    }
  };

  return (
    <div className="min-h-screen bg-white w-full pb-24">
      {/* Header */}
      <section className="bg-[#114634] py-24 px-4 text-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-16h2v16h-2zm-14-16v16h2v-16h-2zm-14 16v-16h2v16h-2zm40 0v16h2v-16h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-white/50 text-xs mb-4 tracking-wide">// start here</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: "'Fira Code', monospace" }}>
            <span className="text-white/30">&lt;</span>
            <span className="text-white"> Join Us </span>
            <span className="text-white/30">/&gt;</span>
          </h1>
          <p className="text-white/75 text-lg font-medium max-w-2xl mx-auto">
            Become a member of ColorStack UTD. Get cracked, build community, and get connected to the opportunities you deserve.
          </p>
        </motion.div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-14">
        {/* Left: What to expect */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[#EC7524]/70 text-xs mb-3 tracking-wide">// what you get</p>
          <h2 className="text-3xl font-black text-foreground mb-8">What To Expect When You Join.</h2>

          <div className="space-y-6 mb-10">
            {[
              {
                icon: <Terminal size={18} strokeWidth={1.8} />,
                bg: "#EC7524",
                title: "Get Cracked",
                desc: "DSA workshops, full-stack application projects, cloud infrastructure labs, and technical interview prep. We make sure you're ready for the room.",
              },
              {
                icon: <GitMerge size={18} strokeWidth={1.8} />,
                bg: "#114634",
                title: "Build Community",
                desc: "A network of Black and Latinx engineers who actually show up for each other. Upperclassmen pour into underclassmen. Nobody figures it out alone.",
              },
              {
                icon: <Globe size={18} strokeWidth={1.8} />,
                bg: "#1a1a1a",
                title: "Get Connected",
                desc: "Internship referrals, company mixers, career panels, and alumni connections. Once you're built, we make sure the right people see you.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: item.bg }}
                >
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-black text-foreground mb-1">{item.title}</h3>
                  <p className="text-[0.9rem] text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Slack CTA */}
          <a
            href="https://colorstack.org/join"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#4A154B] text-white font-bold px-6 py-4 rounded-2xl hover:-translate-y-1 transition-transform duration-200"
          >
            <Slack size={20} />
            <span>Join Our Slack Community</span>
          </a>
          <p className="text-foreground/40 text-xs mt-3">Our Slack is where announcements, resources, and community live.</p>

          {/* Contact and socials */}
          <div className="mt-8 p-6 bg-[#f5f5f5] rounded-2xl">
            <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[#EC7524]/70 text-xs mb-3 tracking-wide">// reach out</p>
            <h3 className="font-black text-foreground text-lg mb-4">Get In Touch</h3>
            <a
              href="mailto:utdcolorstack@gmail.com"
              className="inline-flex items-center gap-2 text-[#114634] font-semibold text-sm hover:text-[#EC7524] transition-colors mb-5"
            >
              <Mail size={15} strokeWidth={2} />
              utdcolorstack@gmail.com
            </a>
            <div className="grid grid-cols-2 gap-2.5">
              {[
                { Icon: Instagram, href: "https://www.instagram.com/colorstackutd/", label: "Instagram", bg: "#E1306C" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/colorstack-utd/", label: "LinkedIn", bg: "#0077B5" },
                { Icon: TreePine, href: "https://linktr.ee/ColorStackUTD", label: "Linktree", bg: "#39A648" },
                { Icon: Slack, href: "https://colorstack.org/join", label: "Slack", bg: "#4A154B" },
              ].map(({ Icon, href, label, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-white text-sm font-semibold hover:-translate-y-0.5 transition-transform duration-200"
                  style={{ backgroundColor: bg }}
                >
                  <Icon size={16} strokeWidth={1.8} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Form */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#114634] rounded-3xl p-10 text-center h-full flex flex-col items-center justify-center"
            >
              <CheckCircle2 size={56} className="text-white mb-6" />
              <h3 className="text-2xl font-black text-white mb-3">You're In.</h3>
              <p className="text-white/75 leading-relaxed">
                Welcome to ColorStack UTD. Keep an eye on your inbox. We'll reach out with next steps and an invite to the Slack.
              </p>
            </motion.div>
          ) : (
            <div className="bg-[#f5f5f5] rounded-3xl p-8 md:p-10">
              <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[#EC7524]/70 text-xs mb-2 tracking-wide">// fill this out</p>
              <h2 className="text-2xl font-black text-foreground mb-8">Interest Form</h2>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full bg-white rounded-xl px-4 py-3.5 text-sm border border-black/8 focus:outline-none focus:border-[#EC7524]/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">UTD Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="netid@utdallas.edu"
                    className="w-full bg-white rounded-xl px-4 py-3.5 text-sm border border-black/8 focus:outline-none focus:border-[#EC7524]/60 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Major</label>
                  <select
                    name="major"
                    required
                    value={form.major}
                    onChange={handleChange}
                    className="w-full bg-white rounded-xl px-4 py-3.5 text-sm border border-black/8 focus:outline-none focus:border-[#EC7524]/60 transition-colors appearance-none"
                  >
                    <option value="">Select your major</option>
                    {MAJORS.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-foreground/50 mb-2">Year</label>
                  <select
                    name="year"
                    required
                    value={form.year}
                    onChange={handleChange}
                    className="w-full bg-white rounded-xl px-4 py-3.5 text-sm border border-black/8 focus:outline-none focus:border-[#EC7524]/60 transition-colors appearance-none"
                  >
                    <option value="">Select your year</option>
                    {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#EC7524] text-white font-black py-4 rounded-2xl text-base hover:-translate-y-0.5 transition-transform duration-200 disabled:opacity-60"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Interest Form"}
                </button>

                <p className="text-center text-foreground/40 text-xs">
                  We don't spam. Just the essentials.
                </p>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

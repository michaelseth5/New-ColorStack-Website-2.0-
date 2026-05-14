import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, HeartHandshake, Zap, Trophy, Shield, Terminal, GitMerge, Globe } from "lucide-react";
import aboutImg from "@/assets/images/about.png";

export default function About() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => setFormStatus("idle"), 3000);
    }, 1000);
  };

  const values = [
    { icon: <Shield size={32} />, title: "Technical Rigor", desc: "We don't settle for surface-level. Our members train hard: DSA, system design, cloud, and everything in between." },
    { icon: <HeartHandshake size={32} />, title: "Real Community", desc: "A network of Black and Latinx engineers who actually show up for each other. No cap." },
    { icon: <Trophy size={32} />, title: "Winning", desc: "We measure success in internship offers, return offers, and members thriving at the companies they dreamed of." },
    { icon: <Zap size={32} />, title: "Access", desc: "The right people, the right rooms, the right opportunities. We make sure our members get there." },
  ];

  return (
    <div className="min-h-screen bg-background w-full pb-24">
      {/* Header */}
      <section className="bg-primary py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzR2LTE2aDJ2MTZoLTJ6bS0xNC0xNnYxNmgydi0xNmgtMnptLTE0IDE2di0xNmgydjE2aC0yem00MCAwdjE2aDJ2LTE2aC0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
            About Us
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            We get our members cracked. Then we make sure the world knows it.
          </p>
        </motion.div>
      </section>

      {/* History & Mission */}
      <section className="py-24 px-4 container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[#EC7524]/70 text-xs mb-3 tracking-wide">// who we are</p>
            <h2 className="text-4xl font-black text-secondary mb-8" style={{ fontFamily: "'Fira Code', monospace" }}>
              <span className="text-secondary/30">&lt;</span>
              <span> Our Story </span>
              <span className="text-secondary/30">/&gt;</span>
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-medium">
              <p>
                ColorStack at UT Dallas was built with one goal: get more Black and Latinx students into top tech roles. Not just through the door. To the top.
              </p>
              <p>
                We build technically strong students and connect them to real opportunities. From cloud infrastructure to DSA to internships, we make sure every member has what they need to break into tech and thrive. No gatekeeping. No fluff. Just the work.
              </p>
              <p>
                Our members don't just graduate. They land. Microsoft, Google, Goldman Sachs, and everywhere in between. We're building a generation of cracked engineers who are connected, supported, and ready.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 w-full"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-[8px] border-white rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src={aboutImg} alt="ColorStack UTD Members" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent flex items-end p-8">
                <span className="text-white font-bold text-2xl">We get our members cracked.</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Pillars */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[#EC7524]/70 text-xs mb-3 tracking-wide">// how we operate</p>
            <h2 className="text-4xl font-black text-foreground" style={{ fontFamily: "'Fira Code', monospace" }}>
              <span className="text-foreground/25">&lt;</span>
              <span> Our Mission </span>
              <span className="text-foreground/25">/&gt;</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Terminal size={20} strokeWidth={1.8} />,
                title: "Get Cracked",
                desc: "We build technically elite members. DSA in Java and Python, full stack with JavaScript and React, and production deployments on AWS and Azure with full CI/CD pipelines.",
                bg: "#EC7524",
              },
              {
                icon: <GitMerge size={20} strokeWidth={1.8} />,
                title: "Build Community",
                desc: "We bring together students of color from all different backgrounds and create a space where no one has to figure it out alone. Mentorship, accountability, and people who genuinely want to see you win.",
                bg: "#114634",
              },
              {
                icon: <Globe size={20} strokeWidth={1.8} />,
                title: "Get Connected",
                desc: "Once our members are built, we connect them to the opportunities they deserve. Internships, new grad roles, and industry relationships. No talented student goes unseen.",
                bg: "#1a1a1a",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl p-8 flex flex-col"
                style={{ backgroundColor: pillar.bg }}
              >
                <div className="w-10 h-10 rounded-full bg-white/15 text-white flex items-center justify-center mb-5">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-black text-white mb-3">{pillar.title}</h3>
                <p className="text-white/70 text-[0.93rem] leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F5F5F5] py-24 px-4 border-y border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[#EC7524]/70 text-xs mb-3 tracking-wide">// what drives us</p>
            <h2 className="text-4xl font-black text-foreground" style={{ fontFamily: "'Fira Code', monospace" }}>
              <span className="text-foreground/25">&lt;</span>
              <span> Our Core Values </span>
              <span className="text-foreground/25">/&gt;</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-border text-center hover:shadow-lg transition-all group"
              >
                <div className="h-20 w-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {val.icon}
                </div>
                <h3 className="text-2xl font-bold text-secondary mb-4">{val.title}</h3>
                <p className="text-muted-foreground font-medium">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-4 container mx-auto max-w-4xl">
        <div className="bg-white rounded-[3rem] shadow-xl border border-border p-10 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary opacity-10 blur-[50px] rounded-full"></div>

          <div className="text-center mb-12 relative z-10">
            <h2 className="text-4xl font-black text-foreground mb-4">Get in Touch</h2>
            <p className="text-xl text-muted-foreground">Have a question? Send us a message and we'll get back to you.</p>
          </div>

          {formStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 text-green-800 p-12 rounded-2xl text-center border border-green-200"
            >
              <CheckCircle2 size={64} className="mx-auto text-green-500 mb-6" />
              <h3 className="text-3xl font-bold mb-2">Thanks for reaching out!</h3>
              <p className="text-lg">We've received your message and will respond shortly.</p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-secondary uppercase tracking-wider">Name</label>
                  <Input id="name" required className="bg-[#F5F5F5] border-0 py-6 text-lg rounded-xl focus-visible:ring-primary" placeholder="Your Name" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-secondary uppercase tracking-wider">Email</label>
                  <Input id="email" type="email" required className="bg-[#F5F5F5] border-0 py-6 text-lg rounded-xl focus-visible:ring-primary" placeholder="your.email@utdallas.edu" />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-secondary uppercase tracking-wider">Subject</label>
                <Input id="subject" required className="bg-[#F5F5F5] border-0 py-6 text-lg rounded-xl focus-visible:ring-primary" placeholder="How can we help?" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-secondary uppercase tracking-wider">Message</label>
                <Textarea id="message" required className="bg-[#F5F5F5] border-0 text-lg rounded-xl min-h-[150px] resize-none focus-visible:ring-primary p-4" placeholder="Your message here..." />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full py-8 text-xl font-bold shadow-lg shadow-primary/20 hover:-translate-y-1 transition-all"
                disabled={formStatus === "submitting"}
                data-testid="button-submit-contact"
              >
                {formStatus === "submitting" ? "Sending..." : "Send Message"}
              </Button>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  );
}

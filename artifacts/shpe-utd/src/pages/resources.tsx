import { motion } from "framer-motion";
import { BookOpen, Map, Code2, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

interface Resource {
  name: string;
  desc: string;
  url: string;
  tag?: string;
}

const sections: { icon: React.ReactNode; label: string; title: string; bg: string; resources: Resource[] }[] = [
  {
    icon: <Code2 size={22} strokeWidth={1.8} />,
    label: "// sharpen the fundamentals",
    title: "DSA Study Guides",
    bg: "#EC7524",
    resources: [
      { name: "NeetCode 150", desc: "Curated LeetCode problems organized by pattern. The gold standard for technical interview prep.", url: "https://neetcode.io/practice", tag: "Free" },
      { name: "LeetCode", desc: "The most widely used platform for coding interview practice. Filter by company, topic, and difficulty.", url: "https://leetcode.com", tag: "Free + Premium" },
      { name: "Blind 75", desc: "75 essential LeetCode questions covering every major topic. A focused starting point before expanding.", url: "https://www.techinterviewhandbook.org/blind-75/", tag: "Free" },
      { name: "Tech Interview Handbook", desc: "Structured guides for every phase of the technical interview from resume to offer negotiation.", url: "https://www.techinterviewhandbook.org", tag: "Free" },
    ],
  },
  {
    icon: <Map size={22} strokeWidth={1.8} />,
    label: "// know where you're going",
    title: "Career Roadmaps",
    bg: "#114634",
    resources: [
      { name: "Roadmap.sh", desc: "Visual, step-by-step roadmaps for frontend, backend, DevOps, AI, and more. Know exactly what to learn next.", url: "https://roadmap.sh", tag: "Free" },
      { name: "CS Career Questions Wiki", desc: "Community-curated advice on internship hunting, new grad recruiting, and career progression in tech.", url: "https://www.reddit.com/r/cscareerquestions/wiki/index/", tag: "Free" },
      { name: "Levels.fyi", desc: "Compensation data, career ladders, and total comp breakdowns across top tech companies.", url: "https://www.levels.fyi", tag: "Free" },
      { name: "ColorStack Career Center", desc: "Official ColorStack career resources, resume templates, and job board built for our community.", url: "https://colorstack.org", tag: "Members" },
      { name: "CARL Method Guide", desc: "Nail behavioral interviews using Challenge, Action, Result, Learning. A structured, no-fluff framework for telling your story.", url: "https://www.prospects.ac.uk/careers-advice/interview-tips/the-carl-technique", tag: "Free" },
    ],
  },
  {
    icon: <BookOpen size={22} strokeWidth={1.8} />,
    label: "// structured programs that deliver",
    title: "Featured Programs",
    bg: "#114634",
    resources: [
      { name: "CodePath", desc: "Free, instructor-led courses in technical interview prep, iOS, Android, cybersecurity, and web development. Built for underrepresented students.", url: "https://codepath.org", tag: "Free" },
      { name: "Break Through Tech", desc: "AI and data science programs connecting underrepresented students to real-world industry projects and Cornell University support.", url: "https://breakthroughtech.org", tag: "Free" },
      { name: "MLT Career Prep", desc: "10-month career accelerator for diverse students pursuing roles at top companies. Cohort-based with mentorship.", url: "https://mlt.org/career-prep/", tag: "Selective" },
      { name: "Google STEP Internship", desc: "Software engineering internship designed for first and second-year students from underrepresented groups.", url: "https://buildyourfuture.withgoogle.com/programs/step", tag: "Paid Internship" },
    ],
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] w-full pb-24">
      {/* Header */}
      <section className="bg-[#1a1a1a] py-24 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[#EC7524]/70 text-xs mb-4 tracking-wide">// everything you need to win</p>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: "'Fira Code', monospace" }}>
            <span className="text-white/30">&lt;</span>
            <span className="text-white"> Resources </span>
            <span className="text-white/30">/&gt;</span>
          </h1>
          <p className="text-white/70 text-lg font-medium max-w-2xl mx-auto">
            Curated tools, guides, and programs to help ColorStack UTD members get cracked, stay connected, and land.
          </p>
        </motion.div>
      </section>

      {/* Resource Sections */}
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        {sections.map((section, si) => (
          <motion.div
            key={si}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0"
                style={{ backgroundColor: section.bg }}
              >
                {section.icon}
              </div>
              <div>
                <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[#EC7524]/70 text-xs tracking-wide">{section.label}</p>
                <h2 className="text-2xl font-black text-foreground">{section.title}</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.resources.map((res, ri) => (
                <motion.a
                  key={ri}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: ri * 0.07 }}
                  className="bg-white rounded-2xl p-6 border border-black/5 hover:border-[#EC7524]/40 hover:shadow-md transition-all duration-200 group flex flex-col"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-black text-foreground group-hover:text-[#EC7524] transition-colors">{res.name}</h3>
                    <div className="flex items-center gap-2 flex-shrink-0 ml-3">
                      {res.tag && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EC7524]/10 text-[#EC7524]">{res.tag}</span>
                      )}
                      <ExternalLink size={14} className="text-foreground/30 group-hover:text-[#EC7524] transition-colors" />
                    </div>
                  </div>
                  <p className="text-[0.88rem] text-foreground/60 leading-relaxed">{res.desc}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#EC7524] py-16 px-6 text-center">
        <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-white/60 text-xs mb-4 tracking-wide">// more resources in the community</p>
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">More Resources In Our Slack.</h2>
        <p className="text-white/80 text-base mb-8 max-w-lg mx-auto">
          Members get access to a private Slack workspace with curated channels for internship openings, study sessions, and peer support.
        </p>
        <a
          href="https://colorstack.org/join"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#EC7524] font-black px-8 py-4 rounded-full text-base hover:-translate-y-1 transition-transform duration-200"
        >
          Join The Slack
        </a>
      </section>
    </div>
  );
}

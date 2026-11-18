import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Clock, ArrowRight, Instagram, FileText, Code2, Award, Network, Users, Briefcase, Mic2, MessageSquare, Sparkles, Star, Handshake } from "lucide-react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const gbm1 = `${BASE}/gbm-1.jpg`;
const gbm2 = `${BASE}/gbm-2.jpg`;
const gbm3 = `${BASE}/gbm-3.jpg`;
const rn = Array.from({ length: 11 }, (_, i) => `${BASE}/rn-${i + 1}.jpg`);
const at = [1, 2, 4, 5, 6, 7, 8, 9].map(i => `${BASE}/at-${i}.jpg`);
const afroTech2026Photos = [
  "group", "conference-sign", "attendees", "google", "expo-floor", "selfie", "vanguard",
].map(photo => `${BASE}/afrotech-2026-${photo}.webp`);
const sk = Array.from({ length: 6 }, (_, i) => `${BASE}/sk-${i + 1}.jpg`);
const tp = Array.from({ length: 11 }, (_, i) => `${BASE}/tp-${i + 1}.jpg`);
const api101 = `${BASE}/api101.jpg`;
const cf = Array.from({ length: 14 }, (_, i) => `${BASE}/cf-${i + 1}.jpg`);

type EventTab = "Upcoming" | "Past";

interface SymbolConfig {
  main: React.ReactNode;
  supporting: React.ReactNode[];
  bg: string;
  dotColor: string;
}

interface BaseEvent {
  title: string;
  date: string;
  time?: string;
  location?: string;
  desc: string;
  image?: string;
  flyer?: boolean;
  photos?: string[];
  showFullPhotos?: boolean;
  symbol?: SymbolConfig;
  recap?: string;
  highlights?: string[];
  sections?: { heading: string; body: string }[];
  lead?: string;
  hashtags?: string;
  instagram?: string;
}

/* ── Shared body-copy truncation, used by every card so new events auto-follow the same rules ── */
const BODY_CHAR_LIMIT = 480;

interface BodyContent {
  desc?: string;
  lead?: string;
  sections?: { heading: string; body: string }[];
  highlights?: string[];
  recap?: string;
}

/** Consumes a multi-line string one whole line at a time (never mid-line, so bullet/emoji list
 * items are never split) until it runs out of budget. Falls back to a word-boundary trim only
 * when even the first line can't fit. */
function consumeLines(text: string, budget: number): { included: string; usedFully: boolean; remaining: number } {
  const lines = text.split("\n");
  const kept: string[] = [];
  let left = budget;
  for (const line of lines) {
    const cost = line.length + (kept.length > 0 ? 1 : 0);
    if (cost <= left) {
      kept.push(line);
      left -= cost;
    } else {
      if (kept.length === 0) {
        const avail = Math.max(0, left);
        const slice = line.slice(0, avail);
        const cut = slice.lastIndexOf(" ");
        kept.push(cut > 20 ? slice.slice(0, cut) : slice);
      }
      return { included: kept.join("\n"), usedFully: false, remaining: 0 };
    }
  }
  return { included: kept.join("\n"), usedFully: true, remaining: left };
}

/** Builds a preview of an event's body copy capped at `limit` characters, so every card's
 * text block stays proportional to its image regardless of how long the source caption is.
 * Free-form fields (desc/recap) truncate line-by-line; structured fields (sections/highlights)
 * are only ever included whole — never partially — so nothing is ever cut mid-item. */
function buildPreview(event: BodyContent, limit: number): BodyContent & { truncated: boolean } {
  let budget = limit;

  const { included: desc, usedFully: descFull } = consumeLines(event.desc ?? "", budget);
  budget -= desc.length;
  if (!descFull) {
    return { desc, truncated: true };
  }

  if (event.lead) {
    if (event.lead.length <= budget) {
      budget -= event.lead.length;
    } else {
      return { desc, truncated: true };
    }
  }

  const keptSections: { heading: string; body: string }[] = [];
  if (event.sections) {
    for (const s of event.sections) {
      const cost = s.heading.length + s.body.length;
      if (cost <= budget) {
        keptSections.push(s);
        budget -= cost;
      } else {
        return { desc, lead: event.lead, sections: keptSections, truncated: true };
      }
    }
  }

  const keptHighlights: string[] = [];
  if (event.highlights) {
    for (const h of event.highlights) {
      if (h.length <= budget) {
        keptHighlights.push(h);
        budget -= h.length;
      } else {
        return { desc, lead: event.lead, sections: keptSections, highlights: keptHighlights, truncated: true };
      }
    }
  }

  if (event.recap) {
    const { included: recap, usedFully: recapFull } = consumeLines(event.recap, budget);
    return {
      desc,
      lead: event.lead,
      sections: keptSections,
      highlights: keptHighlights,
      recap: recap || undefined,
      truncated: !recapFull,
    };
  }

  return { desc, lead: event.lead, sections: keptSections, highlights: keptHighlights, truncated: false };
}

/** Renders the structured body of an event — shared between the card preview and the
 * "Read more" modal so both stay visually identical. */
function EventBody({ desc, lead, sections, highlights, recap }: BodyContent) {
  return (
    <>
      {desc && <p className="text-foreground leading-relaxed mb-5 whitespace-pre-line">{desc}</p>}

      {lead && <p className="text-foreground leading-relaxed mb-5">{lead}</p>}

      {sections && sections.length > 0 && (
        <div className="space-y-5 mb-5">
          {sections.map((section, i) => (
            <div key={i}>
              <p className="text-sm font-bold text-secondary mb-1.5">{section.heading}</p>
              <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">{section.body}</p>
            </div>
          ))}
        </div>
      )}

      {highlights && highlights.length > 0 && (
        <ul className="space-y-2 mb-5">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground">
              <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>
      )}

      {recap && <p className="text-muted-foreground text-sm leading-relaxed mb-6 whitespace-pre-line">{recap}</p>}
    </>
  );
}

/* ── Past event: full-width card with rotating photo gallery ── */
function GBMCard({ event, idx }: { event: BaseEvent; idx: number }) {
  const photos = event.photos ?? [event.image!];
  const [current, setCurrent] = useState(0);
  const [photoSelected, setPhotoSelected] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (photos.length <= 1 || photoSelected) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % photos.length);
    }, 3000);
    return () => clearInterval(id);
  }, [photos.length, photoSelected]);

  const preview = buildPreview(event, BODY_CHAR_LIMIT);

  return (
    <motion.div
      key={`past-${idx}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col group col-span-1 md:col-span-2 lg:col-span-3"
    >
      <div className="flex flex-col lg:flex-row lg:items-start">
        {/* Photo gallery — fixed height so portrait photos don't stretch the card */}
        <div className="relative h-72 w-full flex-shrink-0 overflow-hidden sm:h-80 lg:h-[28rem] lg:max-h-[32rem] lg:w-[min(100%,26rem)] lg:max-w-[42%]">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={photos[current]}
              alt={event.flyer ? `${event.title} flyer` : `${event.title} photo ${current + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className={`absolute inset-0 h-full w-full ${event.flyer || event.showFullPhotos ? "bg-[#f7f4ef] object-contain" : "object-cover"}`}
            />
          </AnimatePresence>
          {!event.flyer && (
            <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg transform rotate-2">
              {event.date}
            </div>
          )}
          {!event.flyer && (
            <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 ${event.showFullPhotos ? "rounded-full bg-black/75 p-2" : ""}`}>
              {photos.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show photo ${i + 1} of ${photos.length}`}
                  aria-pressed={i === current}
                  onClick={() => {
                    if (event.showFullPhotos) setPhotoSelected(true);
                    setCurrent(i);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-white scale-125" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col justify-between p-8 lg:p-10">
          <div>
            <h3 className="text-3xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
              {event.title}
            </h3>

            <div className="flex flex-wrap gap-x-6 gap-y-3 mb-6 text-muted-foreground font-medium">
              {event.time && (
                <div className="flex items-center">
                  <Clock size={18} className="mr-2 text-primary" />
                  {event.time}
                </div>
              )}
              {event.location && (
                <div className="flex items-center">
                  <MapPin size={18} className="mr-2 text-primary" />
                  {event.location}
                </div>
              )}
            </div>

            <EventBody
              desc={preview.desc}
              lead={preview.lead}
              sections={preview.sections}
              highlights={preview.highlights}
              recap={preview.recap}
            />

            {preview.truncated && (
              <p className="mb-5">
                <span className="text-muted-foreground">… </span>
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="font-bold text-primary hover:text-secondary transition-colors"
                >
                  Read more
                </button>
              </p>
            )}
          </div>

          <div className="flex flex-col gap-3">
            {event.hashtags && (
              <p className="text-muted-foreground text-sm leading-relaxed">{event.hashtags}</p>
            )}
            {event.instagram && (
              <a
                href={`https://instagram.com/${event.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors"
              >
                <Instagram size={18} />
                {event.instagram}
              </a>
            )}
          </div>
        </div>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-8 lg:p-10">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-secondary pr-6">
              {event.title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-2 text-muted-foreground font-medium text-sm">
            {event.time && (
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-primary" />
                {event.time}
              </div>
            )}
            {event.location && (
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-primary" />
                {event.location}
              </div>
            )}
          </div>

          <EventBody
            desc={event.desc}
            lead={event.lead}
            sections={event.sections}
            highlights={event.highlights}
            recap={event.recap}
          />

          {event.hashtags && (
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{event.hashtags}</p>
          )}
          {event.instagram && (
            <a
              href={`https://instagram.com/${event.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-bold text-primary hover:text-secondary transition-colors"
            >
              <Instagram size={18} />
              {event.instagram}
            </a>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

/* ── Upcoming event: mood-board collage card ── */
function UpcomingCard({ event, idx }: { event: BaseEvent; idx: number }) {
  const photos = event.collage ?? [];
  const [modalOpen, setModalOpen] = useState(false);
  const preview = buildPreview(event, BODY_CHAR_LIMIT);

  return (
    <motion.div
      key={`upcoming-${idx}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col group"
    >
      {/* Symbol header */}
      <div
        className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: event.symbol?.bg ?? "#114634" }}
      >
        {/* Dot grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, ${event.symbol?.dotColor ?? "rgba(255,255,255,0.12)"} 1px, transparent 1px)`,
            backgroundSize: "22px 22px",
          }}
        />
        {/* Supporting icons */}
        {event.symbol?.supporting[0] && (
          <div className="absolute left-7 bottom-7 opacity-25">{event.symbol.supporting[0]}</div>
        )}
        {event.symbol?.supporting[1] && (
          <div className="absolute right-8 top-7 opacity-20">{event.symbol.supporting[1]}</div>
        )}
        {/* Main icon */}
        <div className="relative z-10 w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-xl">
          {event.symbol?.main}
        </div>
        {/* Month badge */}
        <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg transform rotate-2">
          {event.date}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        <div className="space-y-2 mb-4">
          {event.time && (
            <div className="flex items-center text-muted-foreground font-medium">
              <Clock size={18} className="mr-3 text-primary flex-shrink-0" />
              {event.time}
            </div>
          )}
          {event.location && (
            <div className="flex items-center text-muted-foreground font-medium">
              <MapPin size={18} className="mr-3 text-primary flex-shrink-0" />
              {event.location}
            </div>
          )}
        </div>

        <div className="flex-1">
          <p className="text-foreground leading-relaxed mb-2 whitespace-pre-line">{preview.desc}</p>
          {preview.truncated && (
            <p className="mb-4">
              <span className="text-muted-foreground">… </span>
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="font-bold text-primary hover:text-secondary transition-colors"
              >
                Read more
              </button>
            </p>
          )}
        </div>

        <Button
          variant="outline"
          className="w-full rounded-full py-6 font-bold border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all group-hover:border-primary"
        >
          Learn More <ArrowRight size={18} className="ml-2" />
        </Button>
      </div>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto rounded-3xl p-8 lg:p-10">
          <DialogHeader>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-secondary pr-6">
              {event.title}
            </DialogTitle>
          </DialogHeader>

          <div className="flex flex-wrap gap-x-6 gap-y-2 mb-2 text-muted-foreground font-medium text-sm">
            {event.time && (
              <div className="flex items-center">
                <Clock size={16} className="mr-2 text-primary" />
                {event.time}
              </div>
            )}
            {event.location && (
              <div className="flex items-center">
                <MapPin size={16} className="mr-2 text-primary" />
                {event.location}
              </div>
            )}
          </div>

          <EventBody
            desc={event.desc}
            lead={event.lead}
            sections={event.sections}
            highlights={event.highlights}
            recap={event.recap}
          />

          {event.hashtags && (
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">{event.hashtags}</p>
          )}
        </DialogContent>
      </Dialog>
    </motion.div>
  );
}

const MONTH_NAMES = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

/** A sortable timestamp for an event, parsed from its `time` string. Falls back to
 * Jan 1 of the year found in the string if the full date can't be parsed. */
function eventDateValue(event: BaseEvent): number {
  const time = event.time ?? "";
  const parsed = Date.parse(time);
  if (!Number.isNaN(parsed)) return parsed;
  const yearMatch = time.match(/(\d{4})/);
  return yearMatch ? Date.UTC(parseInt(yearMatch[1], 10), 0, 1) : 0;
}

/** School year runs Fall (Aug–Dec) through the following Summer (Jan–Jul), so e.g.
 * September 2025 through July 2026 are all "2025–2026". */
function eventSchoolYear(event: BaseEvent): { startYear: number; label: string } {
  const time = event.time ?? "";
  const yearMatch = time.match(/(\d{4})/);
  const year = yearMatch ? parseInt(yearMatch[1], 10) : 0;
  const monthMatch = time.match(/^[A-Za-z]+/);
  const monthIndex = monthMatch ? MONTH_NAMES.indexOf(monthMatch[0].toLowerCase()) : -1;
  const startYear = monthIndex >= 7 ? year : year - 1; // August (index 7) or later starts the Fall term
  return { startYear, label: `${startYear}–${startYear + 1}` };
}

function groupBySchoolYear(pastEvents: BaseEvent[]): [string, BaseEvent[]][] {
  const grouped = new Map<string, { startYear: number; events: BaseEvent[] }>();
  for (const event of pastEvents) {
    const { startYear, label } = eventSchoolYear(event);
    const bucket = grouped.get(label) ?? { startYear, events: [] };
    bucket.events.push(event);
    grouped.set(label, bucket);
  }
  return [...grouped.entries()]
    .sort(([, a], [, b]) => b.startYear - a.startYear)
    .map(([label, { events }]) => [
      label,
      [...events].sort((a, b) => eventDateValue(b) - eventDateValue(a)),
    ]);
}

export default function Events() {
  const [activeTab, setActiveTab] = useState<EventTab>("Past");

  const events: Record<EventTab, BaseEvent[]> = {
    Upcoming: [
      {
        title: "Resume And Portfolio Workshop",
        date: "OCT",
        time: "5:30 PM - 7:00 PM",
        location: "ECSW",
        desc: "Get Your Resume And Portfolio Polished Before Career Fair Season. Peer Reviews And Tips From Engineers At Top Tech Companies.",
        symbol: {
          bg: "#114634",
          dotColor: "rgba(255,255,255,0.10)",
          main: <FileText size={36} className="text-white" strokeWidth={1.4} />,
          supporting: [
            <Code2 size={48} className="text-white" strokeWidth={1} />,
            <Award size={40} className="text-white" strokeWidth={1} />,
          ],
        },
      },
      {
        title: "Industry Networking Mixer",
        date: "OCT",
        time: "6:00 PM - 8:30 PM",
        location: "Davidson-Gundy Alumni Center",
        desc: "Connect With Engineers And Recruiters From Our Top Sponsors. Business Casual. Food And Refreshments Provided.",
        symbol: {
          bg: "#1a1a1a",
          dotColor: "rgba(236,117,36,0.18)",
          main: <Handshake size={36} className="text-white" strokeWidth={1.4} />,
          supporting: [
            <Network size={50} className="text-white" strokeWidth={1} />,
            <Briefcase size={38} className="text-white" strokeWidth={1} />,
          ],
        },
      },
      {
        title: "Black And Latinx In Tech Panel",
        date: "NOV",
        time: "4:00 PM - 5:30 PM",
        desc: "Hear From Black And Latinx Software Engineers Sharing Their Journeys, Navigating Tech, And Advice For Landing Your First Role.",
        symbol: {
          bg: "#EC7524",
          dotColor: "rgba(255,255,255,0.12)",
          main: <Mic2 size={36} className="text-white" strokeWidth={1.4} />,
          supporting: [
            <MessageSquare size={46} className="text-white" strokeWidth={1} />,
            <Users size={38} className="text-white" strokeWidth={1} />,
          ],
        },
      },
      {
        title: "ColorStack Community Social",
        date: "NOV",
        time: "7:00 PM - 10:00 PM",
        location: "Northside",
        desc: "End-Of-Semester Celebration With The ColorStack Community. Games, Food, And Good Company Before Finals.",
        symbol: {
          bg: "#114634",
          dotColor: "rgba(236,117,36,0.20)",
          main: <Sparkles size={36} className="text-white" strokeWidth={1.4} />,
          supporting: [
            <Star size={44} className="text-white" strokeWidth={1} />,
            <Users size={36} className="text-white" strokeWidth={1} />,
          ],
        },
      },
    ],
    Past: [
      {
        title: "AfroTech Conference 2026",
        date: "NOV 2026",
        time: "November 2026",
        location: "Houston, TX",
        desc: "ColorStack UTD members traveled to Houston for AfroTech’s 10th annual conference, where they met industry professionals and explored career opportunities.",
        photos: afroTech2026Photos,
        showFullPhotos: true,
      },
      {
        title: "Yapp Session",
        date: "SEP 24",
        time: "September 24, 2026",
        location: "Sweet Hut Bakery & Cafe, 2001 Coit Rd, Suite 301, Plano, TX 75075",
        desc: "Coffee, matcha, and board games from 6:00 PM to 8:00 PM. Too much yapping was done.",
        image: `${BASE}/yapp-session.webp`,
        flyer: true,
      },
      {
        title: "Career Fair Prep 101 Workshop",
        date: "SEP 9",
        time: "September 2026",
        location: "UT Dallas",
        desc: "✨ Career Fair Prep 101 was a success! ✨\n\nThroughout the workshop, students gained practical strategies to help them feel more prepared and confident when connecting with recruiters. Attendees learned how to strengthen their resumes, research target companies, make strong first impressions, introduce themselves, and create a personalized follow-up plan.\n\nStudents learned how to:\n📄 Strengthen their resumes by highlighting relevant skills, experiences, projects, and accomplishments.\n🎯 Identify and research target companies based on their career interests and professional goals.\n👔 Make a strong first impression through professional attire, preparation, confident body language, and active listening.\n🗣️ Introduce themselves with confidence by developing a clear and authentic elevator pitch.\n🤝 Practice networking, recruiter conversations, thoughtful questions, and mock introductions.\n📩 Create a personalized follow-up plan for after the career fair.\n\nOne of the most memorable parts of the workshop was our confidence-building activity. Students used a fun jab, left, right, hook combination to shake off the jitters, bring energy into the room, and get comfortable stepping outside their comfort zones. 🥊\n\nAfter warming up, students practiced their elevator pitches four times with different students. Each round gave them the opportunity to improve their delivery, receive feedback, speak more confidently about their experiences, and make their introductions feel more natural.\n\nWe're proud of everyone who showed up ready to learn, connect, and take the next step toward securing the bag. 💼✨\n\nGood luck to everyone attending the career fair on September 9–10. We can't wait to see you put your preparation into action!",
        image: cf[0],
        photos: cf,
        hashtags: "#ColorStackUTD #CareerFairPrep #utdcomets #SecureTheBag",
        instagram: "@colorstackutd",
      },
      {
        title: "ColorStack UTD's First GBM",
        date: "SEP 15",
        time: "September 15, 2025",
        location: "UT Dallas",
        desc: "We Kicked Off The Semester With An Incredible First General Body Meeting. Thank You To Everyone Who Joined Us, Including Our Very Own Faculty Advisor Ravi Prakash. We Had Such A Meaningful Time Connecting, Sharing Our Mission, And Building Community Together.",
        image: gbm1,
        photos: [gbm1, gbm2, gbm3],
        recap: "We're Excited To Continue Creating Spaces Where Students Of Color In Tech Can Thrive.",
        instagram: "@colorstackutd",
      },
      {
        title: "Resume Night Recap",
        date: "SEP 21",
        time: "September 21, 2025",
        location: "UT Dallas",
        desc: "Last night, ColorStack UTD hosted Resume Night - and the room was locked in. 🙌🏾",
        lead: "We broke down exactly what separates candidates who get callbacks from those who don't. Here's what we covered:",
        image: rn[0],
        photos: rn,
        sections: [
          {
            heading: "📄 Jake's Resume Template - Use It",
            body: "If you're not using Jake's Resume Template, start today. It's clean, ATS-friendly, and already structured the way recruiters expect. ATS systems parse linearly - no headers, footers, tables, or graphic elements getting in the way. The goal isn't a pretty resume - it's a readable one that a machine AND a human can process in under 8 seconds. Jake's gets you there without the guesswork.",
          },
          {
            heading: "🎯 The Bullet Point Model",
            body: 'Every bullet answers: What did you do - How did you do it - Why did it matter. "Developed a data pipeline in Python that reduced reporting time by 30%" hits different than "worked on a pipeline." Context + Skills + Impact, every time.',
          },
          {
            heading: "🏆 LinkedIn + GitHub = Your Career Brand",
            body: "These are your two most important career assets outside your resume - and they need to work together. On LinkedIn, post monthly - drop screenshots of what you're building, share milestones, document your journey in real time. On GitHub, keep repos active, write clean READMEs, and make sure your pinned projects represent your best work. Most importantly - record a short video walking through your codebase. Show yourself explaining the architecture, demoing the functionality, narrating your thought process. Post it on LinkedIn. Pin it on GitHub. That video does more for your personal brand than any bullet point ever will. Recruiters want to see you in action, not just read about it.",
          },
          {
            heading: "🤝 Show You're a Team Player",
            body: "Solo projects are fine. But candidates who stand out show social proof that they collaborate. Tag teammates in project posts on LinkedIn. Document hackathons - win or lose, it doesn't matter. Share club activities, leadership roles, events you helped organize. Contribute to open source on GitHub and show your commit history. Your profile should tell the story of someone who builds with others, not just alone.",
          },
          {
            heading: "👁️ Make Projects Findable Everywhere",
            body: "Your projects need to be findable across every platform. Include your GitHub link directly on your resume and in your LinkedIn featured section. Pin your strongest repos with live demo links where possible. A project buried in your experience section with no clickable link is a missed opportunity. If you built something, show it - with a demo, a video walkthrough, a deployed link, or all three. LinkedIn + GitHub working together is your unfair advantage.",
          },
          {
            heading: "📚 Resources We Highlighted",
            body: "→ Jake's Resume Template - the go-to ATS-friendly format\n→ ColorStack National Resume Book - opens twice a year, zero reasons not to submit\n→ Handshake - UTD-targeted opportunities employers pay to post\n→ SEO, MLT, CodePath, NSBE, SHPE - don't just join, lead",
          },
          {
            heading: "🗣️ Live Elevator Pitch Rounds",
            body: "We closed with speed pitch rounds - 3 minutes per pair, 1 min pitch each, 1 min feedback. The members who practiced out loud left with a completely different level of confidence than when they walked in.",
          },
        ],
        recap: "This is what ColorStack is about. Not just information - transformation. 💚 Look out for what's next. 👀",
        hashtags: "#ColorStackUTD #UTD #ResumeNight #TechCareers #ColorStack #CareerDevelopment #JSOM",
        instagram: "@colorstackutd",
      },
      {
        title: "ColorStack UTD x Texas Chapters: AfroTech Meetup",
        date: "NOV 13",
        time: "November 13, 2025",
        location: "AfroTech Conference 2025",
        desc: "Honored We Could Host This Meetup And Connect So Many Texas Chapters In One Place. Amazing Turnout And Even Better Vibes. Texas Chapters Really Held It Down!",
        image: at[0],
        photos: at,
        highlights: [
          "ColorStack University Of North Texas",
          "ColorStack UT Austin",
          "ColorStack UTA",
          "ColorStack UNT",
          "ColorStack UH",
          "ColorStack Prairie View A&M",
          "ColorStack Loyola",
        ],
        recap: "This Is What Community Looks Like.",
        instagram: "@colorstackutd",
      },
      {
        title: "Spring Kick-Off GBM",
        date: "FEB 14",
        time: "February 14, 2026",
        location: "UT Dallas",
        desc: "Thank You To Everyone Who Came Out To Our Spring 2026 General Body Meeting! We Kicked Off The New Semester With Energy, Community, And A Full Look At Everything ColorStack UTD Has In Store.",
        image: sk[0],
        photos: sk,
        highlights: [
          "Who We Are And What ColorStack UTD Is About",
          "Upcoming Events And Opportunities For Spring 2026",
          "Networking And Community Building",
          "Workshops, Career Prep Sessions, And Company Partnerships",
        ],
        recap: "Want To Stay Connected And Never Miss An Update? Join Our Slack And Follow Along For Everything We Have Coming This Semester!",
        instagram: "@colorstackutd",
      },
      {
        title: "Debugging Your Path Into Tech",
        date: "FEB 27",
        time: "February 27, 2026",
        location: "UT Dallas",
        desc: "ColorStack UTD Hosted An Incredible Evening With Four Amazing Professionals Who Shared First-Hand Stories, Practical Advice, And Real Talk About Navigating Early Careers In Tech While Adapting To An AI-Driven World. Hosted By VP Michael Katongole.",
        image: tp[0],
        photos: tp,
        highlights: [
          "Tech Unemployment Is At 3.75%; The Jobs Aren't Disappearing, They're Changing",
          "Use CodePath's TIP For Structured DSA Practice That Simulates Real Interview Environments",
          "Learn Prompt Engineering; CodePath's 10-Week Applied AI Engineering Course Teaches AI-Assisted Workflows And Rapid Prototyping",
          "Have 6 Behavioral Stories Ready Using The CARL Method (Context, Action, Result, Learning)",
          "Join ColorStack, NSBE Professionals, And More. And Don't Just Join, Lead!",
          "Reviewed 12 Industry-Level Projects Using AWS, Azure, Kubernetes, Docker, And BigQuery",
        ],
        recap: "Thank You To Panelists Sofia Gutierrez, Loryn Higginbotham, Christian Reynolds, And Dami Oyadiran For Giving Your Time, Wisdom, And Energy To The Next Generation Of Tech Professionals.",
        instagram: "@colorstackutd",
      },
      {
        title: "API 101: Wall St. Decoded",
        date: "MAR 27",
        time: "March 27, 2026",
        location: "UT Dallas",
        desc: "ColorStack UTD Hosted A Hands-On Workshop With One Clear Goal: Get Members Comfortable Working With APIs And Understanding How They Power Tools Across Web Design And Tech. Led By Oluwadamilare Sunmola, With Michael Katongole Opening On HTTP Fundamentals, REST API Architecture, And JSON.",
        image: api101,
        photos: [api101],
        highlights: [
          "HTTP Fundamentals: Requests, Responses, Status Codes, And Client-Server Communication",
          "Python Flask And JavaScript: Backend Routes Exposed Via Flask, Consumed With Fetch() On The Frontend",
          "Live Yahoo Finance And Gemini API Integration: Real Stock Data And AI-Powered Analysis In One App",
          "Version Control With GitHub: Initializing Repos, Committing, And Pushing Professional Workflows",
        ],
        recap: "To Every Attendee Who Showed Up, Engaged, And Put In The Work: Mastery Is Built One Session At A Time. Last Night Was A Meaningful Step In That Direction.",
        instagram: "@colorstackutd",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] w-full pb-24">
      {/* Header */}
      <section className="bg-secondary py-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight" style={{ fontFamily: "'Fira Code', monospace" }}>
            <span className="text-white/30">&lt;</span>
            <span className="text-white"> Our Events </span>
            <span className="text-white/30">/&gt;</span>
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto">
            Discover Opportunities To Learn, Grow, And Connect With The ColorStack UTD Community.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 mt-12">
        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-border inline-flex">
            {(["Past", "Upcoming"] as EventTab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-primary text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-testid={`tab-${tab.toLowerCase()}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Event Grid */}
        {activeTab === "Upcoming" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {events.Upcoming.map((event, idx) => (
              <UpcomingCard key={`upcoming-${idx}`} event={event} idx={idx} />
            ))}
          </div>
        ) : (
          groupBySchoolYear(events.Past).map(([schoolYear, yearEvents]) => (
            <div key={schoolYear} className="mb-16 last:mb-0">
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8">{schoolYear}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {yearEvents.map((event, idx) => (
                  <GBMCard key={`past-${schoolYear}-${idx}`} event={event} idx={idx} />
                ))}
              </div>
            </div>
          ))
        )}

        {events[activeTab].length === 0 && (
          <div className="text-center py-24 text-muted-foreground text-xl font-medium">
            No {activeTab.toLowerCase()} events to show.
          </div>
        )}
      </div>
    </div>
  );
}

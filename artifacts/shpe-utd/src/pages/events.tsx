import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight, Instagram, FileText, Code2, Award, Network, Users, Briefcase, Mic2, MessageSquare, Sparkles, Star, Handshake } from "lucide-react";

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const gbm1 = `${BASE}/gbm-1.jpg`;
const gbm2 = `${BASE}/gbm-2.jpg`;
const gbm3 = `${BASE}/gbm-3.jpg`;
const rn = Array.from({ length: 11 }, (_, i) => `${BASE}/rn-${i + 1}.jpg`);
const at = [1, 2, 4, 5, 6, 7, 8].map(i => `${BASE}/at-${i}.jpg`);
const sk = Array.from({ length: 6 }, (_, i) => `${BASE}/sk-${i + 1}.jpg`);
const tp = Array.from({ length: 6 }, (_, i) => `${BASE}/tp-${i + 1}.jpg`);
const api101 = `${BASE}/api101.jpg`;

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
  photos?: string[];
  symbol?: SymbolConfig;
  recap?: string;
  highlights?: string[];
  instagram?: string;
}

/* ── Past event: full-width card with rotating photo gallery ── */
function GBMCard({ event, idx }: { event: BaseEvent; idx: number }) {
  const photos = event.photos ?? [event.image!];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (photos.length <= 1) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % photos.length);
    }, 3000);
    return () => clearInterval(id);
  }, [photos.length]);

  return (
    <motion.div
      key={`past-${idx}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col group col-span-1 md:col-span-2 lg:col-span-3"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Photo gallery */}
        <div className="relative lg:w-1/2 h-72 lg:h-auto overflow-hidden flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={photos[current]}
              alt={`${event.title} photo ${current + 1}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg transform rotate-2">
            {event.date}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-white scale-125" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-10 flex flex-col flex-1 justify-between">
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

            <p className="text-foreground leading-relaxed mb-5">{event.desc}</p>

            {event.highlights && (
              <ul className="space-y-2 mb-5">
                {event.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            )}

            {event.recap && (
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">{event.recap}</p>
            )}
          </div>

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
    </motion.div>
  );
}

/* ── Upcoming event: mood-board collage card ── */
function UpcomingCard({ event, idx }: { event: BaseEvent; idx: number }) {
  const photos = event.collage ?? [];

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

        <p className="text-foreground leading-relaxed mb-6 flex-1">{event.desc}</p>

        <Button
          variant="outline"
          className="w-full rounded-full py-6 font-bold border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all group-hover:border-primary"
        >
          Learn More <ArrowRight size={18} className="ml-2" />
        </Button>
      </div>
    </motion.div>
  );
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
        desc: "We Hosted An Engaging Resume Night Where Members Gained Practical Resume Tips For Breaking Into Tech Careers, LinkedIn 101 Strategies To Strengthen Their Online Presence, And Networking And Development Resources To Stay Involved And Grow Professionally.",
        image: rn[0],
        photos: rn,
        highlights: [
          "Practical Resume Tips For Breaking Into Tech Careers",
          "LinkedIn 101 Strategies To Strengthen Their Online Presence",
          "Networking And Development Resources To Stay Connected",
        ],
        recap: "A Huge Thank You To Our UT Dallas University Career Center Reps Brett Webb And Juna Jones-Moore, Along With Board Members Michael, Oluwadamilare, And Akram For Leading The Panel And Offering 1:1 Resume Reviews! If You're Interested In Accessing Our Resume Night Resources, Be Sure To Join Our Slack.",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {activeTab === "Upcoming"
            ? events.Upcoming.map((event, idx) => (
                <UpcomingCard key={`upcoming-${idx}`} event={event} idx={idx} />
              ))
            : events.Past.map((event, idx) => (
                <GBMCard key={`past-${idx}`} event={event} idx={idx} />
              ))}
        </div>

        {events[activeTab].length === 0 && (
          <div className="text-center py-24 text-muted-foreground text-xl font-medium">
            No {activeTab.toLowerCase()} events to show.
          </div>
        )}
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, ArrowRight, Instagram } from "lucide-react";
import event1 from "@/assets/images/event-1.png";
import event2 from "@/assets/images/event-2.png";
import event3 from "@/assets/images/event-3.png";
import event4 from "@/assets/images/event-4.png";
const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
const gbm1 = `${BASE}/gbm-1.jpg`;
const gbm2 = `${BASE}/gbm-2.jpg`;
const gbm3 = `${BASE}/gbm-3.jpg`;
const rn = Array.from({ length: 11 }, (_, i) => `${BASE}/rn-${i + 1}.jpg`);

type EventTab = "Upcoming" | "Past";

interface BaseEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  desc: string;
  image: string;
  photos?: string[];
  recap?: string;
  upNext?: string;
  highlights?: string[];
  instagram?: string;
}

function GBMCard({ event, idx }: { event: BaseEvent; idx: number }) {
  const photos = event.photos ?? [event.image];
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
          {/* Dot indicators */}
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
              <div className="flex items-center">
                <Clock size={18} className="mr-2 text-primary" />
                {event.time}
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-2 text-primary" />
                {event.location}
              </div>
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

function StandardCard({ event, idx }: { event: BaseEvent; idx: number }) {
  return (
    <motion.div
      key={`event-${idx}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col group"
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg transform rotate-2">
          {event.date}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        <div className="space-y-3 mb-6 flex-1">
          <div className="flex items-center text-muted-foreground font-medium">
            <Clock size={18} className="mr-3 text-primary" />
            {event.time}
          </div>
          <div className="flex items-center text-muted-foreground font-medium">
            <MapPin size={18} className="mr-3 text-primary" />
            {event.location}
          </div>
          <p className="text-foreground leading-relaxed mt-4">{event.desc}</p>
        </div>

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
  const [activeTab, setActiveTab] = useState<EventTab>("Upcoming");

  const events: Record<EventTab, BaseEvent[]> = {
    Upcoming: [
      {
        title: "Resume & Portfolio Workshop",
        date: "OCT 12",
        time: "5:30 PM - 7:00 PM",
        location: "ECSW 1.315",
        desc: "Get your resume and portfolio polished before career fair season. Peer reviews and tips from engineers at top tech companies.",
        image: event1,
      },
      {
        title: "Industry Networking Mixer",
        date: "OCT 20",
        time: "6:00 PM - 8:30 PM",
        location: "Davidson-Gundy Alumni Center",
        desc: "Connect with engineers and recruiters from our top sponsors. Business casual. Food and refreshments provided.",
        image: event2,
      },
      {
        title: "Black & Latinx in Tech Panel",
        date: "NOV 05",
        time: "4:00 PM - 5:30 PM",
        location: "SSA 14.244",
        desc: "Hear from Black and Latinx software engineers sharing their journeys, navigating tech, and advice for landing your first role.",
        image: event3,
      },
      {
        title: "ColorStack Community Social",
        date: "NOV 22",
        time: "7:00 PM - 10:00 PM",
        location: "Northside Clubhouse",
        desc: "End-of-semester celebration with the ColorStack community. Games, food, and good company before finals.",
        image: event4,
      },
    ],
    Past: [
      {
        title: "ColorStack UTD's First GBM",
        date: "SEP 15",
        time: "September 15, 2025",
        location: "UT Dallas",
        desc: "We kicked off the semester with an incredible first General Body Meeting. Thank you to everyone who joined us — including our very own faculty advisor Ravi Prakash — we had such a meaningful time connecting, sharing our mission, and building community together.",
        image: gbm1,
        photos: [gbm1, gbm2, gbm3],
        recap: "We're excited to continue creating spaces where students of color in tech can thrive.",
        instagram: "@colorstackutd",
      },
      {
        title: "Resume Night Recap",
        date: "SEP 21",
        time: "September 21, 2025",
        location: "UT Dallas",
        desc: "We hosted an engaging Resume Night where members gained practical resume tips for breaking into tech careers, LinkedIn 101 strategies to strengthen their online presence, and networking and development resources to stay involved and grow professionally.",
        image: rn[0],
        photos: rn,
        highlights: [
          "Practical resume tips for breaking into tech careers",
          "LinkedIn 101 strategies to strengthen their online presence",
          "Networking and development resources to stay connected",
        ],
        recap: "A huge thank you to our UT Dallas University Career Center reps Brett Webb and Juna Jones-Moore, along with board members Michael, Oluwadamilare, and Akram for leading the panel and offering 1:1 resume reviews! If you're interested in accessing our Resume Night resources, be sure to join our Slack.",
        instagram: "@colorstackutd",
      },
      {
        title: "Technical Interview Prep",
        date: "SEP 18",
        time: "6:00 PM - 8:00 PM",
        location: "ECSW 1.315",
        desc: "Cracking the coding interview with LeetCode deep-dives and system design walkthroughs led by senior members.",
        image: event1,
      },
      {
        title: "Coffee Chat with Google Engineers",
        date: "SEP 25",
        time: "3:00 PM - 5:00 PM",
        location: "Student Union, Room 2.410",
        desc: "Informal coffee chats with engineers from Google — ask anything about their career paths, day-to-day work, and internship tips.",
        image: event2,
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
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Upcoming Events
          </h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto">
            Discover opportunities to learn, grow, and connect with the ColorStack UTD community.
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 mt-12">
        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full shadow-sm border border-border inline-flex">
            {(["Upcoming", "Past"] as EventTab[]).map((tab) => (
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
          {events[activeTab].map((event, idx) =>
            event.photos ? (
              <GBMCard key={`${activeTab}-${idx}`} event={event} idx={idx} />
            ) : (
              <StandardCard key={`${activeTab}-${idx}`} event={event} idx={idx} />
            )
          )}
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

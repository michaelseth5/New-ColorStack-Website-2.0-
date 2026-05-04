import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Clock, ArrowRight } from "lucide-react";
import event1 from "@/assets/images/event-1.png";
import event2 from "@/assets/images/event-2.png";
import event3 from "@/assets/images/event-3.png";
import event4 from "@/assets/images/event-4.png";

type EventTab = "Upcoming" | "Past";

export default function Events() {
  const [activeTab, setActiveTab] = useState<EventTab>("Upcoming");

  const events = {
    "Upcoming": [
      {
        title: "Resume & Portfolio Workshop",
        date: "OCT 12",
        time: "5:30 PM - 7:00 PM",
        location: "ECSW 1.315",
        desc: "Get your resume and portfolio ready for the upcoming career fair. Peer reviews and recruiter insights.",
        image: event1
      },
      {
        title: "Industry Networking Mixer",
        date: "OCT 20",
        time: "6:00 PM - 8:30 PM",
        location: "Davidson-Gundy Alumni Center",
        desc: "Connect with professionals from our top sponsors. Food and refreshments provided. Business casual.",
        image: event2
      },
      {
        title: "Latina in STEM Panel",
        date: "NOV 05",
        time: "4:00 PM - 5:30 PM",
        location: "SSA 14.244",
        desc: "Hear from successful Latina engineers sharing their journey, challenges, and triumphs in the industry.",
        image: event3
      },
      {
        title: "SHPEsgiving Social",
        date: "NOV 22",
        time: "7:00 PM - 10:00 PM",
        location: "Northside Clubhouse",
        desc: "Join our familia for a potluck dinner to celebrate our community before the Thanksgiving break.",
        image: event4
      }
    ],
    "Past": [
      {
        title: "First General Meeting",
        date: "SEP 05",
        time: "5:30 PM - 7:00 PM",
        location: "ECSW 1.100",
        desc: "Welcome back! Kickoff the semester learning about what SHPE UTD has planned for this year.",
        image: event4
      },
      {
        title: "Technical Interview Prep",
        date: "SEP 18",
        time: "6:00 PM - 8:00 PM",
        location: "ECSW 1.315",
        desc: "Deep dive into LeetCode problems and system design questions with senior members.",
        image: event1
      },
      {
        title: "Hispanic Heritage Month Fiesta",
        date: "SEP 25",
        time: "4:00 PM - 7:00 PM",
        location: "Plinth",
        desc: "Celebrating our culture with music, food, and dancing on the campus plinth.",
        image: event2
      }
    ]
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
            Discover opportunities to learn, grow, and connect with the SHPE familia.
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
          {events[activeTab].map((event, idx) => (
            <motion.div
              key={`${activeTab}-${idx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border flex flex-col group"
            >
              {/* Image */}
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

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">{event.title}</h3>
                
                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-center text-muted-foreground font-medium">
                    <Clock size={18} className="mr-3 text-primary" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-muted-foreground font-medium">
                    <MapPin size={18} className="mr-3 text-primary" />
                    {event.location}
                  </div>
                  <p className="text-foreground leading-relaxed mt-4">
                    {event.desc}
                  </p>
                </div>
                
                <Button 
                  variant="outline"
                  className="w-full rounded-full py-6 font-bold border-2 border-primary/20 text-primary hover:bg-primary hover:text-white transition-all group-hover:border-primary"
                  data-testid={`button-event-${idx}`}
                >
                  Learn More <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>
            </motion.div>
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
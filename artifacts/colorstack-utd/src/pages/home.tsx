import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Briefcase, Mail, Linkedin } from "lucide-react";
import { SiInstagram } from "react-icons/si";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import team1 from "@/assets/images/team-1.png";
import team2 from "@/assets/images/team-2.png";
import team3 from "@/assets/images/team-3.png";
import team4 from "@/assets/images/team-4.png";
import team5 from "@/assets/images/team-5.png";
import heroBg from "@/assets/images/hero-bg.png";

const events = [
  {
    title: "Resume Workshop",
    date: "Sep 15, 2024",
    time: "6:00 PM",
    location: "ECSW 1.100",
    type: "Career",
  },
  {
    title: "Big Tech Panel",
    date: "Sep 22, 2024",
    time: "7:00 PM",
    location: "TI Auditorium",
    type: "Networking",
  },
  {
    title: "LeetCode Grind",
    date: "Oct 5, 2024",
    time: "5:30 PM",
    location: "SSA 14.244",
    type: "Technical",
  },
];

const team = [
  { name: "Marcus Johnson", role: "President", image: team1 },
  { name: "Elena Rodriguez", role: "Vice President", image: team2 },
  { name: "Sarah Williams", role: "Treasurer", image: team3 },
  { name: "David Martinez", role: "Events Lead", image: team4 },
  { name: "James Carter", role: "Technical Director", image: team5 },
];

const sponsors = [
  { name: "Google", tier: "Platinum" },
  { name: "Microsoft", tier: "Platinum" },
  { name: "Capital One", tier: "Gold" },
  { name: "JPMorgan Chase", tier: "Gold" },
  { name: "Toyota", tier: "Silver" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-hidden selection:bg-primary/30">
      {/* Abstract Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute bottom-[10%] right-[10%] w-[25%] h-[25%] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/50 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">
              ColorStack <span className="text-primary">UTD</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm text-muted-foreground hover:text-white transition-colors">About</a>
            <a href="#events" className="text-sm text-muted-foreground hover:text-white transition-colors">Events</a>
            <a href="#team" className="text-sm text-muted-foreground hover:text-white transition-colors">Team</a>
            <a href="#sponsors" className="text-sm text-muted-foreground hover:text-white transition-colors">Sponsors</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-white transition-colors">Contact</a>
          </div>
          <Button className="hidden md:flex rounded-full">Join Us</Button>
        </div>
      </nav>

      <main className="relative z-10 pt-32">
        {/* Hero Section */}
        <section className="container mx-auto px-6 min-h-[80vh] flex flex-col justify-center items-center text-center py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary mb-4 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now accepting Fall applications
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
              Where Ambition Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-accent">Community.</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are a tight-knit organization of first-gen and underrepresented computing students at UT Dallas determined to land top tech internships and change what the industry looks like.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <Button size="lg" className="rounded-full px-8 text-base bg-primary hover:bg-primary/90 text-primary-foreground h-14">
                Join ColorStack
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-white/10 bg-white/5 hover:bg-white/10 h-14 backdrop-blur-sm">
                <SiInstagram className="mr-2 h-5 w-5" />
                Follow Us
              </Button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="mt-20 w-full max-w-5xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative aspect-video bg-card"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent z-10" />
            <img src={heroBg} alt="Abstract Background" className="w-full h-full object-cover" />
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-black/40 backdrop-blur-sm border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold tracking-tight">Building the Next Generation of Tech Leaders.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ColorStack UTD exists to increase the number of Black and Latinx students in computing and tech careers. We provide the community, academic support, and career development resources needed to thrive.
                </p>
                <div className="grid grid-cols-2 gap-6 pt-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-primary">100+</h3>
                    <p className="text-sm text-muted-foreground">Active Members</p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold text-accent">50+</h3>
                    <p className="text-sm text-muted-foreground">Internships Secured</p>
                  </div>
                </div>
              </motion.div>
              
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-white/5 border-white/10 backdrop-blur-md">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg">Community</h3>
                    <p className="text-sm text-muted-foreground">Find your people. A supportive network of peers who understand your journey.</p>
                  </CardContent>
                </Card>
                <Card className="bg-white/5 border-white/10 backdrop-blur-md translate-y-8">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/20 flex items-center justify-center text-accent">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg">Career Prep</h3>
                    <p className="text-sm text-muted-foreground">Resume reviews, mock interviews, and direct connections to recruiters.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="py-32">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-2xl"
              >
                <h2 className="text-4xl font-bold tracking-tight mb-4">Upcoming Events</h2>
                <p className="text-lg text-muted-foreground">Join us for technical workshops, career panels, and community hangouts.</p>
              </motion.div>
              <Button variant="outline" className="rounded-full border-white/10 bg-white/5">View Full Calendar</Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {events.map((event, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="bg-card/50 border-white/10 backdrop-blur-md hover:bg-card/80 transition-all duration-300 group overflow-hidden relative h-full">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                    <CardContent className="p-8">
                      <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-xs font-medium text-primary mb-6">
                        {event.type}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>
                      <div className="space-y-3 text-muted-foreground text-sm">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span>{event.date} • {event.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-4 h-4 rounded-full border border-accent flex items-center justify-center" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-32 bg-black/40 backdrop-blur-sm border-y border-white/5 relative overflow-hidden">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto mb-20"
            >
              <h2 className="text-4xl font-bold tracking-tight mb-4">Meet the Team</h2>
              <p className="text-lg text-muted-foreground">The dedicated students driving ColorStack UTD's mission forward.</p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {team.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-3xl overflow-hidden border border-white/10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="py-32">
          <div className="container mx-auto px-6 text-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight mb-4">Supported By</h2>
              <p className="text-muted-foreground">Top companies that believe in our mission.</p>
            </motion.div>

            <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
              {sponsors.map((sponsor, i) => (
                <div key={i} className="text-2xl font-bold tracking-wider uppercase text-white/50 hover:text-white transition-colors duration-300">
                  {sponsor.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/CTA */}
        <section id="contact" className="py-32 relative">
          <div className="absolute inset-0 bg-primary/5 border-t border-primary/20 backdrop-blur-xl" />
          <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-bold tracking-tight">Ready to make your mark?</h2>
              <p className="text-xl text-muted-foreground">
                Join a community of driven individuals. Build your skills, expand your network, and launch your career.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="rounded-full px-8 h-14 text-lg bg-primary hover:bg-primary/90 text-primary-foreground">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg bg-black/50 border-white/10 hover:bg-white/10">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 bg-background relative z-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight">
            ColorStack <span className="text-primary">UTD</span>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors"><SiInstagram className="h-6 w-6" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Mail className="h-6 w-6" /></a>
          </div>
          <p className="text-sm text-muted-foreground">© 2024 ColorStack UTD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

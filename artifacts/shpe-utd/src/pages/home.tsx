import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import heroImg from "@/assets/images/hero.png";
import { useEffect, useState, useCallback } from "react";

function AnimatedCounter({ end, duration = 2 }: { end: number, duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / (duration * 1000), 1);
      const easeOut = 1 - Math.pow(1 - percentage, 3);
      setCount(Math.floor(easeOut * end));
      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}</span>;
}

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(1);

  const testimonials = [
    {
      name: "Maria Rodriguez",
      year: "Senior, Computer Science",
      quote: "SHPE UTD gave me the community I didn't know I needed. It's more than an organization; it's a familia that supports you through every tough exam and interview process."
    },
    {
      name: "Carlos Gomez",
      year: "Junior, Mechanical Engineering",
      quote: "The professional development workshops completely transformed my resume. I landed my dream internship thanks to the connections I made through SHPE's corporate partners."
    },
    {
      name: "Elena Silva",
      year: "Sophomore, Biomedical Engineering",
      quote: "Being part of SHPE has helped me grow as a leader. The opportunities to serve our community while building technical skills are incredible."
    }
  ];

  const next = useCallback(() => {
    setDirection(1);
    setCurrentTestimonial((c) => (c + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrentTestimonial((c) => (c - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="w-full min-h-[90vh] md:min-h-[85vh] flex flex-col md:flex-row border-b">
        {/* Left Column - Image */}
        <div className="w-full md:w-[55%] h-[50vh] md:h-auto relative overflow-hidden">
          <div className="absolute inset-0 bg-secondary/10 z-10"></div>
          <img 
            src={heroImg} 
            alt="Diverse Hispanic engineering students at UTD" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        {/* Right Column - Content */}
        <div className="w-full md:w-[45%] flex flex-col justify-center bg-white p-8 md:p-16 lg:p-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight mb-6">
              Welcome to <span className="text-primary block mt-2">SHPE</span> at UT Dallas
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-md">
              Empowering Hispanic engineering students to become leaders in STEM through community, professional development, and academic excellence.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-10 py-6 text-lg font-bold w-fit shadow-lg shadow-primary/25" data-testid="button-hero-join">
              Become a Member
            </Button>
            
            {/* Sponsors Marquee */}
            <div className="mt-20 overflow-hidden w-full">
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-4">Our Supporters</p>
              <div className="flex w-[200%] gap-8 animate-marquee items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                <span className="text-2xl font-bold font-sans">Google</span>
                <span className="text-2xl font-bold font-sans">Microsoft</span>
                <span className="text-2xl font-bold font-sans">ExxonMobil</span>
                <span className="text-2xl font-bold font-sans">Boeing</span>
                <span className="text-2xl font-bold font-sans">Capital One</span>
                <span className="text-2xl font-bold font-sans">Toyota</span>
                <span className="text-2xl font-bold font-sans">Raytheon</span>
                {/* Duplicate for infinite effect */}
                <span className="text-2xl font-bold font-sans">Google</span>
                <span className="text-2xl font-bold font-sans">Microsoft</span>
                <span className="text-2xl font-bold font-sans">ExxonMobil</span>
                <span className="text-2xl font-bold font-sans">Boeing</span>
                <span className="text-2xl font-bold font-sans">Capital One</span>
                <span className="text-2xl font-bold font-sans">Toyota</span>
                <span className="text-2xl font-bold font-sans">Raytheon</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dark Green Band */}
      <section className="bg-secondary py-16 md:py-24 text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter">Our Mission.</h2>
        </motion.div>
      </section>

      {/* Mission Text */}
      <section className="bg-white py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium text-foreground leading-relaxed"
          >
            We empower the Hispanic community at UT Dallas to realize its fullest potential and impact the world through STEM awareness, access, support, and development. <span className="font-bold text-primary block mt-4">We are more than a chapter. We are a familia.</span>
          </motion.p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-[#F5F5F5] py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen size={40} strokeWidth={1.5} />,
                title: "Workshops",
                desc: "Technical deep-dives, resume reviews, and academic support to ensure you excel in your coursework."
              },
              {
                icon: <Briefcase size={40} strokeWidth={1.5} />,
                title: "Professional Development",
                desc: "Direct access to recruiters, mock interviews, and career fair prep to land top internships."
              },
              {
                icon: <Users size={40} strokeWidth={1.5} />,
                title: "Community",
                desc: "Social events, mentorship programs, and a supportive network that feels like home away from home."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-border/50 hover:border-primary/50 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                <div className="text-secondary group-hover:text-primary transition-colors duration-300 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="bg-secondary py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x-0 md:divide-x divide-white/20">
            {[
              { num: 200, label: "Members", suffix: "+" },
              { num: 40, label: "Events Hosted", suffix: "+" },
              { num: 75, label: "Internship Offers", suffix: "+" },
              { num: 20, label: "Industry Partners", suffix: "+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex flex-col items-center justify-center p-4"
              >
                <div className="text-5xl md:text-6xl font-black text-white mb-2 flex items-center">
                  <AnimatedCounter end={stat.num} />{stat.suffix}
                </div>
                <p className="text-primary font-bold tracking-wider uppercase text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Voices of SHPE UTD */}
      <section className="bg-white py-24 px-4 overflow-hidden">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Voices of SHPE UTD</h2>
            <p className="text-xl text-muted-foreground">Hear directly from our members.</p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="bg-[#F5F5F5] rounded-3xl p-10 md:p-16 text-center border border-border/50">
                  <p className="text-2xl md:text-3xl font-medium italic text-foreground leading-relaxed mb-10">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <div>
                    <h4 className="text-xl font-bold text-secondary mb-1">{testimonials[currentTestimonial].name}</h4>
                    <p className="text-primary font-medium">{testimonials[currentTestimonial].year}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors" data-testid="testimonial-prev">
                <ChevronLeft size={20} />
              </button>
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => { setDirection(i > currentTestimonial ? 1 : -1); setCurrentTestimonial(i); }} className={`w-2.5 h-2.5 rounded-full transition-colors ${i === currentTestimonial ? "bg-primary" : "bg-border"}`} />
              ))}
              <button onClick={next} className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors" data-testid="testimonial-next">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="bg-[#F5F5F5] py-24 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 text-center shadow-sm border border-border/50 flex flex-col items-center group"
            >
              <div className="h-16 w-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Sponsorship</h3>
              <p className="text-muted-foreground mb-8 flex-1">Support our mission and connect with top Hispanic engineering talent at UTD.</p>
              <Link href="/sponsors">
                <Button className="bg-secondary hover:bg-secondary/90 w-full rounded-full py-6 text-lg font-bold group-hover:shadow-lg transition-all" data-testid="button-partner">
                  Partner with us
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-primary rounded-3xl p-10 text-center shadow-lg shadow-primary/20 flex flex-col items-center"
            >
              <div className="h-16 w-16 bg-white/20 text-white rounded-full flex items-center justify-center mb-6">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Join the Community</h3>
              <p className="text-white/90 mb-8 flex-1">Become a part of our familia and take your college experience to the next level.</p>
              <Button className="bg-white text-primary hover:bg-white/90 w-full rounded-full py-6 text-lg font-bold shadow-md" data-testid="button-join-community">
                Become a Member
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-10 text-center shadow-sm border border-border/50 flex flex-col items-center group"
            >
              <div className="h-16 w-16 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <BookOpen size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
              <p className="text-muted-foreground mb-8 flex-1">Have questions? Want to collaborate? We'd love to hear from you.</p>
              <Link href="/about">
                <Button variant="outline" className="w-full rounded-full py-6 text-lg font-bold border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-all group-hover:shadow-lg" data-testid="button-contact">
                  Get in Touch
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export default function Sponsors() {
  const sponsors = {
    gold: ["Google", "Microsoft"],
    silver: ["Goldman Sachs", "Capital One", "Salesforce"],
    bronze: ["Dropbox", "Stripe", "Figma", "Notion"]
  };

  return (
    <div className="min-h-screen bg-white w-full pb-24">
      {/* Header */}
      <section className="bg-secondary py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight" style={{ fontFamily: "'Fira Code', monospace" }}>
            <span className="text-white/30">&lt;</span>
            <span className="text-white"> Our Sponsors </span>
            <span className="text-white/30">/&gt;</span>
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-medium max-w-3xl mx-auto">
            The companies that invest in our members and get some of the most technically prepared Black and Latinx engineers in return.
          </p>
        </motion.div>
      </section>

      <div className="container mx-auto px-4 mt-20 max-w-6xl">
        {/* Gold Tier */}
        <div className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent to-yellow-500/50 flex-1"></div>
            <h2 className="text-3xl font-black text-yellow-600 tracking-widest uppercase px-6 py-2 border-2 border-yellow-500/30 rounded-full bg-yellow-50/50">Gold Tier</h2>
            <div className="h-px bg-gradient-to-l from-transparent to-yellow-500/50 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {sponsors.gold.map((sponsor, idx) => (
              <motion.div
                key={sponsor}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-16 shadow-xl border border-yellow-100 flex items-center justify-center aspect-video hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <span className="text-5xl md:text-6xl font-black text-secondary">{sponsor}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Silver Tier */}
        <div className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent to-gray-400/50 flex-1"></div>
            <h2 className="text-2xl font-black text-gray-500 tracking-widest uppercase px-6 py-2 border-2 border-gray-400/30 rounded-full bg-gray-50">Silver Tier</h2>
            <div className="h-px bg-gradient-to-l from-transparent to-gray-400/50 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {sponsors.silver.map((sponsor, idx) => (
              <motion.div
                key={sponsor}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-[#F5F5F5] rounded-3xl p-10 shadow-md border border-border flex items-center justify-center aspect-video hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-3xl font-black text-secondary">{sponsor}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bronze Tier */}
        <div className="mb-24">
          <div className="flex items-center gap-6 mb-12">
            <div className="h-px bg-gradient-to-r from-transparent to-orange-400/50 flex-1"></div>
            <h2 className="text-xl font-black text-orange-700 tracking-widest uppercase px-6 py-2 border-2 border-orange-400/30 rounded-full bg-orange-50">Bronze Tier</h2>
            <div className="h-px bg-gradient-to-l from-transparent to-orange-400/50 flex-1"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {sponsors.bronze.map((sponsor, idx) => (
              <motion.div
                key={sponsor}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-border flex items-center justify-center aspect-video hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xl font-bold text-secondary text-center">{sponsor}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-secondary text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-20 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary opacity-20 blur-[100px] rounded-full"></div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Become a Sponsor</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Our members are cracked. They're also looking for their next opportunity. Partner with us to access resume books, host recruiting events, and build your pipeline directly with the best Black and Latinx tech talent at UTD.
            </p>
            <a href="mailto:colorstackutd@utdallas.edu">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full py-8 px-12 text-xl font-bold shadow-xl shadow-primary/30 hover:scale-105 transition-all" data-testid="button-sponsor-mailto">
                <Mail className="mr-3 h-6 w-6" />
                Contact Us
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

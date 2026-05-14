import { motion } from "framer-motion";

import hajarImg from "@assets/Hajar_Abdulkadir_1778782883426.jpg";
import oluwadamilareImg from "@assets/Oluwadamilare_Sunmola_1778782883429.jpg";
import michaelImg from "@assets/Michael_Katongole_1778782883428.png";
import ramziImg from "@assets/Ramzi_Burhan_1778782883429.jpg";
import marwanImg from "@assets/Marwan_Hegazy_1778782883427.jpg";
import nohaImg from "@assets/Noha_Markose_1778782883428.jpg";
import akramImg from "@assets/Akram_Hassen_1778782883426.jpg";
import musaImg from "@assets/Musa_Mudesir_1778782883428.jpg";
import placeholderImg from "@assets/og_1778782883429.png";
import nadirImg from "@assets/Nadir_Muktar_1778782883428.jpg";
import joseImg from "@assets/Jose_Rogel_1778782883427.png";
import sabrinaImg from "@assets/Sabrina_Abubaker_1778782883430.jpg";
import timageImg from "@assets/Timage_Abubaker_1778782883430.jpg";
import hassetImg from "@assets/Hasset_Getachew_1778782883426.jpg";
import henosImg from "@assets/Henos_Tekie_1778782883427.jpg";
import raviImg from "@assets/Ravi_Prakash_1778782883429.jpg";

interface Officer {
  name: string;
  title: string;
  image: string;
}

const leadership: Officer[] = [
  { name: "Hajar Abdulkadir", title: "Co-President", image: hajarImg },
  { name: "Oluwadamilare Sunmola", title: "Co-President", image: oluwadamilareImg },
  { name: "Michael Katongole", title: "Vice President", image: michaelImg },
  { name: "Ramzi Burhan", title: "Treasurer", image: ramziImg },
  { name: "Marwan Hegazy", title: "Secretary", image: marwanImg },
];

const operations: Officer[] = [
  { name: "Noha Markose", title: "Public Communications", image: nohaImg },
  { name: "Akram Hassen", title: "Academic & Career Chair", image: akramImg },
  { name: "Musa Mudesir", title: "Corporate & Outreach", image: musaImg },
  { name: "Maareb Fadlalah", title: "Fundraising Chair", image: placeholderImg },
];

interface Ambassador {
  name: string;
  image: string;
}

const ambassadors: Ambassador[] = [
  { name: "Nadir Muktar", image: nadirImg },
  { name: "Jose Rogel", image: joseImg },
  { name: "Sabrina Abubaker", image: sabrinaImg },
  { name: "Timage Abubaker", image: timageImg },
  { name: "Hasset Getachew", image: hassetImg },
  { name: "Henos Tekie", image: henosImg },
];

const advisor: Officer = {
  name: "Dr. Ravi Prakash",
  title: "Faculty Advisor",
  image: raviImg,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" },
  }),
};

function OfficerCard({ officer, index }: { officer: Officer; index: number }) {
  return (
    <motion.div
      custom={index}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-[#fdf4ee] relative">
        <img
          src={officer.image}
          alt={officer.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </div>
      <p className="text-xs font-bold tracking-widest text-primary uppercase mb-1">
        {officer.title}
      </p>
      <h3 className="text-lg font-bold text-foreground leading-snug">
        {officer.name}
      </h3>
    </motion.div>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="text-primary font-bold text-sm tracking-widest uppercase mb-2">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
      <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
    </div>
  );
}

export default function Board() {
  return (
    <div className="min-h-screen bg-background w-full">
      {/* Hero */}
      <section className="relative bg-secondary overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
        <div className="relative container mx-auto px-6 py-24 md:py-32 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">
              2025 – 2026
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Meet the Board
            </h1>
            <p className="text-white/75 text-lg md:text-xl max-w-3xl leading-relaxed">
              We equip every member with the technical foundation to build
              full-scale applications — from cloud infrastructure on AWS and
              Azure to production-ready code and Data Structures &amp; Algorithms.
              We also connect members with internships, new grad roles, and
              industry relationships so no talented student goes unseen.{" "}
              <span className="text-white font-semibold">
                We build builders. We open doors.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Leadership */}
        <section className="py-20 border-b border-border">
          <SectionHeading label="Executive Leadership" title="Leadership" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {leadership.map((officer, idx) => (
              <OfficerCard key={officer.name} officer={officer} index={idx} />
            ))}
          </div>
        </section>

        {/* Operations & Outreach */}
        <section className="py-20 border-b border-border">
          <SectionHeading label="Operations & Outreach" title="Operations Team" />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {operations.map((officer, idx) => (
              <OfficerCard key={officer.name} officer={officer} index={idx} />
            ))}
          </div>
        </section>

        {/* Ambassadors */}
        <section className="py-20 border-b border-border">
          <SectionHeading label="Community" title="Ambassadors" />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {ambassadors.map((amb, idx) => (
              <motion.div
                key={amb.name}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3 relative">
                  <img
                    src={amb.image}
                    alt={amb.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
                </div>
                <p className="text-xs font-bold tracking-widest text-primary uppercase mb-1">
                  Ambassador
                </p>
                <p className="font-semibold text-foreground text-sm leading-snug">
                  {amb.name}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Faculty Advisor */}
        <section className="py-20">
          <SectionHeading label="Faculty" title="Faculty Advisor" />
          <div className="max-w-xs">
            <OfficerCard officer={advisor} index={0} />
          </div>
        </section>
      </div>
    </div>
  );
}

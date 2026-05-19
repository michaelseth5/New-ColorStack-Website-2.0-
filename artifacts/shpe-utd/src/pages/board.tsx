import { motion } from "framer-motion";
import { useState } from "react";
import { Linkedin } from "lucide-react";

import logoAccenture from "@assets/company_accenture.png";
import logoCiti from "@assets/company_citi.png";
import logoJPMC from "@assets/company_jpmc.jpg";
import logoJnJ from "@assets/company_jnj.png";
import logoPurdue from "@assets/company_purdue.jpg";
import logoEA from "@assets/company_ea.svg";
import logoStellantis from "@assets/company_stellantis.png";
import logoMicrosoft from "@assets/company_microsoft.png";
import logoCapitalOne from "@assets/company_capital_one.png";
import logoCloudflare from "@assets/company_cloudflare.webp";

import hajarImg from "@assets/Hajar_Abdulkadir_1778782883426.jpg";
import oluwadamilareImg from "@assets/Oluwadamilare_Sunmola_1778782883429.jpg";
import michaelImg from "@assets/Michael_Katongole_1778782883428.png";
import ramziImg from "@assets/Ramzi_Burhan_1778782883429.jpg";
import marwanImg from "@assets/Marwan_Hegazy_1778782883427.jpg";
import nohaImg from "@assets/Noha_Markose_1778782883428.jpg";
import akramImg from "@assets/Akram_Hassen_1778782883426.jpg";
import musaImg from "@assets/Musa_Mudesir_1778782883428.jpg";
import nadirImg from "@assets/Nadir_Muktar_1778782883428.jpg";
import joseImg from "@assets/Jose_Rogel_1778782883427.png";
import sabrinaImg from "@assets/Sabrina_Abubaker_1778782883430.jpg";
import timageImg from "@assets/Timage_Abubaker_1778782883430.jpg";
import hassetImg from "@assets/Hasset_Getachew_1778782883426.jpg";
import henosImg from "@assets/Henos_1778797249996.webp";
import raviImg from "@assets/Ravi_Prakash_1778782883429.jpg";
import rodolfoImg from "@assets/Rodolfo_Gonzalez.jpg";
import damianImg from "@assets/Damian_Aguilar.jpg";
import mamoudouImg from "@assets/Mamoudou_Balde.jpg";
import maarebImg from "@assets/Maareb_Fadlalah.jpg";
import anthonioImg from "@assets/Anthonio_Odonkor.jpg";
import elizabethImg from "@assets/Elizabeth_Gonzalez.jpg";
import mayowaImg from "@assets/Mayowa_Akinyede.png";
import ugonnaImg from "@assets/Ugonna_Anyalemechi.png";
import alejandroImg from "@assets/Alejandro_Gomez_De_Mendieta.jpg";

interface Officer {
  name: string;
  title: string;
  image: string;
  classYear?: string;
  bio?: string;
  linkedinUrl?: string;
  internLogo?: string;
  internCompany?: string;
  internLogoZoom?: boolean;
  internLogoClass?: string;
}

interface Ambassador {
  name: string;
  image: string;
  linkedinUrl?: string;
  internLogo?: string;
  internCompany?: string;
  internLogoZoom?: boolean;
  internLogoClass?: string;
}

// ── 2025 – 2026 ─────────────────────────────────────────────────────────────

const leadership2025: Officer[] = [
  { name: "Hajar Abdulkadir", title: "Co-President", image: hajarImg, linkedinUrl: "https://www.linkedin.com/in/hajarabdulkadir/", internLogo: logoJPMC, internCompany: "JPMC", internLogoZoom: true },
  { name: "Oluwadamilare Sunmola", title: "Co-President", image: oluwadamilareImg, linkedinUrl: "https://www.linkedin.com/in/oluwadamilare-sunmola/", internLogo: logoCapitalOne, internCompany: "Capital One", internLogoZoom: true },
  { name: "Michael Katongole", title: "Vice President", image: michaelImg, linkedinUrl: "https://www.linkedin.com/in/michael-k-65b1a8222/", internLogo: logoCiti, internCompany: "Citi" },
  { name: "Ramzi Burhan", title: "Treasurer", image: ramziImg, linkedinUrl: "https://www.linkedin.com/in/ramziburhan/", internLogo: logoMicrosoft, internCompany: "Microsoft", internLogoZoom: true },
  { name: "Marwan Hegazy", title: "Secretary", image: marwanImg, linkedinUrl: "https://www.linkedin.com/in/marwan-hegazy/" },
];

const operations2025: Officer[] = [
  { name: "Noha Markose", title: "Public Communications", image: nohaImg, linkedinUrl: "https://www.linkedin.com/in/nohamarkose/" },
  { name: "Akram Hassen", title: "Academic & Career Chair", image: akramImg, linkedinUrl: "https://www.linkedin.com/in/akram-hassen/" },
  { name: "Musa Mudesir", title: "Corporate & Outreach", image: musaImg, linkedinUrl: "https://www.linkedin.com/in/musamudesir/", internLogo: logoJnJ, internCompany: "Johnson & Johnson", internLogoZoom: true },
  { name: "Maareb Fadlalah", title: "Fundraising Chair", image: maarebImg, linkedinUrl: "https://www.linkedin.com/in/maareb-fadlalah23/", internLogo: logoAccenture, internCompany: "Accenture", internLogoZoom: true },
];

const ambassadors2025: Ambassador[] = [
  { name: "Jose Rogel", image: joseImg, linkedinUrl: "https://www.linkedin.com/in/jose-rogel/", internLogo: logoCloudflare, internCompany: "Cloudflare", internLogoClass: "w-full h-full object-cover scale-150" },
  { name: "Timage Abubaker", image: timageImg, linkedinUrl: "https://www.linkedin.com/in/timage-abubakar/" },
  { name: "Rodolfo Gonzalez", image: rodolfoImg, linkedinUrl: "https://www.linkedin.com/in/rjgx/", internLogo: logoJPMC, internCompany: "JPMC", internLogoZoom: true },
  { name: "Hasset Getachew", image: hassetImg, linkedinUrl: "https://www.linkedin.com/in/hassetgetachew/" },
  { name: "Damian Aguilar", image: damianImg, linkedinUrl: "https://www.linkedin.com/in/damianaguilar2004/" },
  { name: "Henos Tekie", image: henosImg, linkedinUrl: "https://www.linkedin.com/in/henos-tekie-ab0104384/" },
  { name: "Mamoudou Balde", image: mamoudouImg, linkedinUrl: "https://www.linkedin.com/in/m-balde/", internLogo: logoStellantis, internCompany: "Stellantis", internLogoZoom: true },
  { name: "Sabrina Abubaker", image: sabrinaImg, linkedinUrl: "https://www.linkedin.com/in/sabrina-abubaker/" },
  { name: "Nadir Muktar", image: nadirImg, linkedinUrl: "https://www.linkedin.com/in/nadirmuktar/" },
];

// ── 2026 – 2027 ─────────────────────────────────────────────────────────────

const leadership2026: Officer[] = [
  { name: "Michael Katongole", title: "President", image: michaelImg, linkedinUrl: "https://www.linkedin.com/in/michael-k-65b1a8222/", internLogo: logoCiti, internCompany: "Citi" },
  { name: "Jose Rogel", title: "Vice President", image: joseImg, linkedinUrl: "https://www.linkedin.com/in/jose-rogel/", internLogo: logoCloudflare, internCompany: "Cloudflare", internLogoClass: "w-full h-full object-cover scale-150" },
  { name: "Maareb Fadlalah", title: "Vice President", image: maarebImg, linkedinUrl: "https://www.linkedin.com/in/maareb-fadlalah23/", internLogo: logoAccenture, internCompany: "Accenture", internLogoZoom: true },
  { name: "Hajar Abdulkadir", title: "Founder", image: hajarImg, linkedinUrl: "https://www.linkedin.com/in/hajarabdulkadir/", internLogo: logoJPMC, internCompany: "JPMC", internLogoZoom: true },
  { name: "Oluwadamilare Sunmola", title: "Founder", image: oluwadamilareImg, linkedinUrl: "https://www.linkedin.com/in/oluwadamilare-sunmola/", internLogo: logoCapitalOne, internCompany: "Capital One", internLogoZoom: true },
];

const operations2026: Officer[] = [
  { name: "Hasset Getachew", title: "Treasurer", image: hassetImg, linkedinUrl: "https://www.linkedin.com/in/hassetgetachew/" },
  { name: "Henos Tekie", title: "Secretary", image: henosImg, linkedinUrl: "https://www.linkedin.com/in/henos-tekie-ab0104384/" },
  { name: "Timage Abubaker", title: "Public Communications", image: timageImg, linkedinUrl: "https://www.linkedin.com/in/timage-abubakar/" },
  { name: "Anthonio Odonkor", title: "Corporate & Outreach Director", image: anthonioImg, linkedinUrl: "https://www.linkedin.com/in/anthonio-odonkor-795315359/" },
  { name: "Mayowa Akinyede", title: "Tech Coordinator", image: mayowaImg, linkedinUrl: "https://www.linkedin.com/in/mayowa-akinyede-cs/", internLogo: logoEA, internCompany: "EA Sports", internLogoZoom: true },
  { name: "Alejandro Gomez De Mendieta", title: "Tech Coordinator", image: alejandroImg, linkedinUrl: "https://www.linkedin.com/in/alejandro-gomez-de-mendieta/", internLogo: logoPurdue, internCompany: "Purdue", internLogoZoom: true },
  { name: "Noha Markose", title: "Historian", image: nohaImg, linkedinUrl: "https://www.linkedin.com/in/nohamarkose/" },
  { name: "Mamoudou Balde", title: "Academic Chair", image: mamoudouImg, linkedinUrl: "https://www.linkedin.com/in/m-balde/", internLogo: logoStellantis, internCompany: "Stellantis", internLogoZoom: true },
  { name: "Ramzi Burhan", title: "Treasurer Deputy", image: ramziImg, linkedinUrl: "https://www.linkedin.com/in/ramziburhan/", internLogo: logoMicrosoft, internCompany: "Microsoft", internLogoZoom: true },
];

const ambassadors2026: Ambassador[] = [
  { name: "Ugonna Anyalemechi", image: ugonnaImg, linkedinUrl: "https://www.linkedin.com/in/ugonna-anyalemechi/", internLogo: logoJPMC, internCompany: "JPMC", internLogoZoom: true },
  { name: "Elizabeth Gonzalez", image: elizabethImg, linkedinUrl: "https://www.linkedin.com/in/anais-elizabeth-gonzalez/", internLogo: logoJPMC, internCompany: "JPMC", internLogoZoom: true },
  { name: "Musa Mudesir", image: musaImg, linkedinUrl: "https://www.linkedin.com/in/musamudesir/", internLogo: logoJnJ, internCompany: "Johnson & Johnson", internLogoZoom: true },
  { name: "Rodolfo Gonzalez", image: rodolfoImg, linkedinUrl: "https://www.linkedin.com/in/rjgx/", internLogo: logoJPMC, internCompany: "JPMC", internLogoZoom: true },
  { name: "Sabrina Abubaker", image: sabrinaImg, linkedinUrl: "https://www.linkedin.com/in/sabrina-abubaker/" },
];

// ── Shared ───────────────────────────────────────────────────────────────────

const advisor: Officer = {
  name: "Dr. Ravi Prakash",
  title: "Faculty Advisor",
  image: raviImg,
  linkedinUrl: "https://www.linkedin.com/in/ravi-prakash-8521b8/",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.08, ease: "easeOut" as const },
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
      className="flex flex-col group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Photo */}
      <div className="w-full aspect-square overflow-hidden bg-[#fdf4ee] relative">
        <img
          src={officer.image}
          alt={officer.name}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
      </div>

      {/* Info */}
      <div className="p-4 flex flex-col flex-1">
        {/* Name */}
        <h3 className="text-base font-bold text-foreground leading-snug mb-1">
          {officer.name}
        </h3>

        {/* Role */}
        <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[0.62rem] text-[#EC7524] mb-1 leading-tight">
          role = "{officer.title}"
        </p>

        {/* Class year */}
        {officer.classYear && (
          <p className="text-[0.72rem] text-muted-foreground mb-2">{officer.classYear}</p>
        )}

        {/* Bio */}
        {officer.bio && (
          <p className="text-[0.78rem] text-foreground/70 leading-relaxed mb-3 flex-1">{officer.bio}</p>
        )}

        {/* LinkedIn + intern logo row */}
        <div className="mt-auto flex items-center gap-2">
          {officer.linkedinUrl && (
            <a
              href={officer.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#114634] hover:bg-[#0d3528] text-white transition-colors duration-200 shadow-sm"
              aria-label={`${officer.name} on LinkedIn`}
            >
              <Linkedin size={17} strokeWidth={2} />
            </a>
          )}
          {officer.internLogo && (
            <div className="w-9 h-9 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center overflow-hidden" title={officer.internCompany}>
              <img src={officer.internLogo} alt={officer.internCompany} className={officer.internLogoClass ?? `object-contain ${officer.internLogoZoom ? "w-8 h-8" : "w-6 h-6"}`} />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <div className="mb-10">
      <p style={{ fontFamily: "'Fira Code', monospace" }} className="text-[#EC7524]/70 text-xs mb-2 tracking-wide">
        // {label.toLowerCase()}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground" style={{ fontFamily: "'Fira Code', monospace" }}>
        <span className="text-foreground/25">&lt;</span>
        <span> {title} </span>
        <span className="text-foreground/25">/&gt;</span>
      </h2>
      <div className="mt-4 h-1 w-16 bg-primary rounded-full" />
    </div>
  );
}

const YEARS = ["2025 - 2026", "2026 - 2027"] as const;
type Year = typeof YEARS[number];

export default function Board() {
  const [activeYear, setActiveYear] = useState<Year>("2026 - 2027");

  const leadership = activeYear === "2025 - 2026" ? leadership2025 : leadership2026;
  const operations = activeYear === "2025 - 2026" ? operations2025 : operations2026;
  const ambassadors = activeYear === "2025 - 2026" ? ambassadors2025 : ambassadors2026;

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
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6" style={{ fontFamily: "'Fira Code', monospace" }}>
              <span className="text-white/30">&lt;</span>
              <span className="text-white"> Meet The Board </span>
              <span className="text-white/30">/&gt;</span>
            </h1>
            <p className="text-white/75 text-lg md:text-xl max-w-3xl leading-relaxed">
              Built By Students. Driven By Community. Here To Make Sure You Secure "The Bag"!!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Year selector */}
      <div className="flex justify-center py-10 px-6">
        <div className="inline-flex bg-[#f0f0f0] rounded-full p-1.5 gap-1">
          {YEARS.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 ${
                activeYear === year
                  ? "bg-primary text-white shadow-sm"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>

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
                className="flex flex-col group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-full aspect-square overflow-hidden relative">
                  <img
                    src={amb.image}
                    alt={amb.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
                </div>
                <div className="p-3 flex flex-col">
                  <p className="text-[0.6rem] font-bold tracking-widest text-primary uppercase mb-1">
                    Ambassador
                  </p>
                  <p className="font-semibold text-foreground text-sm leading-snug mb-2">
                    {amb.name}
                  </p>
                  <div className="flex items-center gap-2">
                    {amb.linkedinUrl && (
                      <a
                        href={amb.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#114634] hover:bg-[#0d3528] text-white transition-colors duration-200 shadow-sm"
                        aria-label={`${amb.name} on LinkedIn`}
                      >
                        <Linkedin size={15} strokeWidth={2} />
                      </a>
                    )}
                    {amb.internLogo && (
                      <div className="w-8 h-8 rounded-xl bg-white border border-border shadow-sm flex items-center justify-center overflow-hidden" title={amb.internCompany}>
                        <img src={amb.internLogo} alt={amb.internCompany} className={amb.internLogoClass ?? `object-contain ${amb.internLogoZoom ? "w-7 h-7" : "w-5 h-5"}`} />
                      </div>
                    )}
                  </div>
                </div>
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

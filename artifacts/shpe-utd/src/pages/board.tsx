import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import board1 from "@/assets/images/board-1.png";
import board2 from "@/assets/images/board-2.png";
import board3 from "@/assets/images/board-3.png";
import board4 from "@/assets/images/board-4.png";
import board5 from "@/assets/images/board-5.png";
import board6 from "@/assets/images/board-6.png";

type Year = "2023-2024" | "2024-2025" | "2025-2026";

interface Officer {
  name: string;
  title: string;
  image: string;
  color: "orange" | "green";
}

const officersData: Record<Year, Officer[]> = {
  "2025-2026": [
    { name: "Miguel Hernandez", title: "PRESIDENT", image: board1, color: "orange" },
    { name: "Sofia Ramirez", title: "VICE PRESIDENT", image: board2, color: "green" },
    { name: "Isabella Flores", title: "SECRETARY", image: board3, color: "orange" },
    { name: "Diego Castro", title: "TREASURER", image: board4, color: "green" },
    { name: "Alejandro Morales", title: "EVENTS CHAIR", image: board5, color: "orange" },
    { name: "Valentina Cruz", title: "PROFESSIONAL DEV CHAIR", image: board6, color: "green" },
    { name: "Mateo Ortiz", title: "WEBMASTER", image: board1, color: "orange" },
    { name: "Camila Reyes", title: "COMMUNITY CHAIR", image: board2, color: "green" },
  ],
  "2024-2025": [
    { name: "Javier Vargas", title: "PRESIDENT", image: board5, color: "green" },
    { name: "Lucia Navarro", title: "VICE PRESIDENT", image: board3, color: "orange" },
    { name: "Daniel Ruiz", title: "SECRETARY", image: board4, color: "green" },
    { name: "Carmen Salazar", title: "TREASURER", image: board6, color: "orange" },
  ],
  "2023-2024": [
    { name: "Andres Mendoza", title: "PRESIDENT", image: board4, color: "orange" },
    { name: "Gabriela Torres", title: "VICE PRESIDENT", image: board2, color: "green" },
    { name: "Luis Dominguez", title: "SECRETARY", image: board1, color: "orange" },
    { name: "Maria Castillo", title: "TREASURER", image: board3, color: "green" },
  ]
};

export default function Board() {
  const [activeYear, setActiveYear] = useState<Year>("2025-2026");
  const years: Year[] = ["2023-2024", "2024-2025", "2025-2026"];

  return (
    <div className="min-h-screen bg-background w-full pb-24">
      {/* Header */}
      <section className="bg-secondary py-20 px-4 text-center flex flex-col items-center justify-center border-b-8 border-primary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-mono font-bold text-white tracking-tight">
            &lt; Meet The Board /&gt;
          </h1>
          <p className="text-white/80 mt-6 text-xl max-w-2xl mx-auto font-medium">
            The dedicated student leaders behind SHPE UTD.
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 mt-12">
        {/* Year Toggle */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setActiveYear(year)}
              className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${
                activeYear === year 
                  ? "bg-primary text-white shadow-lg shadow-primary/30" 
                  : "bg-white text-muted-foreground hover:bg-gray-100 hover:text-foreground shadow-sm"
              }`}
              data-testid={`tab-year-${year}`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Officer Grid */}
        <motion.div 
          key={activeYear}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {officersData[activeYear].map((officer, idx) => (
            <div key={`${activeYear}-${idx}`} className="flex flex-col group">
              {/* Photo Card */}
              <div 
                className={`w-full aspect-square rounded-3xl overflow-hidden mb-6 p-4 relative ${
                  officer.color === "orange" ? "bg-primary/10" : "bg-secondary/10"
                } transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl`}
              >
                <div className={`absolute inset-0 opacity-20 ${officer.color === "orange" ? "bg-primary" : "bg-secondary"}`}></div>
                <img 
                  src={officer.image} 
                  alt={officer.name} 
                  className="w-full h-full object-cover rounded-2xl relative z-10 shadow-md grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Info */}
              <div className="text-center flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-foreground mb-1">{officer.name}</h3>
                <p className="text-primary font-black uppercase tracking-wider text-sm mb-6 flex-1">
                  {officer.title}
                </p>
                
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white rounded-full font-bold shadow-md w-full py-6 group-hover:shadow-lg transition-all"
                  data-testid={`button-book-${idx}`}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book a Time
                </Button>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
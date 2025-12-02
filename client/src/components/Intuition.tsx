import { motion } from "framer-motion";

const teamPhotos = [
  { src: "/assets/images/team/Rectangle-1.jpg", shape: "circle", position: "top-left" },
  { src: "/assets/images/team/Rectangle-2.jpg", shape: "circle", position: "bottom-left" },
  { src: "/assets/images/team/Rectangle-3.jpg", shape: "circle", position: "center" },
  { src: "/assets/images/team/Rectangle-4.jpg", shape: "square", position: "right" },
  { src: "/assets/images/team/Rectangle-5.jpg", shape: "circle", position: "bottom-right" },
];

const colorShapes = [
  { color: "#FCDF65", type: "rounded-rect", size: "large" },
  { color: "#F282B5", type: "rounded-rect", size: "medium" },
  { color: "#BEFF8C", type: "circle", size: "small" },
  { color: "#78C8BF", type: "rounded-rect", size: "small" },
];

export function Intuition() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden" data-testid="section-intuition">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-4">
          <span className="text-sm font-medium text-[#616161] uppercase tracking-wider">
            HOW WE WORK
          </span>
        </div>
        
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="text-intuition-title"
          >
            Intuition makes us shine
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#616161] max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-testid="text-intuition-description"
          >
            Great thinking comes out of great partnerships, so we make sure that 
            energies are 100% aligned before we dive in. In our experience, that 
            always makes the best results.
          </motion.p>
        </div>

        <motion.div 
          className="relative h-[500px] md:h-[600px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 left-[5%] w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg">
            <img src="/assets/images/team/Rectangle-1.jpg" alt="Team member" className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute top-[15%] left-[15%] w-32 h-40 md:w-40 md:h-52 rounded-3xl bg-[#FCDF65]" />
          
          <div className="absolute top-[20%] left-[35%] w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg z-10">
            <img src="/assets/images/team/Rectangle-3.jpg" alt="Team member" className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute top-[5%] left-[50%] w-28 h-36 md:w-36 md:h-44 rounded-3xl bg-[#F282B5]" />
          
          <div className="absolute top-[35%] left-[45%] w-36 h-48 md:w-48 md:h-64 rounded-2xl overflow-hidden shadow-lg z-10">
            <img src="/assets/images/team/Rectangle-4.jpg" alt="Team member" className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute bottom-[25%] left-[10%] w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden shadow-lg">
            <img src="/assets/images/team/Rectangle-2.jpg" alt="Team member" className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute bottom-[10%] left-[25%] w-24 h-32 md:w-32 md:h-40 rounded-3xl bg-[#BEFF8C]" />
          
          <div className="absolute top-[30%] right-[15%] w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-[#FF9A8B] via-[#FF6A88] to-[#78C8BF]" />
          
          <div className="absolute bottom-[20%] right-[10%] w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg">
            <img src="/assets/images/team/Rectangle-5.jpg" alt="Team member" className="w-full h-full object-cover" />
          </div>
          
          <div className="absolute bottom-[5%] right-[25%] w-28 h-36 md:w-36 md:h-44 rounded-3xl bg-[#78C8BF]" />
        </motion.div>
      </div>
    </section>
  );
}

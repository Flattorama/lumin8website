import { Link } from "wouter";
import { motion } from "framer-motion";

export function PortfolioShowcase() {
  return (
    <section className="py-20 lg:py-32 bg-[#FAFAFA] overflow-hidden" data-testid="section-portfolio-showcase">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D1D1D] mb-6 leading-tight"
              data-testid="text-showcase-title"
            >
              A showcase of creativity and strategy
            </h2>
            <p className="text-lg text-[#616161] mb-8 max-w-md" data-testid="text-showcase-description">
              Dive into our vibrant treasure trove of creative masterpieces that have 
              turned heads and captivated hearts.
            </p>
            
            <Link href="/portfolio">
              <div className="inline-flex items-center gap-2 text-[#1D1D1D] font-medium hover:gap-3 transition-all cursor-pointer">
                <span className="w-5 h-5 rounded-full bg-[#1D1D1D] flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                </span>
                Learn more
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <motion.div 
              className="absolute left-[5%] top-[10%] w-32 h-40 rounded-3xl overflow-hidden shadow-xl"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/assets/images/portfolio/Acronym-001.webp" 
                alt="Portfolio work" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              className="absolute left-[30%] top-[5%] w-44 h-56 rounded-2xl overflow-hidden shadow-xl z-10"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/assets/images/portfolio/Spring-Academy-003.webp" 
                alt="Portfolio work" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="absolute right-[20%] top-[20%] w-8 h-8 rounded-full bg-[#FF9A47]" />
            
            <svg 
              className="absolute right-0 top-[5%] w-32 h-32"
              viewBox="0 0 100 100"
            >
              <path 
                d="M100 0 L100 100 A100 100 0 0 1 0 100 L0 0 Z" 
                fill="#F282B5"
              />
            </svg>

            <motion.div 
              className="absolute left-0 bottom-[15%] w-36 h-44 rounded-2xl overflow-hidden shadow-xl"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src="/assets/images/portfolio/Work-002.jpeg" 
                alt="Portfolio work" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="absolute left-[45%] bottom-[10%] w-40 h-28 rounded-2xl bg-[#4ADE80] shadow-lg" />
            
            <div className="absolute right-[15%] bottom-[5%] w-24 h-8 rounded-full bg-[#78C8BF]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

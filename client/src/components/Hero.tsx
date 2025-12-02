import { Link } from "wouter";
import { motion } from "framer-motion";
import { PrismaticBurst } from "./PrismaticBurst";

interface HeroProps {
  title?: string;
  subtitle?: string;
  variant?: "home" | "page";
}

const brandColors = ['#78C8BF', '#FCDF65', '#F282B5', '#8582D1'];

export function Hero({
  title,
  subtitle,
  variant = "home",
}: HeroProps) {
  const isHome = variant === "home";

  if (!isHome) {
    return (
      <section className="relative pt-32 pb-20 bg-[#1D1D1D] overflow-hidden" data-testid="section-hero">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              data-testid="text-hero-title"
            >
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-white/70 max-w-2xl" data-testid="text-hero-subtitle">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-[#1D1D1D] overflow-hidden" data-testid="section-hero">
      <div className="absolute inset-0 z-0">
        <PrismaticBurst
          animationType="rotate3d"
          intensity={1.2}
          speed={0.3}
          distort={0.8}
          colors={brandColors}
          mixBlendMode="lighten"
          rayCount={0}
        />
      </div>
      
      <svg 
        className="absolute top-1/4 left-0 right-0 w-full h-auto pointer-events-none z-[1]"
        viewBox="0 0 1440 200" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ opacity: 0.15 }}
      >
        <path 
          d="M0 180 Q360 20, 720 100 T1440 60" 
          stroke="url(#arcGradient)" 
          strokeWidth="1.5" 
          fill="none"
        />
        <defs>
          <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#78C8BF" stopOpacity="0" />
            <stop offset="30%" stopColor="#78C8BF" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#78C8BF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#78C8BF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 lg:pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-[1.1]"
              data-testid="text-hero-title"
            >
              There's light at the<br />end of the funnel
            </h1>
            
            <Link href="/contact">
              <motion.div 
                className="inline-flex items-center justify-center w-28 h-28 md:w-32 md:h-32 rounded-full bg-[#FCDF65] hover:bg-[#f5d44a] transition-colors cursor-pointer shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-hero-cta"
              >
                <span className="text-[#1D1D1D] font-bold text-xs md:text-sm text-center leading-tight uppercase">
                  Book a<br />Discovery<br />Call
                </span>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-24"
          >
            <p 
              className="text-lg text-white/70 leading-relaxed max-w-md"
              data-testid="text-hero-subtitle"
            >
              Lumin8 is a people-first digital marketing agency that solves 
              tough problems using the power of creativity. We'd tell you 
              more, but you're not here for us – we're here for you!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

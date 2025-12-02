import { Link } from "wouter";
import { motion } from "framer-motion";

const teamImages = [
  { src: "/assets/images/team/Rectangle_23-1.jpeg", alt: "Team member 1" },
  { src: "/assets/images/team/Rectangle_24-1.jpeg", alt: "Team member 2" },
  { src: "/assets/images/team/Rectangle_25-1.jpeg", alt: "Team member 3" },
  { src: "/assets/images/team/Rectangle_26-1.jpeg", alt: "Team member 4" },
];

export function Collective() {
  return (
    <section className="py-20 lg:py-32 bg-white" data-testid="section-collective">
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
              data-testid="text-collective-title"
            >
              We are a collective<br />of top-tier creatives<br />and marketers
            </h2>
            <p className="text-lg text-[#616161] mb-8 max-w-md" data-testid="text-collective-description">
              Our team of industry-leading talent is handpicked to bring out the best in your brand.
            </p>
            
            <Link href="/about">
              <motion.div 
                className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-[#FCDF65] hover:bg-[#f5d44a] transition-colors cursor-pointer shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-testid="button-collective-cta"
              >
                <span className="text-[#1D1D1D] font-bold text-sm text-center leading-tight">
                  Learn<br />more
                </span>
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {teamImages.map((image, index) => (
              <motion.div 
                key={index}
                className="relative aspect-[3/4] overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  data-testid={`img-team-${index}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

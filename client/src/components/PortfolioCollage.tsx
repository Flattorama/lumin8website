import { motion } from "framer-motion";

const collageImages = [
  { src: "/assets/images/portfolio/Slider-002.jpeg", rotation: -5, top: "5%", left: "0%", width: "220px", zIndex: 1 },
  { src: "/assets/images/portfolio/Work-002.jpeg", rotation: 3, top: "20%", left: "15%", width: "200px", zIndex: 2 },
  { src: "/assets/images/portfolio/Slider-003.jpeg", rotation: -2, top: "0%", left: "35%", width: "240px", zIndex: 3 },
  { src: "/assets/images/portfolio/Spring-Academy-003.webp", rotation: 4, top: "30%", left: "40%", width: "220px", zIndex: 4 },
  { src: "/assets/images/portfolio/Slider-004.jpeg", rotation: -3, top: "10%", left: "60%", width: "200px", zIndex: 2 },
  { src: "/assets/images/portfolio/Acronym-001.webp", rotation: 5, top: "35%", left: "65%", width: "180px", zIndex: 5 },
  { src: "/assets/images/portfolio/Work-003.jpeg", rotation: -4, top: "5%", left: "80%", width: "220px", zIndex: 1 },
  { src: "/assets/images/portfolio/Work-004.jpeg", rotation: 2, top: "55%", left: "10%", width: "180px", zIndex: 3 },
];

export function PortfolioCollage() {
  return (
    <section className="py-8 lg:py-16 bg-[#FAFAFA] overflow-hidden" data-testid="section-portfolio-collage">
      <div className="max-w-[100vw] overflow-hidden">
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px]">
          <motion.div 
            className="flex gap-4 absolute inset-0"
            initial={{ x: 0 }}
            animate={{ x: [0, -200, 0] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          >
            {collageImages.map((img, index) => (
              <motion.div
                key={index}
                className="absolute rounded-2xl overflow-hidden shadow-xl"
                style={{
                  top: img.top,
                  left: img.left,
                  width: img.width,
                  zIndex: img.zIndex,
                  transform: `rotate(${img.rotation}deg)`,
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  zIndex: 10,
                  transition: { duration: 0.2 }
                }}
              >
                <img 
                  src={img.src} 
                  alt={`Portfolio work ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

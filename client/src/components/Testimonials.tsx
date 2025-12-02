import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Dorit is one of the most gifted content creators that we have ever had the pleasure of working with and her ability to consistently produce high quality, original and engaging content sets her apart from everyone else.",
    name: "Yazeed Yasin",
    title: "Co-founder & CEO, Nanashake",
    image: "/assets/images/testimonials/Ellipse_75-1.jpeg",
    logo: "/assets/images/Nanashake-logo-1.png",
  },
  {
    id: 2,
    quote: "Working with Dorit has been amazing and sincerely a blessing. Her knowledge, creativity and professionalism is second to none. How you guide your clients is beyond amazing and so appreciative.",
    name: "Vince Soda",
    title: "Health & Life Coach",
    image: "/assets/images/testimonials/2021123_Vince_002.jpg",
    logo: null,
  },
  {
    id: 3,
    quote: "Lumin8 was instrumental in pivoting my business in the right direction. They dig deep into your business and passions and produce amazing marketing results!",
    name: "Alina Tacmelova",
    title: "Designer & Creativity Coach",
    image: "/assets/images/testimonials/Alina_047.jpg",
    logo: null,
  },
];

const decorativeImages = [
  { src: "/assets/images/testimonials/Ellipse_77-1.jpeg", position: "left-top" },
  { src: "/assets/images/testimonials/Ellipse_75-1.jpeg", position: "right-top" },
  { src: "/assets/images/testimonials/Placeholder-1.jpeg", position: "right-bottom" },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const testimonial = testimonials[current];

  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden" data-testid="section-testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-6">
          <span className="text-sm font-medium text-[#616161] uppercase tracking-wider">
            TESTIMONIALS
          </span>
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1D]" data-testid="text-testimonials-title">
            What our clients are saying
          </h2>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-32">
            <motion.div 
              className="absolute -left-8 top-0 w-24 h-24 rounded-full overflow-hidden shadow-lg ring-4 ring-[#78C8BF]"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src={decorativeImages[0].src} 
                alt="Client" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="hidden lg:block absolute right-0 top-1/4 w-32">
            <motion.div 
              className="absolute -right-4 w-20 h-20 rounded-full overflow-hidden shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src={decorativeImages[1].src} 
                alt="Client" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="hidden lg:block absolute right-16 bottom-0 w-32">
            <motion.div 
              className="absolute right-0 w-16 h-16 rounded-full overflow-hidden shadow-lg"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img 
                src={decorativeImages[2].src} 
                alt="Client" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          <div className="flex items-center justify-center gap-8 lg:gap-16">
            <Button
              variant="ghost"
              size="icon"
              onClick={prev}
              className="rounded-full text-[#1D1D1D]/60 hover:text-[#1D1D1D] hover:bg-transparent shrink-0"
              data-testid="button-testimonial-prev"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <div className="max-w-2xl text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 rounded-full overflow-hidden shadow-xl ring-4 ring-white">
                      <img 
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {testimonial.logo && (
                      <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center -ml-4 mt-12 shadow-lg">
                        <span className="text-white text-xl font-bold">b</span>
                      </div>
                    )}
                  </div>

                  <blockquote
                    className="text-lg md:text-xl lg:text-2xl text-[#1D1D1D] italic leading-relaxed mb-8"
                    data-testid={`text-testimonial-quote-${testimonial.id}`}
                  >
                    "{testimonial.quote}"
                  </blockquote>

                  <div>
                    <p className="font-semibold text-[#1D1D1D] text-lg" data-testid={`text-testimonial-name-${testimonial.id}`}>
                      {testimonial.name}
                    </p>
                    <p className="text-[#616161]" data-testid={`text-testimonial-role-${testimonial.id}`}>
                      {testimonial.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={next}
              className="rounded-full text-[#1D1D1D]/60 hover:text-[#1D1D1D] hover:bg-transparent shrink-0"
              data-testid="button-testimonial-next"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current ? "w-8 bg-[#78C8BF]" : "w-2 bg-[#1D1D1D]/20"
                }`}
                data-testid={`button-testimonial-dot-${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

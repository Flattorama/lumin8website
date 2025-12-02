import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Code2, 
  Mail, 
  Search, 
  Palette, 
  Share2,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Digital\nStrategy",
    description: "Win new customers with a comprehensive full-funnel strategy.",
    link: "/services#digital-strategy",
    bgColor: "#FCDF65",
    textColor: "#1D1D1D",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Beat out the competition by getting noticed on Google and Amazon.",
    link: "/services#seo",
    bgColor: "#F282B5",
    textColor: "#1D1D1D",
  },
  {
    icon: Palette,
    title: "Branding &\nDesign",
    description: "Create a distinct personality and visual identity that defines your brand.",
    link: "/services#branding-design",
    bgColor: "#BEFF8C",
    textColor: "#1D1D1D",
  },
  {
    icon: Code2,
    title: "Web\nDevelopment",
    description: "Build a digital homebase for new and existing customers.",
    link: "/services#website-development",
    bgColor: "#4ADE80",
    textColor: "#1D1D1D",
  },
  {
    icon: Mail,
    title: "Email\nMarketing",
    description: "Stay close to your customers with breakthrough email campaigns.",
    link: "/services#email-marketing",
    bgColor: "#8582D1",
    textColor: "#1D1D1D",
  },
  {
    icon: Share2,
    title: "Social\nStrategy",
    description: "Start making the most out of your social media presence.",
    link: "/services#social-strategy",
    bgColor: "#78C8BF",
    textColor: "#1D1D1D",
  },
];

export function Services() {
  return (
    <section className="py-20 lg:py-32 bg-white" data-testid="section-services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={service.link}>
                <div 
                  className="group relative p-8 rounded-2xl min-h-[280px] flex flex-col cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
                  style={{ backgroundColor: service.bgColor }}
                  data-testid={`card-service-${index}`}
                >
                  <div className="mb-4">
                    <service.icon 
                      className="h-8 w-8" 
                      style={{ color: service.textColor }}
                      strokeWidth={1.5}
                    />
                  </div>
                  
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-4 leading-tight whitespace-pre-line"
                    style={{ color: service.textColor }}
                    data-testid={`text-service-title-${index}`}
                  >
                    {service.title}
                  </h3>
                  
                  <p 
                    className="text-sm leading-relaxed mb-6 flex-grow"
                    style={{ color: `${service.textColor}CC` }}
                    data-testid={`text-service-desc-${index}`}
                  >
                    {service.description}
                  </p>
                  
                  <div 
                    className="flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all"
                    style={{ color: service.textColor }}
                    data-testid={`link-service-${index}`}
                  >
                    <span 
                      className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${service.textColor}20` }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current" />
                    </span>
                    Learn more
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

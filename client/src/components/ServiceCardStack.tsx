import { useRef, useCallback, useMemo } from 'react';
import { Link } from "wouter";
import { 
  Code2, 
  Mail, 
  Search, 
  Palette, 
  Share2,
  TrendingUp,
  LucideIcon
} from "lucide-react";

interface ServiceData {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  bgColor: string;
  textColor: string;
}

const services: ServiceData[] = [
  {
    id: 1,
    icon: TrendingUp,
    title: "Digital\nStrategy",
    description: "Win new customers with a comprehensive full-funnel strategy.",
    link: "/services#digital-strategy",
    bgColor: "#FCDF65",
    textColor: "#1D1D1D",
  },
  {
    id: 2,
    icon: Search,
    title: "SEO",
    description: "Beat out the competition by getting noticed on Google and Amazon.",
    link: "/services#seo",
    bgColor: "#F282B5",
    textColor: "#1D1D1D",
  },
  {
    id: 3,
    icon: Palette,
    title: "Branding &\nDesign",
    description: "Create a distinct personality and visual identity that defines your brand.",
    link: "/services#branding-design",
    bgColor: "#BEFF8C",
    textColor: "#1D1D1D",
  },
  {
    id: 4,
    icon: Code2,
    title: "Web\nDevelopment",
    description: "Build a digital homebase for new and existing customers.",
    link: "/services#website-development",
    bgColor: "#4ADE80",
    textColor: "#1D1D1D",
  },
  {
    id: 5,
    icon: Mail,
    title: "Email\nMarketing",
    description: "Stay close to your customers with breakthrough email campaigns.",
    link: "/services#email-marketing",
    bgColor: "#8582D1",
    textColor: "#1D1D1D",
  },
  {
    id: 6,
    icon: Share2,
    title: "Social\nStrategy",
    description: "Start making the most out of your social media presence.",
    link: "/services#social-strategy",
    bgColor: "#78C8BF",
    textColor: "#1D1D1D",
  },
];

interface ServiceCardProps {
  data: ServiceData;
  index: number;
  total: number;
}

function ServiceCard({ data, index, total }: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = data.icon;

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  }, []);

  const titleLines = data.title.split('\n');

  return (
    <article
      className="absolute top-1/2 left-1/2 w-[300px] h-[380px] md:w-[380px] md:h-[460px] lg:w-[420px] lg:h-[500px] origin-center will-change-transform"
      style={{
        translate: '-50% -50%',
        zIndex: total - index,
        animationName: 'fly-away',
        animationFillMode: 'both',
        animationTimingFunction: 'linear',
        animationTimeline: `--card-${index}`,
        animationRange: 'exit-crossing 0% exit-crossing 100%',
      } as React.CSSProperties}
      data-testid={`card-service-stack-${index}`}
    >
      <div
        ref={cardRef}
        className="block w-full h-full rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl border border-black/5 transition-transform duration-100 ease-out"
        style={{
          backgroundColor: data.bgColor,
          color: data.textColor,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="mb-4 pointer-events-none"
          style={{ transform: 'translateZ(15px)' }}
        >
          <IconComponent 
            className="h-10 w-10 md:h-12 md:w-12" 
            style={{ color: data.textColor }}
            strokeWidth={1.5}
          />
        </div>
        
        <h2 
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[0.95] uppercase mt-2 pointer-events-none whitespace-pre-line"
          style={{ 
            transform: 'translateZ(25px)',
            color: data.textColor 
          }}
        >
          {titleLines.map((line, i) => (
            <span key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </span>
          ))}
        </h2>
        
        <p 
          className="text-sm md:text-base leading-relaxed mt-4 md:mt-6 flex-grow pointer-events-none max-w-[280px]"
          style={{ 
            transform: 'translateZ(20px)',
            color: `${data.textColor}CC` 
          }}
        >
          {data.description}
        </p>
        
        <Link href={data.link}>
          <div 
            className="flex items-center gap-2 text-sm font-medium mt-4 cursor-pointer group"
            style={{ 
              transform: 'translateZ(20px)',
              color: data.textColor 
            }}
            data-testid={`link-service-stack-${index}`}
          >
            <span 
              className="w-5 h-5 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
              style={{ backgroundColor: `${data.textColor}20` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current" />
            </span>
            <span className="group-hover:translate-x-1 transition-transform">Learn more</span>
          </div>
        </Link>
      </div>
    </article>
  );
}

export function ServiceCardStack() {
  const timelineNames = useMemo(() => {
    return services.map((_, i) => `--card-${i}`).join(', ');
  }, []);

  return (
    <>
      <style>
        {`
          @keyframes fly-away {
            to {
              translate: -150% -150%; 
              rotate: -25deg;
              opacity: 0;
            }
          }
          .service-timeline-scope {
            timeline-scope: ${timelineNames};
          }
          .service-perspective-container {
            perspective: 1000px;
            transform-style: preserve-3d;
          }
        `}
      </style>
      <section 
        className="service-timeline-scope relative bg-[#FAFAFA]" 
        data-testid="section-services"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center service-perspective-container">
          <div className="absolute top-8 left-0 right-0 text-center z-10">
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">Our Services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D]">What We Do Best</h2>
          </div>
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              data={service} 
              index={index} 
              total={services.length}
            />
          ))}
        </div>
        
        <div className="scroll-track">
          {services.map((_, index) => (
            <div
              key={`tick-${index}`}
              className="scroll-tick w-full pointer-events-none"
              style={{
                height: '120vh',
                marginTop: index === 0 ? '0' : '10vh',
                viewTimelineName: `--card-${index}`,
              } as React.CSSProperties}
            />
          ))}
        </div>
      </section>
    </>
  );
}

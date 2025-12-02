import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  Mail, 
  Search, 
  Palette, 
  Users,
  TrendingUp,
} from "lucide-react";

const services = [
  {
    id: "email-marketing",
    icon: Mail,
    iconColor: "#8582D1",
    title: "Email Marketing",
    description: "Stay close to your customers with breakthrough email campaigns that drive engagement and conversions.",
    features: ["Campaign Strategy", "Template Design", "Automation Workflows", "Performance Analytics"],
  },
  {
    id: "seo",
    icon: Search,
    iconColor: "#FCDF65",
    title: "Search Engine Optimization",
    description: "Get found online with strategies that drive organic traffic and visibility for your brand.",
    features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Link Building"],
  },
  {
    id: "website-development",
    icon: Code2,
    iconColor: "#4ADE80",
    title: "Website Development",
    description: "Build a digital homebase for new and existing customers with custom web solutions.",
    features: ["Custom Development", "E-commerce", "CMS Integration", "Performance Optimization"],
  },
  {
    id: "branding-design",
    icon: Palette,
    iconColor: "#F282B5",
    title: "Branding & Design",
    description: "Build your brand identity with a new look & feel that will help you stand out from the crowd.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Collateral"],
  },
  {
    id: "social-strategy",
    icon: Users,
    iconColor: "#78C8BF",
    title: "Social Strategy",
    description: "Build authentic connections with your audience through strategic social media content.",
    features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Paid Social"],
  },
  {
    id: "digital-strategy",
    icon: TrendingUp,
    iconColor: "#F282B5",
    title: "Digital Strategy",
    description: "Data-driven strategies that connect all your marketing efforts for maximum impact.",
    features: ["Marketing Strategy", "Analytics & Insights", "Campaign Planning", "Performance Optimization"],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero
          variant="page"
          title="A little light on what we do"
        />

        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 gap-16">
              {services.map((service, index) => (
                <div 
                  key={service.id} 
                  id={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                      style={{ backgroundColor: `${service.iconColor}15` }}
                    >
                      <service.icon 
                        className="h-8 w-8" 
                        style={{ color: service.iconColor }}
                      />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-[#616161] mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: service.iconColor }}
                          />
                          <span className="text-[#1D1D1D] text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Card className={`bg-[#FBFBFB] border-gray-100 overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <CardContent className="p-12 flex items-center justify-center min-h-[300px]">
                      <service.icon 
                        className="h-32 w-32 opacity-20" 
                        style={{ color: service.iconColor }}
                      />
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Let's Spark Something!"
          subtitle="Ready to illuminate your brand? Get in touch and let's create something amazing together."
        />
      </main>
      <Footer />
    </div>
  );
}

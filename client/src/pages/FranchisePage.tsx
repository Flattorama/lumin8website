import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, TrendingUp, Users, Building, Rocket } from "lucide-react";
import collage1 from "@/assets/images/Franchise-Landing-Page-Collages.png";
import collage2 from "@/assets/images/Franchise-Landing-Page-Collages-2.png";
import collage3 from "@/assets/images/Franchise-Landing-Page-Collages-3.png";
import aquatotsLogo from "@/assets/images/Aquatots-Logo.png";
import sportballLogo from "@/assets/images/Sportball-Logo-1.png";
import yogenFruzLogo from "@/assets/images/Yogen-Fruz-Logo.png";

const benefits = [
  { icon: Target, title: "Brand Strategy", desc: "Create a unified brand identity that strengthens recognition and loyalty across all franchises." },
  { icon: Users, title: "Lead Generation", desc: "Drive qualified leads to your franchisees with targeted campaigns." },
  { icon: Building, title: "Local Marketing", desc: "Empower franchisees with localized marketing support." },
  { icon: Rocket, title: "Technology Solutions", desc: "Streamline operations with cutting-edge marketing technology." },
];

const process = [
  { step: "01", title: "Discovery", desc: "We analyze your franchise network and identify growth opportunities" },
  { step: "02", title: "Strategy", desc: "Develop a customized marketing plan for your network" },
  { step: "03", title: "Execution", desc: "Implement campaigns that drive results at every level" },
  { step: "04", title: "Optimization", desc: "Continuously improve based on performance data" },
];

const clientLogos = [
  { src: aquatotsLogo, alt: "Aquatots" },
  { src: sportballLogo, alt: "Sportball" },
  { src: yogenFruzLogo, alt: "Yogen Fruz" },
];

export default function FranchisePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero
          variant="page"
          title="Accelerate Your Franchise Growth"
          subtitle="Specializing in children's activity franchises, we empower both franchisors and franchisees with innovative marketing strategies that drive results across your entire network."
        />

        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h6 className="text-sm font-medium text-[#616161] uppercase tracking-wider mb-4">
                  FRANCHISE MARKETING
                </h6>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-6">
                  Deep Franchise Marketing Expertise
                </h2>
                <p className="text-[#616161] mb-6 leading-relaxed">
                  At Lumin8, we don't just understand franchise marketing—we've lived it. With firsthand experience as both franchisors and franchisees, we possess unique insights into the challenges and opportunities within the franchise industry. Our team combines industry knowledge with cutting-edge marketing techniques to help your franchise thrive.
                </p>
                <ul className="space-y-3">
                  {["Proven expansion strategies", "Dedicated franchise consultants", "Multi-location marketing expertise", "Data-driven performance optimization"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#1D1D1D]">
                      <CheckCircle className="h-5 w-5 text-[#78C8BF] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src={collage1} alt="Franchise marketing" className="rounded-2xl w-full h-auto" />
                <img src={collage2} alt="Franchise success" className="rounded-2xl w-full h-auto mt-8" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-[#FBFBFB]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-4">
                Transforming Marketing Challenges into Franchise Growth Opportunities
              </h2>
              <p className="text-[#616161] max-w-2xl mx-auto">
                Comprehensive franchise marketing services tailored to your network's unique needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, i) => (
                <Card key={i} className="text-center border-gray-100 bg-white">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-[#78C8BF]/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-6 w-6 text-[#78C8BF]" />
                    </div>
                    <h3 className="font-semibold text-[#1D1D1D] mb-2">{benefit.title}</h3>
                    <p className="text-[#616161] text-sm">{benefit.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-4">Our Process</h2>
              <p className="text-[#616161] max-w-2xl mx-auto">
                A proven methodology that delivers results at every stage of your franchise journey.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, i) => (
                <div key={i} className="relative">
                  <div className="text-6xl font-bold text-[#78C8BF]/20 mb-4">{step.step}</div>
                  <h3 className="font-semibold text-[#1D1D1D] mb-2">{step.title}</h3>
                  <p className="text-[#616161] text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1D1D1D]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">Trusted by Leading Franchises</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {clientLogos.map((logo, i) => (
                <img 
                  key={i} 
                  src={logo.src} 
                  alt={logo.alt} 
                  className="h-16 w-auto opacity-80 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Ready to Grow Your Franchise Network?"
          subtitle="Schedule a free consultation to discuss your franchise marketing goals."
          ctaText="Get Started Today"
        />
      </main>
      <Footer />
    </div>
  );
}

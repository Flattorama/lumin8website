import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Megaphone, BarChart, Globe, Mail, Video, Search } from "lucide-react";
import collage1 from "@/assets/images/Franchise-Landing-Page-Collages.png";

const marketingServices = [
  { icon: Search, title: "Local SEO", desc: "Dominate local search results for each franchise location" },
  { icon: Megaphone, title: "Paid Advertising", desc: "Targeted PPC campaigns that drive qualified leads" },
  { icon: Globe, title: "Social Media", desc: "Build community engagement across all locations" },
  { icon: Mail, title: "Email Marketing", desc: "Automated campaigns for customer retention" },
  { icon: Video, title: "Content Creation", desc: "Branded content that tells your story" },
  { icon: BarChart, title: "Analytics", desc: "Data-driven insights to optimize performance" },
];

export default function FranchiseMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero
          variant="page"
          title="Fast-Track Your Franchise Growth"
          subtitle="Our deep franchise expertise and cutting-edge technology help franchised businesses drive local success and maximize the impact of marketing across your franchise network."
        />

        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h6 className="text-sm font-medium text-[#616161] uppercase tracking-wider mb-4">
                  FRANCHISE MARKETING EXPERTISE
                </h6>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-6">
                  We get it
                </h2>
                <p className="text-[#616161] mb-4 leading-relaxed">
                  At Lumin8, we don't just understand franchise marketing—we've lived it as franchise owners and as the trusted marketing partners for franchisees and franchisors.
                </p>
                <p className="text-[#616161] leading-relaxed">
                  We know that franchised businesses face the unique challenge of harnessing the full potential of their network. Our marketing strategies drive growth at the local level, and help unlock network effects that drive growth across your franchise networks.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={collage1} alt="Franchise marketing" className="w-full h-auto" />
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
                We understand the unique challenges of franchise marketing. Our solutions balance brand consistency with local market needs.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketingServices.map((service, i) => (
                <Card key={i} className="border-gray-100 bg-white hover-elevate transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-[#78C8BF]/10 flex items-center justify-center mb-4">
                      <service.icon className="h-6 w-6 text-[#78C8BF]" />
                    </div>
                    <h3 className="font-semibold text-[#1D1D1D] mb-2">{service.title}</h3>
                    <p className="text-[#616161] text-sm">{service.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-4">
                How We Work
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#78C8BF]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#78C8BF]">1</span>
                </div>
                <h3 className="font-semibold text-[#1D1D1D] mb-2">Audit & Strategy</h3>
                <p className="text-[#616161] text-sm">
                  We analyze your current marketing and develop a customized plan.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#78C8BF]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#78C8BF]">2</span>
                </div>
                <h3 className="font-semibold text-[#1D1D1D] mb-2">Implementation</h3>
                <p className="text-[#616161] text-sm">
                  Execute campaigns across all channels with brand consistency.
                </p>
              </div>
              <div className="text-center p-6">
                <div className="w-16 h-16 rounded-full bg-[#78C8BF]/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-[#78C8BF]">3</span>
                </div>
                <h3 className="font-semibold text-[#1D1D1D] mb-2">Optimize & Scale</h3>
                <p className="text-[#616161] text-sm">
                  Continuously improve performance and expand to new markets.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CTA
          title="Ready to Grow Your Franchise?"
          subtitle="Get a customized marketing plan tailored to your franchise network."
          ctaText="Request a Strategy Session"
        />
      </main>
      <Footer />
    </div>
  );
}

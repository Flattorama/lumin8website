import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ServiceCardStack } from "@/components/ServiceCardStack";
import { Collective } from "@/components/Collective";
import { Intuition } from "@/components/Intuition";
import { PortfolioShowcase } from "@/components/PortfolioShowcase";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ServiceCardStack />
        <Collective />
        <Intuition />
        <PortfolioShowcase />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

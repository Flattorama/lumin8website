import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero
          variant="page"
          title="Our Work"
          subtitle="Explore our portfolio of successful projects and see how we help brands achieve their goals."
        />
        <Portfolio showViewAll={false} />
        <CTA
          title="Like What You See?"
          subtitle="Let's create something amazing together."
        />
      </main>
      <Footer />
    </div>
  );
}

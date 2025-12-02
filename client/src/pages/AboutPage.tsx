import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Heart, Zap, Users } from "lucide-react";
import rect1 from "@/assets/images/Rectangle_19.jpeg";

const values = [
  { icon: Lightbulb, title: "Innovation", desc: "We push boundaries and embrace new ideas to deliver cutting-edge solutions." },
  { icon: Heart, title: "People-First", desc: "We genuinely care about our clients' success and pour our hearts into every project." },
  { icon: Zap, title: "Excellence", desc: "We hold ourselves to the highest standards in everything we do." },
  { icon: Users, title: "Collaboration", desc: "We work closely with our clients as true partners in their success." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero
          variant="page"
          title="About Lumin8"
          subtitle="We're a people-first digital marketing agency that solves tough problems using the power of creativity."
        />

        <section className="py-20 lg:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h6 className="text-sm font-medium text-[#616161] uppercase tracking-wider mb-4">
                  OUR STORY
                </h6>
                <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-6">
                  What you should know about us
                </h2>
                <p className="text-[#616161] mb-4 leading-relaxed">
                  Our expertise is in digital, but our purpose is people-first. You'll never get the bare minimum or strictly what's "in scope." We work hard to make amazing things happen for the people we work with, even if it's a little bit beyond what's expected.
                </p>
                <p className="text-[#616161] leading-relaxed">
                  We specialize in helping businesses tell their stories in compelling ways that drive real results. From franchise marketing to brand development, we bring creative excellence to every project we take on.
                </p>
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={rect1} alt="Our team at work" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-32 bg-[#FBFBFB]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1D1D1D] mb-4">Our Values</h2>
              <p className="text-[#616161] max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <Card key={i} className="text-center border-gray-100 bg-white">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-lg bg-[#78C8BF]/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-6 w-6 text-[#78C8BF]" />
                    </div>
                    <h3 className="font-semibold text-[#1D1D1D] mb-2">{value.title}</h3>
                    <p className="text-[#616161] text-sm">{value.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Stats />

        <CTA
          title="Ready to Work Together?"
          subtitle="Let's discuss how we can help your business grow."
          ctaText="Get in Touch"
        />
      </main>
      <Footer />
    </div>
  );
}

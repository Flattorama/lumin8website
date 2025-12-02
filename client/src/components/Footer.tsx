import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiLinkedin, SiInstagram, SiFacebook } from "react-icons/si";
import logo from "@/assets/images/Lumin8-Logo-Redesign-2024_White.png";

const quickLinks = [
  { href: "/services", label: "Services" },
  { href: "/franchise", label: "Franchise" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#branding-design", label: "Branding & Design" },
  { href: "/services#website-development", label: "Web Development" },
  { href: "/services#email-marketing", label: "Email Marketing" },
  { href: "/services#seo", label: "SEO" },
  { href: "/services#social-strategy", label: "Social Strategy" },
  { href: "/services#digital-strategy", label: "Digital Strategy" },
];

const socialLinks = [
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
  { icon: SiFacebook, href: "#", label: "Facebook" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <footer className="bg-[#1D1D1D] text-white" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" data-testid="link-footer-logo">
              <img 
                src={logo} 
                alt="Lumin8" 
                className="h-10 w-auto mb-4"
              />
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Lumin8 is a people-first digital marketing agency that solves tough problems using the power of creativity.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#78C8BF] transition-colors"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#78C8BF] transition-colors text-sm"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#78C8BF] transition-colors text-sm"
                    data-testid={`link-footer-service-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-white/70 text-sm mb-4">
              We're not spam, we swear! Stay in the know with the latest news in digital marketing and technology.
            </p>
            <form
              className="space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Newsletter signup:", { name, email });
              }}
            >
              <Input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                data-testid="input-newsletter-name"
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                data-testid="input-newsletter-email"
              />
              <Button 
                type="submit" 
                className="w-full bg-[#78C8BF] hover:bg-[#6bb8af] text-[#1D1D1D] font-semibold rounded-full"
                data-testid="button-newsletter-submit"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm" data-testid="text-copyright">
            @2024 LUMIN8. COPYRIGHTS ARE RESERVED
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-white/50 hover:text-[#78C8BF] text-sm transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-white/50 hover:text-[#78C8BF] text-sm transition-colors"
              data-testid="link-terms"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

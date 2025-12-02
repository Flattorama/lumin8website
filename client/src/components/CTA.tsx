import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface CTAProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

export function CTA({
  title = "Let's Get to Work!",
  subtitle,
  ctaText = "Contact us",
  ctaLink = "/contact",
}: CTAProps) {
  return (
    <section className="py-20 lg:py-32 bg-[#FBFBFB]" data-testid="section-cta">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1D] mb-8"
          data-testid="text-cta-title"
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className="text-lg text-[#616161] mb-8 max-w-2xl mx-auto"
            data-testid="text-cta-subtitle"
          >
            {subtitle}
          </p>
        )}
        <Link href={ctaLink}>
          <Button
            size="lg"
            className="bg-[#78C8BF] hover:bg-[#6bb8af] text-[#1D1D1D] font-bold rounded-full px-10 py-6"
            data-testid="button-cta-action"
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </section>
  );
}

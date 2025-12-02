import rect1 from "@/assets/images/Rectangle_19.jpeg";
import rect2 from "@/assets/images/Rectangle_20.jpeg";
import rect3 from "@/assets/images/Rectangle_21.jpeg";
import rect4 from "@/assets/images/Rectangle_22.jpeg";

export function Stats() {
  return (
    <section className="py-16 bg-[#78C8BF]" data-testid="section-stats">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: "150+", label: "Projects Completed" },
            { value: "50+", label: "Happy Clients" },
            { value: "10+", label: "Years Experience" },
            { value: "6", label: "Service Areas" },
          ].map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-item-${index}`}>
              <p className="text-4xl md:text-5xl font-bold text-[#1D1D1D] mb-2" data-testid={`text-stat-value-${index}`}>
                {stat.value}
              </p>
              <p className="text-[#1D1D1D]/80 font-medium" data-testid={`text-stat-label-${index}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="py-20 lg:py-32 bg-white" data-testid="section-about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h6 className="text-sm font-medium text-[#616161] uppercase tracking-wider mb-4">
              A BIT ABOUT US
            </h6>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1D1D1D] mb-6" data-testid="text-about-title">
              What you should<br />know about us
            </h2>
            <p className="text-lg text-[#616161] leading-relaxed" data-testid="text-about-description">
              Our expertise is in digital, but our purpose is people-first. You'll never get the bare minimum or strictly what's "in scope." We work hard to make amazing things happen for the people we work with, even if it's a little bit beyond what's expected.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden">
                <img src={rect1} alt="Team working" className="w-full h-48 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={rect2} alt="Creative work" className="w-full h-32 object-cover" />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="rounded-2xl overflow-hidden">
                <img src={rect3} alt="Design process" className="w-full h-32 object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden">
                <img src={rect4} alt="Strategy session" className="w-full h-48 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

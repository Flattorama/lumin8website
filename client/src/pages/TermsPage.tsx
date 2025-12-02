import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[#1D1D1D] mb-8" data-testid="text-terms-title">Terms and Conditions</h1>
          
          <div className="prose prose-neutral max-w-none">
            <p className="text-[#616161] mb-6">
              Last updated: November 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">1. Agreement to Terms</h2>
              <p className="text-[#616161] mb-4">
                By accessing the Lumin8 website, you agree to be bound by these terms of service. If you disagree with any part of these terms, you may not access our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">2. Services</h2>
              <p className="text-[#616161] mb-4">
                Lumin8 provides digital marketing agency services including but not limited to branding, marketing, web development, and franchise consulting. All services are subject to separate agreements and proposals.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">3. Intellectual Property</h2>
              <p className="text-[#616161] mb-4">
                All content on this website, including text, graphics, logos, and images, is the property of Lumin8 and protected by intellectual property laws. You may not use, reproduce, or distribute any content without our prior written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">4. User Responsibilities</h2>
              <p className="text-[#616161] mb-4">
                When using our website or services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-[#616161] space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Not use our services for any unlawful purpose</li>
                <li>Not interfere with the proper functioning of our website</li>
                <li>Respect intellectual property rights</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">5. Limitation of Liability</h2>
              <p className="text-[#616161] mb-4">
                Lumin8 shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services or website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">6. Changes to Terms</h2>
              <p className="text-[#616161] mb-4">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">7. Contact Information</h2>
              <p className="text-[#616161] mb-4">
                For questions about these terms, please contact us at hello@lumin8.agency.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

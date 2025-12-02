import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-[#1D1D1D] mb-8" data-testid="text-privacy-title">Privacy Policy</h1>
          
          <div className="prose prose-neutral max-w-none">
            <p className="text-[#616161] mb-6">
              Last updated: November 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">1. Introduction</h2>
              <p className="text-[#616161] mb-4">
                At Lumin8, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">2. Information We Collect</h2>
              <p className="text-[#616161] mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc pl-6 text-[#616161] space-y-2">
                <li>Contact information (name, email, phone number)</li>
                <li>Business information you provide through our forms</li>
                <li>Usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">3. How We Use Your Information</h2>
              <p className="text-[#616161] mb-4">
                We use your information to:
              </p>
              <ul className="list-disc pl-6 text-[#616161] space-y-2">
                <li>Provide and improve our services</li>
                <li>Communicate with you about your projects</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">4. Data Security</h2>
              <p className="text-[#616161] mb-4">
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">5. Your Rights</h2>
              <p className="text-[#616161] mb-4">
                You have the right to access, correct, or delete your personal data. Contact us to exercise these rights.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1D1D1D] mb-4">6. Contact Us</h2>
              <p className="text-[#616161] mb-4">
                If you have questions about this privacy policy, please contact us at hello@lumin8.agency.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

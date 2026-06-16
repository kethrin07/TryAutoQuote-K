import SiteNavbar from "@/components/SiteNavbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Privacy Policy | TryAutoQuote",
  description: "Privacy Policy for TryAutoQuote.com.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteNavbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-24 pb-16 space-y-8">
        <div className="border-b border-[#E2E8F0] pb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF5C3A]">Legal</span>
          <h1 className="text-3xl font-extrabold text-[#0D1B2A] tracking-tight mt-1">Privacy Policy</h1>
          <p className="text-sm text-[#64748B] mt-1">Last Updated: March 11, 2026</p>
        </div>

        <p className="text-[#64748B] leading-relaxed">
          TryAutoQuote (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at tryautoquote.com or use our services to compare auto insurance plans.
        </p>

        <Section title="1. Information We Collect">
          <p>We collect information you provide directly to us, including:</p>
          <ul className="list-disc pl-6 space-y-1.5 mt-2">
            <li>Name, email address, phone number, and ZIP code</li>
            <li>Vehicle information (year, make, model, and usage)</li>
            <li>Driver information (age, driving history, current coverage)</li>
            <li>Any other information you choose to provide</li>
          </ul>
          <p className="mt-2">We also automatically collect certain information when you use our site, such as IP address, browser type, pages visited, and time spent on pages.</p>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1.5 mt-2">
            <li>Match you with auto insurance providers and present relevant quotes</li>
            <li>Share your information with insurance carriers, agents, and partners who may contact you</li>
            <li>Communicate with you about our services, offers, and updates</li>
            <li>Improve our website, services, and user experience</li>
            <li>Comply with legal obligations and enforce our Terms of Use</li>
          </ul>
        </Section>

        <Section title="3. Sharing Your Information">
          <p>By submitting your information on TryAutoQuote, you agree that we may share your personal information with:</p>
          <ul className="list-disc pl-6 space-y-1.5 mt-2">
            <li>Auto insurance carriers, agents, and licensed brokers</li>
            <li>Marketing and advertising partners</li>
            <li>Service providers who assist us in operating our website and conducting our business</li>
            <li>Third parties as required by law or to protect our rights</li>
          </ul>
          <p className="mt-2">We do not sell your personal information to third parties for their own unrelated marketing purposes without your consent.</p>
        </Section>

        <Section title="4. Cookies and Tracking Technologies">
          <p>We use cookies, web beacons, and similar tracking technologies to enhance your experience, analyze usage patterns, and deliver relevant advertising. You can control cookie settings through your browser preferences, but disabling cookies may affect site functionality.</p>
        </Section>

        <Section title="5. Data Security">
          <p>We implement reasonable administrative, technical, and physical security measures to protect your information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
        </Section>

        <Section title="6. Your Choices">
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 space-y-1.5 mt-2">
            <li>Opt out of marketing communications by following the unsubscribe instructions in any email</li>
            <li>Request access to, correction of, or deletion of your personal information</li>
            <li>Opt out of the sale or sharing of your personal data where applicable under state law</li>
          </ul>
          <p className="mt-2">
            To exercise these rights, contact us at{" "}
            <a href="mailto:privacy@tryautoquote.com" className="text-[#FF5C3A] font-semibold hover:text-[#E84A28] transition">privacy@tryautoquote.com</a>.
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated effective date. Your continued use of our services after such changes constitutes your acceptance of the updated policy.</p>
        </Section>

        <Section title="9. Contact Us">
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            TryAutoQuote &nbsp;&mdash;&nbsp; Email:{" "}
            <a href="mailto:privacy@tryautoquote.com" className="text-[#FF5C3A] font-semibold hover:text-[#E84A28] transition">privacy@tryautoquote.com</a>
          </p>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-b border-[#E2E8F0] pb-8 space-y-2">
      <h2 className="text-base font-extrabold text-[#0D1B2A]">{title}</h2>
      <div className="text-[#64748B] leading-relaxed space-y-2">{children}</div>
    </section>
  );
}

import SiteNavbar from "@/components/SiteNavbar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Terms of Use | TryAutoQuote",
  description: "Terms of Use for TryAutoQuote.com.",
};

export default function TermsOfUse() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SiteNavbar />

      <main className="flex-1 max-w-4xl mx-auto w-full px-6 pt-24 pb-16 space-y-8">
        <div className="border-b border-[#E2E8F0] pb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#FF5C3A]">Legal</span>
          <h1 className="text-3xl font-extrabold text-[#0D1B2A] tracking-tight mt-1">Terms of Use</h1>
          <p className="text-sm text-[#64748B] mt-1">Last Updated: March 11, 2026</p>
        </div>

        <p className="text-[#64748B] leading-relaxed">
          Please read these Terms of Use (&ldquo;Terms&rdquo;) carefully before using the TryAutoQuote website and services. By accessing or using our site, you agree to be bound by these Terms. If you do not agree, please do not use our services.
        </p>

        <Section title="1. About TryAutoQuote">
          <p>TryAutoQuote is a free online platform that helps consumers compare auto insurance options by connecting them with licensed insurance carriers, agents, and brokers. We do not sell insurance directly. We are a lead generation and comparison service.</p>
        </Section>

        <Section title="2. Eligibility">
          <p>You must be at least 18 years of age and a resident of the United States to use our services. By using TryAutoQuote, you represent and warrant that you meet these requirements.</p>
        </Section>

        <Section title="3. No Insurance Advice">
          <p>TryAutoQuote does not provide insurance advice, recommendations, or brokerage services. Any information presented on this site is for general informational purposes only. You should consult with a licensed insurance professional before making any decisions about your auto insurance coverage.</p>
        </Section>

        <Section title="4. Third-Party Partners">
          <p>By submitting your information through TryAutoQuote, you consent to being contacted by our insurance partners including carriers, agents, and brokers via phone, email, or text message, even if your number is on a Do Not Call registry. These contacts may be made using automated dialing systems or pre-recorded messages. You are not required to make any purchase as a condition of using our services.</p>
        </Section>

        <Section title="5. Accuracy of Information">
          <p>You agree to provide accurate, current, and complete information when using our services. Providing false or misleading information may result in inaccurate quotes and is a violation of these Terms. TryAutoQuote is not responsible for any errors resulting from inaccurate information you provide.</p>
        </Section>

        <Section title="6. Intellectual Property">
          <p>All content on this site, including text, graphics, logos, and software, is the property of TryAutoQuote or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.</p>
        </Section>

        <Section title="7. Disclaimer of Warranties">
          <p>Our services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied. TryAutoQuote does not warrant that the site will be uninterrupted, error-free, or free of viruses or other harmful components. We make no guarantees regarding the accuracy or completeness of any information provided.</p>
        </Section>

        <Section title="8. Limitation of Liability">
          <p>To the fullest extent permitted by law, TryAutoQuote shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or your reliance on any information provided on this site, even if we have been advised of the possibility of such damages.</p>
        </Section>

        <Section title="9. Governing Law">
          <p>These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which TryAutoQuote is headquartered, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved in the applicable courts of that jurisdiction.</p>
        </Section>

        <Section title="10. Changes to These Terms">
          <p>We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the website. Your continued use of our services after any changes constitutes your acceptance of the revised Terms.</p>
        </Section>

        <Section title="11. Contact Us">
          <p>If you have any questions about these Terms of Use, please contact us at:</p>
          <p className="mt-2">
            TryAutoQuote &nbsp;&mdash;&nbsp; Email:{" "}
            <a href="mailto:legal@tryautoquote.com" className="text-[#FF5C3A] font-semibold hover:text-[#E84A28] transition">legal@tryautoquote.com</a>
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

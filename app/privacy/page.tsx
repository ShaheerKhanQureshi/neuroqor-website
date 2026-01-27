import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - NeuroQor",
  description: "NeuroQor's privacy policy and data handling practices.",
}

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-[#111827] mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Last updated: January 2026
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">1. Information We Collect</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            We collect information you provide directly to us, including when you fill out contact forms, subscribe to our newsletter, or communicate with us. This may include your name, email address, company name, and any other information you choose to provide.
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">2. How We Use Your Information</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            We use the information we collect to respond to your inquiries, provide our services, send you technical updates and insights (if you have subscribed), and improve our website and services.
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">3. Information Sharing</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            We do not share personal information with partners or third parties without your consent. We may share information when required by law or to protect our rights.
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">4. Data Security</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            We implement appropriate technical and organizational measures to protect the security of your personal information. However, no method of transmission over the Internet is completely secure.
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">5. Your Rights</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            You may request access to, correction of, or deletion of your personal information by contacting us at info@neuroqor.com.
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">6. Contact Us</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            If you have questions about this Privacy Policy, please contact us at info@neuroqor.com.
          </p>
        </div>
      </div>
    </section>
  )
}

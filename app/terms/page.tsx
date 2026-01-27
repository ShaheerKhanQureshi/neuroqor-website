import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use - NeuroQor",
  description: "NeuroQor's terms of use and service conditions.",
}

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-[#111827] mb-8">Terms of Use</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Last updated: January 2026
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">1. Acceptance of Terms</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">2. Use of Website</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            This website is provided for informational purposes only. The content on this site is intended for general information and should not be construed as professional advice.
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">3. Intellectual Property</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            All content on this website, including text, graphics, logos, and images, is the property of NeuroQor and is protected by applicable intellectual property laws.
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">4. Limitation of Liability</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            NeuroQor shall not be liable for any damages arising out of or in connection with the use or inability to use this website or its content.
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">5. Governing Law</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            These terms shall be governed by and construed in accordance with applicable laws.
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">6. Contact Us</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            If you have questions about these Terms of Use, please contact us at info@neuroqor.com.
          </p>
        </div>
      </div>
    </section>
  )
}

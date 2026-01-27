import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Statement - NeuroQor",
  description: "NeuroQor's commitment to digital accessibility.",
}

export default function AccessibilityPage() {
  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-semibold text-[#111827] mb-8">Accessibility Statement</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-[#6B7280] leading-relaxed mb-6">
            Last updated: January 2026
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">Our Commitment</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            NeuroQor is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">Conformance Status</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. These guidelines explain how to make web content more accessible for people with disabilities.
          </p>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">Measures We Take</h2>
          <ul className="list-disc pl-6 text-[#6B7280] space-y-2 mb-4">
            <li>Using semantic HTML structure</li>
            <li>Ensuring sufficient color contrast</li>
            <li>Providing keyboard navigation support</li>
            <li>Including alternative text for images</li>
            <li>Designing clear and consistent navigation</li>
          </ul>

          <h2 className="text-xl font-semibold text-[#111827] mt-10 mb-4">Feedback</h2>
          <p className="text-[#6B7280] leading-relaxed mb-4">
            We welcome your feedback on the accessibility of the NeuroQor website. Please let us know if you encounter accessibility barriers by contacting us at info@neuroqor.com.
          </p>
        </div>
      </div>
    </section>
  )
}

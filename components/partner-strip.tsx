// "use client"

// import { useEffect, useRef } from "react"

// const partners = [
//   { name: "ID Quantique", abbr: "IDQ" },
//   { name: "IonQ", abbr: "IonQ" },
//   { name: "Dell", abbr: "Dell" },
//   { name: "Cisco", abbr: "Cisco" },
//   { name: "H3C", abbr: "H3C" },
//   { name: "Trend Micro", abbr: "TM" },
// ]

// export default function PartnerStrip() {
//   const sectionRef = useRef<HTMLElement>(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("visible")
//           }
//         })
//       },
//       { threshold: 0.1 }
//     )

//     const elements = sectionRef.current?.querySelectorAll(".fade-up")
//     elements?.forEach((el) => observer.observe(el))

//     return () => observer.disconnect()
//   }, [])

//   return (
//     <section ref={sectionRef} className="py-20 bg-white border-y border-gray-200/80">
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12 fade-up">
//           <h3 className="text-lg font-medium text-[#6B7280] mb-2">Built with trusted partners</h3>
//           <p className="text-sm text-[#9CA3AF]">
//             Delivered with and validated by leading technology providers
//           </p>
//         </div>

//         {/* Partner Logos */}
//         <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center fade-up delay-100">
//           {partners.map((partner) => (
//             <div
//               key={partner.name}
//               className="group flex items-center justify-center w-full py-4 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
//               title={partner.name}
//             >
//               <div className="text-center">
//                 <span className="text-xl font-semibold text-[#6B7280] group-hover:text-[#111827] transition-colors">
//                   {partner.abbr}
//                 </span>
//                 <span className="block text-xs text-[#9CA3AF] mt-1 group-hover:text-[#6B7280] transition-colors">
//                   {partner.name !== partner.abbr && partner.name}
//                 </span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
"use client"

/*
  PartnerStrip component — DISABLED

  This file intentionally exports a valid React component
  that renders nothing. This keeps all existing imports
  working while removing the partner strip from the UI
  across the entire website.

  To re-enable later:
  - Replace `return null` with the original component code
*/

export default function PartnerStrip() {
  return null
}

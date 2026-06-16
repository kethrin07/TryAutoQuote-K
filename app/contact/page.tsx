"use client"

import { useState } from "react"
import SiteNavbar from "@/components/SiteNavbar";
import Footer from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.message) return
    setSubmitted(true)
  }

  return (
    <div className="flex flex-col" style={{ minHeight: "100vh" }}>
      <SiteNavbar />

      <main className="flex-1 flex flex-col justify-center px-6 py-8" style={{ backgroundColor: "#F0F6FF" }}>
        <div className="max-w-5xl mx-auto w-full">

          <div className="mb-6">
            <h1 className="text-2xl font-extrabold text-[#0D1B2A] tracking-tight">Get in Touch</h1>
            <p className="text-[#64748B] text-sm mt-1">
              Have a question or need help? Send us a message and we will get back to you within one business day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Left - Info */}
            <div className="relative rounded-xl p-8 overflow-hidden flex flex-col justify-between text-white"
              style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 100%)" }}>
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white/10" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 rounded-full bg-white/10" />

              <div className="relative z-10">
                <h2 className="text-xl font-extrabold mb-3">Contact Information</h2>
                <p className="text-white/70 mb-8 leading-relaxed text-sm">
                  We typically respond within one business day. For any questions about your quotes or how the platform works, we are happy to help.
                </p>

                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 p-2.5 rounded-lg shrink-0">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-white/60">Email us at</p>
                    <a href="mailto:info@tryautoquotes.com" className="text-sm font-semibold hover:text-white/80 transition">
                      info@tryautoquotes.com
                    </a>
                  </div>
                </div>

              </div>

              <p className="relative z-10 mt-8 text-xs text-white/40">
                TryAutoQuote is a free service. You are never obligated to purchase any policy.
              </p>
            </div>

            {/* Right - Form */}
            <div className="bg-white rounded-xl p-8 shadow-sm ring-1 ring-[#E2E8F0]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="bg-[#FF5C3A]/10 p-4 rounded-xl mb-4">
                    <svg className="w-7 h-7 text-[#FF5C3A]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-extrabold text-[#0D1B2A] mb-2">Message Sent</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Thanks for reaching out. We will get back to you within one business day.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#1A202C] mb-1.5">Your Name</label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1A202C] placeholder-[#64748B] focus:outline-none focus:border-[#FF5C3A] focus:ring-2 focus:ring-[#FF5C3A]/20 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A202C] mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1A202C] placeholder-[#64748B] focus:outline-none focus:border-[#FF5C3A] focus:ring-2 focus:ring-[#FF5C3A]/20 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#1A202C] mb-1.5">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full border border-[#E2E8F0] rounded-lg px-4 py-2.5 text-sm text-[#1A202C] placeholder-[#64748B] focus:outline-none focus:border-[#FF5C3A] focus:ring-2 focus:ring-[#FF5C3A]/20 transition resize-none"
                    />
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#FF5C3A] text-white font-extrabold uppercase tracking-widest py-3 rounded-xl hover:bg-[#E84A28] hover:scale-[1.02] transition shadow-sm cursor-pointer"
                  >
                    Send Message →
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

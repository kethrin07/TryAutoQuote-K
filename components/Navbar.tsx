"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-[68px] flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="text-xl font-extrabold tracking-tight text-[#0D1B2A]">
          TryAuto<span className="text-[#FF5C3A]">Quote</span>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/contact" className="text-sm font-semibold text-[#0D1B2A] hover:text-[#FF5C3A] transition">Contact</Link>
          <a href="tel:18005550123" className="flex items-center gap-2 text-sm font-semibold text-[#0D1B2A] hover:text-[#FF5C3A] transition">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
          </svg>
          1-800-555-0123
        </a>
        </div>
      </div>
    </header>
  );
}

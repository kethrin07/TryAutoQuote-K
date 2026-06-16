"use client";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 h-[68px] flex items-center px-6">
      <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo-no-bg.png" alt="TryAutoQuote" width={36} height={36} style={{ width: "auto", height: "36px" }} priority />
          <span className="text-xl font-extrabold tracking-tight text-[#0D1B2A]">TryAuto<span className="text-[#FF5C3A]">Quote</span></span>
        </Link>
        <div className="hidden sm:flex items-center gap-6">
          <Link href="/contact" className="text-sm font-semibold text-[#0D1B2A] hover:text-[#FF5C3A] transition">Contact</Link>
        </div>
      </div>
    </header>
  );
}

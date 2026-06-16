"use client";
import Link from "next/link";
import Image from "next/image";

const PhoneIcon = () => (
  <svg className="h-4 w-4 text-[var(--color-coral)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
  </svg>
);

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--color-line)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo-no-bg.png" alt="TryAutoQuote" width={36} height={36} className="h-9 w-auto" />
          <span className="text-xl font-extrabold tracking-tight">TryAuto<span className="text-[var(--color-coral)]">Quote</span></span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--color-muted-ink)] md:flex">
          <Link href="/#why" className="transition hover:text-[var(--color-ink)]">Why Us</Link>
          <Link href="/#how" className="transition hover:text-[var(--color-ink)]">How it Works</Link>
          <Link href="/#reviews" className="transition hover:text-[var(--color-ink)]">Reviews</Link>
          <Link href="/#faq" className="transition hover:text-[var(--color-ink)]">FAQ</Link>
          <Link href="/contact" className="transition hover:text-[var(--color-ink)]">Contact</Link>
        </nav>
        <div className="flex items-center gap-2 sm:gap-4">
          <a href="tel:18005550123" className="hidden items-center gap-2 text-sm font-semibold sm:flex">
            <PhoneIcon />
            1-800-555-0123
          </a>
          <Link href="/" className="rounded-full bg-[var(--color-coral)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:scale-105 hover:bg-[var(--color-coral-dark)] sm:px-5 sm:text-sm">
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}

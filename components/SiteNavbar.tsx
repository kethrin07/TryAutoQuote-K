"use client";
import Link from "next/link";
import Image from "next/image";

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--color-line)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/Logo-no-bg.png" alt="TryAutoQuote" width={36} height={36} style={{ width: "auto", height: "36px" }} priority />
          <span className="text-xl font-extrabold tracking-tight">TryAuto<span className="text-[var(--color-coral)]">Quote</span></span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--color-muted-ink)] md:flex">
          <Link href="/#why" className="transition hover:text-[var(--color-ink)]">Why Us</Link>
          <Link href="/#how" className="transition hover:text-[var(--color-ink)]">How it Works</Link>
          <Link href="/#reviews" className="transition hover:text-[var(--color-ink)]">Reviews</Link>
          <Link href="/#faq" className="transition hover:text-[var(--color-ink)]">FAQ</Link>
          <Link href="/contact" className="transition hover:text-[var(--color-ink)]">Contact</Link>
        </nav>
        <Link href="/" className="rounded-full bg-[var(--color-coral)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:scale-105 hover:bg-[var(--color-coral-dark)] sm:px-5 sm:text-sm">
          Get a Quote
        </Link>
      </div>
    </header>
  );
}

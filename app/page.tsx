"use client";
import Image from "next/image";
import { useEffect, useState } from "react";


const FAQS = [
  {
  q: "What factors affect my car insurance premium?",
  a:
    "Your driving history is one of the biggest factors, including any accidents, tickets, or DUI records from the past 3 to 5 years. Your age and years of experience behind the wheel matter too, with younger drivers typically paying more. Where you live plays a major role since urban areas with higher traffic and theft rates tend to have higher premiums. The vehicle itself matters as well, including its make, model, year, safety ratings, and how expensive it is to repair. On top of that, the coverage types and limits you choose, your deductible amount, and even your credit score in most states will all influence your final rate.",
},
  {
    q: "How quickly can I get matched with providers?",
    a:
      "Most users see results within 2 to 3 minutes. Once you submit your information, our matching engine runs it against a live database of dozens of carriers simultaneously, filtering out policies you would not qualify for and surfacing only the ones relevant to your situation. You do not have to fill out separate forms for each provider or wait for callbacks. Everything comes back in one place, ranked and ready to compare.",
  },
  {
    q: "Is the service really free?",
    a:
      "Yes, completely free. You pay nothing to use TryAutoQuote and there is no catch. We are compensated by the insurance carriers and aggregators when a match is made, which is how we keep the service free for drivers. You are never obligated to purchase any policy that comes up in your results, and you can compare as many times as you like with no fees involved.",
  },
  {
    q: "Will checking quotes affect my credit score?",
    a:
      "No, it will not. What insurance companies do is called a soft inquiry, which is different from the hard inquiry a lender runs when you apply for a loan or credit card. Soft inquiries are not reported to credit bureaus and have zero impact on your credit score. You can check quotes freely and repeatedly without any risk to your credit.",
  },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in-view")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

import CarValueSlider from "@/components/CarValueSlider";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import QuoteHighlighter from "@/components/QuoteHighlighter";
import CountUp from "@/components/CountUp";

const CheckIcon = () => (
  <svg className="h-4 w-4 text-[var(--color-emerald-accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);
const PhoneIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
);

export default function Home() {
  useReveal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const triggerHeroHighlight = () => {
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("highlight-quote-input"));
      document.getElementById("zip-hero")?.focus();
    }, 600);
  };

  const handleGetQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    triggerHeroHighlight();
  };


  return (
    <div className="bg-white text-[var(--color-ink)]">
      <QuoteHighlighter />
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[var(--color-line)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" onClick={scrollTo("top")} className="text-xl font-extrabold tracking-tight">
            TryAuto<span className="text-[var(--color-coral)]">Quote</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--color-muted-ink)] md:flex">
            <a href="#why" onClick={scrollTo("why")} className="transition hover:text-[var(--color-ink)]">Why Us</a>
            <a href="#how" onClick={scrollTo("how")} className="transition hover:text-[var(--color-ink)]">How it Works</a>
            <a href="#reviews" onClick={scrollTo("reviews")} className="transition hover:text-[var(--color-ink)]">Reviews</a>
            <a href="#faq" onClick={scrollTo("faq")} className="transition hover:text-[var(--color-ink)]">FAQ</a>
            <a href="#contact" onClick={scrollTo("contact")} className="transition hover:text-[var(--color-ink)]">Contact</a>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4">
            <a href="tel:18005550123" className="hidden items-center gap-2 text-sm font-semibold sm:flex">
              <PhoneIcon className="h-4 w-4 text-[var(--color-coral)]" />
              1-800-555-0123
            </a>
            <a href="#top" onClick={handleGetQuote} className="rounded-full bg-[var(--color-coral)] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:scale-105 hover:bg-[var(--color-coral-dark)] sm:px-5 sm:text-sm">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 100%)" }}>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[var(--color-coral)]/20 blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-20 h-[28rem] w-[28rem] rounded-full bg-blue-400/20 blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/3 right-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:py-28">
          <div className="reveal text-white">
            <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/80">Auto Insurance Comparison</span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Find Your Best Rate in <span className="text-[var(--color-coral)]">90 Seconds</span>
            </h1>
            <p className="mt-5 max-w-lg text-lg text-white/75">Compare 40+ top insurers side by side. Free, fast, no spam.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 max-w-md">
              <label htmlFor="zip-hero" className="sr-only">ZIP code</label>
              <input id="zip-hero" type="text" inputMode="numeric" maxLength={5} placeholder="Enter your ZIP code"
                className="w-full rounded-2xl border-2 border-white/10 bg-white px-5 py-4 text-lg font-semibold text-[var(--color-ink)] placeholder:text-slate-400 outline-none transition focus:border-[var(--color-coral)] focus:ring-4 focus:ring-[var(--color-coral)]/30" />
              <button type="button" onClick={(e) => { e.preventDefault(); document.getElementById("zip-hero")?.focus(); }}
                className="mt-3 w-full rounded-2xl bg-[var(--color-coral)] px-6 py-4 text-sm font-extrabold uppercase tracking-widest text-white shadow-[0_10px_30px_-10px_rgba(255,92,58,0.6)] transition hover:scale-[1.02] hover:bg-[var(--color-coral-dark)]">
                Get My Free Quotes →
              </button>
            </form>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white/80">
              <span className="inline-flex items-center gap-1.5"><CheckIcon /> Free to use</span>
              <span className="inline-flex items-center gap-1.5"><CheckIcon /> No credit check</span>
              <span className="inline-flex items-center gap-1.5"><CheckIcon /> Takes 2 minutes</span>
            </div>
            <p className="mt-4 text-xs text-white/55">Prefer to call? <a href="tel:18005550123" className="font-semibold text-white/80 underline-offset-2 hover:underline">1-800-555-0123</a></p>
          </div>
          <div className="reveal relative">
            <Image src="/hero-illustration.png" alt="Compare auto insurance quotes" width={1024} height={1024} priority
              className="mx-auto w-full max-w-lg h-auto float-slow drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]" />
          </div>
        </div>
      </section>

      <section id="why" className="relative py-20 overflow-hidden" style={{ backgroundColor: "#F0F6FF" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal text-center">
            <div className="flex justify-center gap-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-[var(--color-coral)]" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
              <span className="h-2 w-2 rounded-full bg-slate-300" />
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-4xl lg:text-5xl">Why we&apos;re better than others</h2>
            <p className="mt-4 mx-auto max-w-xl text-[var(--color-muted-ink)] leading-relaxed">
              Many of us spend countless hours filling endless documentation just to find out there is no relevant policy. Our platform makes sure you are presented with the top options in one place.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Free, always",
                body: "The service is free and you are never obligated to buy the presented policy. No hidden fees, no credit card required. Just real rates from real carriers, at no cost to you.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>
                  </svg>
                ),
              },
              {
                title: "No spam calls",
                body: "Compare quotes without a flood of follow-up calls. You decide who to talk to. We never sell your phone number to telemarketers. Your contact details stay between you and the carrier you choose.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M10.1 13.9a14 14 0 0 0 3.732 2.668 1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2 18 18 0 0 1-12.728-5.272"/>
                    <path d="M22 2 2 22"/>
                    <path d="M4.76 13.582A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 .244.473"/>
                  </svg>
                ),
              },
              {
                title: "Real-time matching",
                body: "Your details are compared live against a database connected to dozens of top insurance carriers. The quotes you see reflect actual current rates, not ballpark estimates generated days later.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                ),
              },
              {
                title: "Carriers you recognize",
                body: "Get matched with established providers you actually know, willing to insure you. No obscure names, only trusted carriers with strong reputations and solid claims track records.",
                icon: (
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
              },
            ].map((f) => (
              <div key={f.title} className="reveal rounded-3xl bg-white p-7 shadow-sm flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[var(--color-coral)]/10 flex items-center justify-center text-[var(--color-coral)] shrink-0">
                  {f.icon}
                </div>
                <h3 className="font-bold text-[var(--color-ink)]">{f.title}</h3>
                <p className="text-sm leading-relaxed text-[var(--color-muted-ink)]">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estimate calculator — white */}
      <CarValueSlider onCtaClick={triggerHeroHighlight} />

      {/* How it works — #F0F6FF */}
      <section id="how" className="py-20" style={{ backgroundColor: "#F0F6FF" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="reveal mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">How does TryAutoQuote work?</h2>
          </div>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14">
            <Image src="/how-it-works.jpg" alt="Mobile auto insurance comparison" width={1024} height={768}
              className="reveal w-full h-auto rounded-3xl shadow-xl" />
            <div className="grid gap-5">
              <div className="reveal rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[var(--color-line)]">
                <p className="leading-relaxed text-[var(--color-muted-ink)]">We take all the information you provide regarding yourself and your vehicle and compare it in real time to our live database connected to dozens of top insurance carriers. This results in a list of policies that are specific to your personal circumstances and are from carriers that are willing to insure you.</p>
              </div>
              <div className="reveal rounded-3xl bg-white p-7 shadow-sm ring-1 ring-[var(--color-line)]">
                <h3 className="mb-2 font-bold text-[var(--color-ink)]">Why personalized results matter</h3>
                <p className="leading-relaxed text-[var(--color-muted-ink)]">Many of us spend countless hours filling endless documentation just to find out there is no relevant policy or getting declined for insurance. Our platform makes sure you are presented with the top options in one place.</p>
              </div>
              <div className="reveal flex items-start gap-4 rounded-3xl bg-[var(--color-coral)]/10 p-6 ring-1 ring-[var(--color-coral)]/20">
                <CheckIcon />
                <p className="text-sm font-semibold text-[var(--color-ink)]">The service is free and you are never obligated to buy the presented policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — white */}
      <div id="reviews">
        <TestimonialsCarousel />
      </div>

      <section className="relative py-16 overflow-hidden" style={{ background: "linear-gradient(135deg, #0D1B2A 0%, #1B3A5C 100%)" }}>
        <Image src="/highway.jpg" alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B2A] via-[#0D1B2A]/60 to-[#1B3A5C]/80" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid divide-y divide-white/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {[
              { prefix: "$", value: 547, suffix: "",  l: "Average annual savings per user" },
              { prefix: "",  value: 40,  suffix: "+", l: "Insurance providers compared" },
              { prefix: "",  value: 90,  suffix: "s", l: "Average time to get your quotes" },
            ].map((s) => (
              <div key={s.l} className="reveal px-6 py-6 text-center">
                <CountUp
                  value={s.value}
                  prefix={s.prefix}
                  suffix={s.suffix}
                  duration={2000}
                  className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl"
                />
                <div className="mt-2 text-sm font-medium text-white/60">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20" style={{ backgroundColor: "#F0F6FF" }}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="reveal text-center">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Common Questions</h2>
            <p className="mt-3 text-[var(--color-muted-ink)]">Everything you need to know before getting your quotes.</p>
          </div>
          <div className="mt-10 divide-y divide-[var(--color-line)] rounded-2xl border border-[var(--color-line)] bg-white shadow-sm">
            {FAQS.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q}>
                  <button onClick={() => setOpenFaq(open ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-slate-50">
                    <span className="font-bold">{f.q}</span>
                    <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[var(--color-coral)] text-white transition-transform ${open ? "rotate-45" : ""}`}>
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                    </span>
                  </button>
                  <div className={`grid overflow-hidden px-6 transition-all duration-300 ease-out ${open ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="min-h-0"><p className="leading-relaxed text-[var(--color-muted-ink)]">{f.a}</p></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="reveal text-center text-4xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-5xl">
            It&apos;s easy to start saving.
          </h2>

          <div className="reveal mt-14 flex flex-col sm:flex-row items-stretch">
            {/* Left — Get a Quote Online */}
            <div className="flex flex-1 flex-col items-center px-6 py-8 text-center sm:px-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--color-coral)]/10 text-[var(--color-coral)]">
                <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2"/><polyline points="8 21 12 17 16 21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-[var(--color-ink)]">Get a Quote Online</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--color-muted-ink)]">
                Our easy-to-use tools let you compare quotes from top carriers side by side, all at once and in minutes.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="mt-6 w-full max-w-sm space-y-3">
                <div className="flex items-center gap-2 rounded-xl border-2 border-[var(--color-line)] bg-white px-4 py-3 transition focus-within:border-[var(--color-coral)] focus-within:ring-2 focus-within:ring-[var(--color-coral)]/20">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[var(--color-muted-ink)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                  </svg>
                  <input id="zip-cta" type="text" inputMode="numeric" maxLength={5} placeholder="ZIP code"
                    className="flex-1 bg-transparent text-sm font-semibold text-[var(--color-ink)] placeholder:text-slate-400 outline-none" />
                </div>
                <button type="button" onClick={() => document.getElementById("zip-cta")?.focus()}
                  className="w-full rounded-xl bg-[var(--color-coral)] py-3 text-sm font-extrabold uppercase tracking-widest text-white shadow-sm transition hover:bg-[var(--color-coral-dark)] hover:scale-[1.02]">
                  Get My Quotes →
                </button>
              </form>
              <p className="mt-3 text-xs text-[var(--color-muted-ink)]">Free · No credit check · Takes 90 seconds</p>
            </div>

            {/* OR Divider */}
            <div className="flex flex-row items-center sm:flex-col">
              <div className="h-px flex-1 bg-[var(--color-line)] sm:h-auto sm:w-px sm:flex-1" />
              <div className="mx-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-navy-900)] text-xs font-bold text-white sm:my-4 sm:mx-0">
                OR
              </div>
              <div className="h-px flex-1 bg-[var(--color-line)] sm:h-auto sm:w-px sm:flex-1" />
            </div>

            {/* Right — Call an Agent */}
            <div className="flex flex-1 flex-col items-center px-6 py-8 text-center sm:px-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[var(--color-navy-900)]/10 text-[var(--color-navy-900)]">
                <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-extrabold text-[var(--color-ink)]">Call an Agent</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--color-muted-ink)]">
                Prefer a friendly voice? Our licensed agents are standing by to help you find the best rate.
              </p>
              <a href="tel:18005550123"
                className="mt-6 text-3xl font-extrabold tracking-tight text-[var(--color-navy-900)] transition hover:text-[var(--color-coral)]">
                1-800-555-0123
              </a>
              <p className="mt-2 text-xs text-[var(--color-muted-ink)]">No obligation · Free to call</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-14 text-white" style={{ backgroundColor: "#0D1B2A" }}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="text-xl font-extrabold tracking-tight">TryAuto<span className="text-[var(--color-coral)]">Quote</span></div>
              <p className="mt-3 max-w-xs text-sm text-white/60">Compare top auto insurance carriers in 90 seconds. Save up to $547 a year.</p>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-white">Navigate</h4>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                {[
                  { label: "Why Us", href: "#why" },
                  { label: "How it Works", href: "#how" },
                  { label: "Reviews", href: "#reviews" },
                  { label: "FAQ", href: "#faq" },
                  { label: "Contact", href: "#contact" },
                ].map((x) => (
                  <li key={x.label}>
                    <a href={x.href} className="transition hover:text-white">{x.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            {[
              { h: "Resources", l: ["Insurance Guide", "Savings Calculator", "Blog", "Help Center"] },
              { h: "Legal", l: ["Privacy Policy", "Terms of Use", "Licenses", "Do Not Sell My Info"] },
            ].map((col) => (
              <div key={col.h}>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white">{col.h}</h4>
                <ul className="mt-4 space-y-2 text-sm text-white/60">
                  {col.l.map((x) => <li key={x}><a href="#" className="transition hover:text-white">{x}</a></li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <div>© {new Date().getFullYear()} TryAutoQuote. All rights reserved.</div>
            <div className="max-w-xl sm:text-right">Quotes are estimates and may vary based on driving history, location, vehicle, and coverage selected.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

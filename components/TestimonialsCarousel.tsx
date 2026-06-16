"use client";
import { useState, useRef, useEffect } from "react";

const TESTIMONIALS = [
  {
    q: "I switched in 10 minutes and my rate dropped immediately. Couldn't believe how simple it was.",
    n: "Sarah M.", l: "Austin, TX", s: "$612/yr",
    img: "/testimonials/sarah-m.png",
  },
  {
    q: "Got 6 quotes side by side. Picked the cheapest one with the same coverage I already had.",
    n: "James T.", l: "Orlando, FL", s: "$480/yr",
    img: "/testimonials/james-t.png",
  },
  {
    q: "Saved more than I expected. The whole thing took under two minutes. No calls, no spam.",
    n: "Priya K.", l: "Chicago, IL", s: "$730/yr",
    img: "/testimonials/priya-k.png",
  },
  {
    q: "I was skeptical at first but the process was completely transparent. Found a better policy in minutes.",
    n: "Marcus D.", l: "Phoenix, AZ", s: "$590/yr",
    img: "/testimonials/marcus-d.png",
  },
  {
    q: "Super easy to use and the savings were real. I've already recommended it to three of my friends.",
    n: "Olivia R.", l: "Seattle, WA", s: "$415/yr",
    img: "/testimonials/olivia-r.png",
  },
];

const Star = () => (
  <svg className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

function Avatar({ name, img }: { name: string; img: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name.split(" ").map((w) => w[0]).join("").slice(0, 2);

  if (failed) {
    return (
      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500 font-bold text-base shrink-0 border-2 border-[var(--color-line)]">
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={img}
      alt={name}
      onError={() => setFailed(true)}
      className="w-14 h-14 rounded-full object-cover shrink-0 border-2 border-[var(--color-line)]"
    />
  );
}

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateEdges = (track: HTMLDivElement) => {
    setAtStart(track.scrollLeft <= 1);
    setAtEnd(track.scrollLeft + track.clientWidth >= track.scrollWidth - 1);
  };

  const goTo = (i: number) => {
    setCurrent(i);
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[i] as HTMLElement;
    if (card) track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    updateEdges(track);
    const cards = Array.from(track.children) as HTMLElement[];
    const scrollLeft = track.scrollLeft;
    let closest = 0;
    let minDiff = Infinity;
    cards.forEach((card, i) => {
      const diff = Math.abs(card.offsetLeft - scrollLeft);
      if (diff < minDiff) { minDiff = diff; closest = i; }
    });
    if (closest !== current) setCurrent(closest);
  };

  useEffect(() => {
    const track = trackRef.current;
    if (track) updateEdges(track);
  }, []);

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Real Drivers. Real Savings.</h2>
          <p className="mt-3 text-[var(--color-muted-ink)]">Thousands of drivers found a better rate this month.</p>
        </div>

        <div className="relative mt-12">
          {/* Carousel track */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t) => (
              <article
                key={t.n}
                className="snap-start shrink-0 w-[80%] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] flex flex-col rounded-xl border border-[var(--color-line)] bg-white p-6 shadow-sm"
              >
                {/* User image + name row */}
                <div className="flex items-center gap-3 mb-4">
                  <Avatar name={t.n} img={t.img} />
                  <div className="min-w-0">
                    <div className="font-bold text-sm">{t.n}</div>
                    <div className="text-xs text-[var(--color-muted-ink)]">{t.l}</div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} />)}
                </div>

                {/* Quote */}
                <p className="mt-3 flex-1 text-base leading-relaxed text-[var(--color-ink)]">
                  &ldquo;{t.q}&rdquo;
                </p>

                {/* Savings badge */}
                <div className="mt-5 border-t border-[var(--color-line)] pt-4">
                  <span className="rounded-full bg-[var(--color-coral)] px-3 py-1.5 text-xs font-bold text-white shadow-sm">
                    saved {t.s}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Navigation: prev · dots · next */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => goTo(Math.max(0, current - 1))}
              disabled={atStart}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-line)] bg-white shadow-sm transition hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>

            {[0, 1, 2].map((page) => (
              <button
                key={page}
                onClick={() => goTo(page)}
                aria-label={`Go to page ${page + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  Math.min(current, 2) === page
                    ? "w-7 bg-[var(--color-coral)]"
                    : "w-2.5 bg-slate-200 hover:bg-slate-300"
                }`}
              />
            ))}

            <button
              onClick={() => goTo(Math.min(2, current + 1))}
              disabled={atEnd}
              className="grid h-10 w-10 place-items-center rounded-full border border-[var(--color-line)] bg-white shadow-sm transition hover:border-[var(--color-coral)] hover:text-[var(--color-coral)] disabled:opacity-30 disabled:cursor-not-allowed"
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

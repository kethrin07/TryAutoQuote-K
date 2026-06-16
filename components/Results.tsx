"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
const CheckCircle = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);
const Star = ({ className = "", filled = false }) => (
  <svg className={className} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill={filled ? "currentColor" : "none"}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const ShieldCheck = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
);
const Phone = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/></svg>
);

export default function Results() {
  const router = useRouter();

  const offers = [
    {
      company: "SecureAuto Insurance",
      price: "$89",
      savings: "Save up to $420/year",
      rating: 4.8,
      reviews: "2,341 reviews",
      badge: "Best Value",
      coverage: ["Liability", "Collision", "Comprehensive"],
      deductible: "$500 deductible",
    },
    {
      company: "DriveSafe Coverage",
      price: "$102",
      savings: "Save up to $350/year",
      rating: 4.6,
      reviews: "1,892 reviews",
      badge: null,
      coverage: ["Liability", "Collision", "Roadside Assist"],
      deductible: "$250 deductible",
    },
    {
      company: "ShieldGuard Insurance",
      price: "$95",
      savings: "Save up to $390/year",
      rating: 4.7,
      reviews: "3,105 reviews",
      badge: null,
      coverage: ["Liability", "Comprehensive", "Uninsured Motorist"],
      deductible: "$500 deductible",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#EBF2FB]">
      <Navbar />

      {/* Hero Banner */}
      <div className="bg-[#042C53] pt-28 pb-14 text-white text-center px-6">
        <div className="flex justify-center mb-4">
          <ShieldCheck className="w-12 h-12 text-[#B5D4F4]" />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          Great news! We found{" "}
          <span className="text-[#B5D4F4]">3 offers</span> for you!
        </h1>
        <p className="text-[#B5D4F4] text-lg max-w-xl mx-auto">
          Compare top auto insurance plans tailored to your profile. Select the
          one that fits you best.
        </p>
      </div>

      {/* Offers */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-12 space-y-6">
        {offers.map((offer, index) => (
          <div
            key={index}
            className={`bg-white rounded-2xl shadow-md overflow-hidden border-2 ${
              offer.badge ? "border-[#2B5BA8]" : "border-transparent"
            }`}
          >
            {offer.badge && (
              <div className="bg-[#2B5BA8] text-white text-xs font-bold uppercase tracking-widest text-center py-1.5">
                {offer.badge}
              </div>
            )}

            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Left: Company + rating + coverage tags */}
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-[#042C53] mb-1">
                  {offer.company}
                </h3>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      filled={i < Math.floor(offer.rating)}
                      className={`w-4 h-4 ${i < Math.floor(offer.rating) ? "text-amber-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">
                    {offer.rating} · {offer.reviews}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {offer.coverage.map((c) => (
                    <span
                      key={c}
                      className="flex items-center gap-1 text-xs bg-[#EBF2FB] text-[#2B5BA8] font-medium px-2.5 py-1 rounded-full"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {c}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-gray-400 mt-2">{offer.deductible}</p>
              </div>

              {/* Right: Price + CTA */}
              <div className="flex flex-col items-center sm:items-end gap-3 shrink-0">
                <div className="text-center sm:text-right">
                  <div>
                    <span className="text-4xl font-extrabold text-[#042C53]">
                      {offer.price}
                    </span>
                    <span className="text-gray-500 text-sm">/mo</span>
                  </div>
                  <p className="text-green-600 text-sm font-semibold mt-0.5">
                    {offer.savings}
                  </p>
                </div>
                <button className="bg-[#2B5BA8] hover:bg-[#E8732A] transition text-white px-8 py-3 rounded-xl font-semibold shadow-sm w-full sm:w-auto cursor-pointer">
                  Select Plan →
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Trust bar */}
        <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-600 border border-[#DDE9F7]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-[#2B5BA8]" />
            <span>100% Free — No Commitment</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-gray-200" />
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-[#2B5BA8]" />
            <span>Licensed agents available</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-gray-200" />
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-[#2B5BA8]" />
            <span>Trusted by 50,000+ drivers</span>
          </div>
        </div>

        {/* Start Over */}
        <div className="text-center pb-4">
          <button
            onClick={() => router.push("/")}
            className="text-sm text-[#2B5BA8] hover:underline cursor-pointer"
          >
            ← Start Over
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
}

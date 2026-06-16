"use client";
import { useState } from "react";

type CarValueSliderProps = {
  onCtaClick: () => void;
};

const VALUE_TIERS = [
  { max: 10000, label: "Economy Vehicle", color: "text-green-600" },
  { max: 30000, label: "Mid-Range Vehicle", color: "text-blue-600" },
  { max: 60000, label: "Premium Vehicle", color: "text-purple-600" },
  { max: 100000, label: "Luxury / High-Value Vehicle", color: "text-red-600" },
];

export default function CarValueSlider({ onCtaClick }: CarValueSliderProps) {
  const [value, setValue] = useState(25000);
  const [checking, setChecking] = useState(false);

  const percent = ((value - 5000) / (100000 - 5000)) * 100;

  const tier =
    VALUE_TIERS.find((tier) => value <= tier.max) || VALUE_TIERS[3];

  const handleClick = () => {
    setChecking(true);

    setTimeout(() => {
      setChecking(false);
      onCtaClick();
    }, 900);
  };

  return (
    <section className="relative w-full flex justify-center py-14 bg-white px-8">
      <div className="max-w-2xl mx-auto text-center space-y-6">

        <h2 className="text-2xl md:text-3xl font-black text-slate-900">
          What’s Your Car Worth?
        </h2>

        <p className="text-slate-500 text-base">
          Vehicle value plays a big role in your insurance rate.
        </p>

        {/* Display */}
        <div className="text-5xl font-black text-[var(--color-coral)]">

          ${value.toLocaleString()}
        </div>

        {/* Slider */}
        <div className="relative px-2">

          <input
            type="range"
            min={5000}
            max={100000}
            step={1000}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className="w-full h-3 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #FF5C3A ${percent}%, #e2e8f0 ${percent}%)`,
            }}
          />

          <div className="flex justify-between text-xs text-slate-400 mt-2">
            <span>$5k</span>
            <span>$100k+</span>
          </div>
        </div>

        {/* Tier Label */}
        <div className={`text-sm font-semibold uppercase tracking-wide ${tier.color}`}>
          {tier.label}
        </div>

        {/* Dynamic Message */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl px-6 py-4 text-left">
          <p className="text-base font-semibold mb-1">
            Based on a ${value.toLocaleString()} vehicle:
          </p>
          <p className="text-slate-600 text-base">
            Insurance rates can vary significantly depending on your ZIP code.
            Let’s check what drivers in your area typically pay.
          </p>
        </div>

        {/* CTA */}
        <button
          onClick={handleClick}
          className="w-full bg-[var(--color-navy-900)] hover:bg-[var(--color-coral)] text-white font-black py-4 rounded-lg text-lg transition shadow-md"
        >
          {checking ? "Checking Local Rates..." : "Check My Local Rate →"}
        </button>

        <p className="text-xs text-slate-400">
          Free • No obligation • No spam calls
        </p>
      </div>

      <style>{`
        input[type='range']::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #FF5C3A;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #FF5C3A;
        }
        input[type='range']::-moz-range-thumb {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #FF5C3A;
          cursor: pointer;
          border: 3px solid white;
          box-shadow: 0 0 0 2px #FF5C3A;
        }
      `}</style>
    </section>
  );
}
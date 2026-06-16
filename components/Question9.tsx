"use client";

import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import BackButton from "./BackButton";

export default function Question9() {
  const router = useRouter();
  const { formData, updateForm } = useForm();

  const options = ["Yes", "No"];

  const handleContinue = () => {
    if (formData.currentlyInsured === "Yes") {
      if (formData.currentInsurance && formData.continuousCoverage) {
        router.push("/quote/10");
      }
    } else if (formData.currentlyInsured === "No") {
      router.push("/quote/10");
    }
  };

  const isDisabled =
    formData.currentlyInsured === "Yes"
      ? !formData.currentInsurance || !formData.continuousCoverage
      : !formData.currentlyInsured;

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navbar />

      <div className="flex-1 relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-bottom bg-repeat-x"
          style={{
            backgroundImage: "url('/questions.png')",
            backgroundSize: "100%",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-20 pb-4 sm:pb-24 pt-24 sm:pt-32">
          <div className="flex flex-col items-center text-center space-y-10">

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Insurance Details
            </h2>

            <h3 className="text-xl font-semibold text-gray-500">
              Are you currently insured?
            </h3>

            {/* Yes / No */}
            <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    updateForm({
                      currentlyInsured: option,
                      ...(option === "No" && {
                        currentInsurance: undefined,
                        continuousCoverage: undefined,
                      }),
                    });
                  }}
                  className={`w-full py-6 rounded-xl border transition shadow-sm text-lg font-semibold
                    ${
                      formData.currentlyInsured === option
                        ? "bg-[#EBF2FB] border-[#2B5BA8] text-black"
                        : "bg-white border-gray-200 hover:border-[#378ADD] hover:bg-[#EBF2FB] text-black"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* CONDITIONAL DROPDOWNS */}
            {formData.currentlyInsured === "Yes" && (
              <div className="w-full max-w-2xl space-y-6 mt-6 text-left">

                {/* Current Auto Insurance */}
                <div>
                  <label className="block text-lg font-semibold mb-2 text-black">
                    Current Auto Insurance
                  </label>
                  <select
                    value={formData.currentInsurance || ""}
                    onChange={(e) =>
                      updateForm({ currentInsurance: e.target.value })
                    }
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-4 
                               text-gray-700 focus:outline-none focus:border-[#2B5BA8]"
                  >
                    <option value="">Select Insurance</option>
                    <option value="Geico">Geico</option>
                    <option value="Progressive">Progressive</option>
                    <option value="State Farm">State Farm</option>
                    <option value="Allstate">Allstate</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Continuous Coverage */}
                <div>
                  <label className="block text-lg font-semibold mb-2 text-black">
                    Continuous Coverage
                  </label>
                  <select
                    value={formData.continuousCoverage || ""}
                    onChange={(e) =>
                      updateForm({ continuousCoverage: e.target.value })
                    }
                    className="w-full bg-white border border-gray-300 rounded-xl px-4 py-4 
                               text-gray-700 focus:outline-none focus:border-[#2B5BA8]"
                  >
                    <option value="">Select Duration</option>
                    <option value="Less than 6 months">Less than 6 months</option>
                    <option value="6-12 months">6-12 months</option>
                    <option value="1-3 years">1-3 years</option>
                    <option value="3+ years">3+ years</option>
                  </select>
                </div>
              </div>
            )}

            {/* Continue */}
            <button
              onClick={handleContinue}
              disabled={isDisabled}
              className="mt-8 bg-[#2B5BA8] hover:bg-[#E8732A]
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition text-white px-10 py-3 rounded-lg
                         font-semibold shadow-md"
            >
              Continue →
            </button>

            <div className="-mt-4">
              <BackButton />
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

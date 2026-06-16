"use client";

import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import BackButton from "./BackButton";

export default function Question12() {
  const router = useRouter();
  const { formData, updateForm } = useForm();

  const handleContinue = () => {
    if (formData.education && formData.creditScore) {
      router.push("/quote/13");
    }
  };

  const isDisabled = !formData.education || !formData.creditScore;

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
          <div className="flex flex-col items-center text-center space-y-12">

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Education & Credit Score
            </h2>

            {/* Education */}
            <div className="w-full max-w-2xl space-y-4 text-left">
              <label className="block text-lg font-semibold text-black">
                Education Level
              </label>

              <select
                value={formData.education || ""}
                onChange={(e) =>
                  updateForm({ education: e.target.value })
                }
                className="w-full bg-white border border-gray-300 rounded-xl 
                           px-4 py-4 text-gray-700
                           focus:outline-none focus:border-[#2B5BA8]"
              >
                <option value="">Select Education</option>
                <option value="High School">High School</option>
                <option value="Associate Degree">Associate Degree</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="Doctorate">Doctorate</option>
              </select>
            </div>

            {/* Credit Score */}
            <div className="w-full max-w-2xl space-y-4 text-left">
              <label className="block text-lg font-semibold text-black">
                Credit Score
              </label>

              <select
                value={formData.creditScore || ""}
                onChange={(e) =>
                  updateForm({ creditScore: e.target.value })
                }
                className="w-full bg-white border border-gray-300 rounded-xl 
                           px-4 py-4 text-gray-700
                           focus:outline-none focus:border-[#2B5BA8]"
              >
                <option value="">Select Credit Score</option>
                <option value="Excellent (750+)">Excellent (750+)</option>
                <option value="Good (700-749)">Good (700-749)</option>
                <option value="Fair (650-699)">Fair (650-699)</option>
                <option value="Poor (600-649)">Poor (600-649)</option>
                <option value="Very Poor (Below 600)">
                  Very Poor (Below 600)
                </option>
              </select>
            </div>

            {/* Continue Button */}
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

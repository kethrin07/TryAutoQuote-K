"use client";

import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import BackButton from "./BackButton";

export default function Question13() {
  const router = useRouter();
  const { formData, updateForm } = useForm();

  const handleNext = () => {
    if (formData.dob) {
      router.push("/quote/14");
    }
  };

  const isDisabled = !formData.dob;

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
          <div className="flex flex-col items-center text-center space-y-16">

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              What's your date of birth?
            </h2>

            {/* Context */}
            <p className="max-w-2xl text-gray-600 text-base -mt-8">
              Your age helps us calculate accurate auto insurance rates and 
              match you with the best available discounts. This information 
              is secure and will never be shared.
            </p>

            {/* Date Input */}
            <div className="w-full max-w-2xl">
              <input
                type="date"
                value={formData.dob || ""}
                onChange={(e) =>
                  updateForm({ dob: e.target.value })
                }
                className="w-full bg-white border border-gray-300 rounded-xl 
                           px-6 py-5 text-lg text-gray-700
                           focus:outline-none focus:border-[#2B5BA8]"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              disabled={isDisabled}
              className="mt-4 bg-[#2B5BA8] hover:bg-[#E8732A]
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition text-white px-14 py-4 rounded-lg
                         text-lg font-semibold shadow-md"
            >
              Next →
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

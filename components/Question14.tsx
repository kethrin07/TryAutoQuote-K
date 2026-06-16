"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import BackButton from "./BackButton";

export default function Question14() {
  const router = useRouter();
  const { formData, updateForm } = useForm();

  const handleContinue = () => {
    if (formData.firstName && formData.lastName) {
      router.push("/quote/15");
    }
  };

  const isDisabled = !formData.firstName || !formData.lastName;

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
            <h2 className="text-3xl md:text-4xl font-bold text-black">
              What is your name?
            </h2>

            {/* Context */}
            <p className="max-w-2xl text-gray-600 text-base -mt-6">
              We use your name to personalize your quote and securely match 
              you with licensed insurance providers. Your information is 
              encrypted and never sold.
            </p>

            {/* First Name */}
            <div className="w-full max-w-2xl text-left space-y-4">
              <label className="block text-lg font-semibold text-black">
                First Name
              </label>

              <input
                type="text"
                value={formData.firstName || ""}
                onChange={(e) =>
                  updateForm({ firstName: e.target.value })
                }
                className="w-full bg-white border border-gray-300 rounded-xl 
                           px-4 py-4 text-lg text-gray-700
                           focus:outline-none focus:border-[#2B5BA8]"
              />
            </div>

            {/* Last Name */}
            <div className="w-full max-w-2xl text-left space-y-4">
              <label className="block text-lg font-semibold text-black">
                Last Name
              </label>

              <input
                type="text"
                value={formData.lastName || ""}
                onChange={(e) =>
                  updateForm({ lastName: e.target.value })
                }
                className="w-full bg-white border border-gray-300 rounded-xl 
                           px-4 py-4 text-lg text-gray-700
                           focus:outline-none focus:border-[#2B5BA8]"
              />
            </div>

            {/* Continue Button */}
            <button
              onClick={handleContinue}
              disabled={isDisabled}
              className="mt-6 bg-[#2B5BA8] hover:bg-[#E8732A]
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition text-white px-14 py-4 rounded-lg
                         text-lg font-semibold shadow-md"
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

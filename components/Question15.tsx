"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import BackButton from "./BackButton";

export default function Question15() {
  const router = useRouter();
  const { formData, updateForm } = useForm();

  const handleSubmit = async () => {
    try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      console.log("successfully inserted in db", formData, "form submitted successfully");
      router.push("/quote/16");
    }
  } catch (error) {
    console.error("Submission error:", error);
  }
  };

  const isDisabled =
    !formData.street || !formData.email || !formData.phone;

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
              You are eligible for big savings
            </h2>

            <p className="text-lg text-gray-600">
              Finish the form to reveal your saving opportunities!
            </p>

            <p className="text-base text-gray-600 max-w-2xl -mt-6">
              We securely match your information with licensed auto insurance 
              providers in your area. Your data is encrypted and never sold.
            </p>

            {/* Form */}
            <div className="w-full max-w-2xl space-y-8 text-left">

              {/* Street Address */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-black">
                  Street Address
                </label>

                <input
                  type="text"
                  value={formData.street || ""}
                  onChange={(e) =>
                    updateForm({ street: e.target.value })
                  }
                  className="w-full bg-white border border-gray-300 rounded-xl 
                             px-4 py-4 text-lg text-gray-700
                             focus:outline-none focus:border-[#2B5BA8]"
                />
              </div>

              {/* Email */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-black">
                  Email Address
                </label>

                <input
                  type="email"
                  value={formData.email || ""}
                  onChange={(e) =>
                    updateForm({ email: e.target.value })
                  }
                  className="w-full bg-white border border-gray-300 rounded-xl 
                             px-4 py-4 text-lg text-gray-700
                             focus:outline-none focus:border-[#2B5BA8]"
                />
              </div>

              {/* Phone */}
              <div className="space-y-4">
                <label className="block text-lg font-semibold text-black">
                  Phone Number
                </label>

                <input
                  type="tel"
                  value={formData.phone || ""}
                  onChange={(e) =>
                    updateForm({ phone: e.target.value })
                  }
                  placeholder="(___) ___ ____"
                  className="w-full bg-white border border-gray-300 rounded-xl 
                             px-4 py-4 text-lg text-gray-700
                             focus:outline-none focus:border-[#2B5BA8]"
                />
              </div>

            </div>

            {/* Consent */}
            <p className="text-sm text-gray-600 max-w-2xl text-center">
              By clicking ‘View Rates’, I agree to be contacted by TryAutoQuote, its affiliates, licensed insurance agents, and marketing partners via phone, SMS, and email, including automated technology, regarding my insurance quote. Consent is not required to purchase. I also agree to the Terms of Service and Privacy Policy
            </p>

            {/* Button */}
            <button
              onClick={handleSubmit}
              disabled={isDisabled}
              className="mt-6 bg-[#2B5BA8] hover:bg-[#E8732A]
                         disabled:opacity-40 disabled:cursor-not-allowed
                         transition text-white px-14 py-4 rounded-lg
                         text-lg font-semibold shadow-md"
            >
              View Rates →
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

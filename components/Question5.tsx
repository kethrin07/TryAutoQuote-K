"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import BackButton from "./BackButton";

export default function Question5() {
  const router = useRouter();
  const { formData, updateForm } = useForm();

  const options = ["Under 5000", "5001-10000", "10001-15000","15000 or above"];

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navbar />

      {/* MAIN CONTENT WRAPPER */}
      <div className="flex-1 relative overflow-hidden">
        
        {/* Background Image */}
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
              Anual Mileage
            </h2>

            {/* 3 Option Layout */}
            <div className="w-full max-w-2xl space-y-6">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    updateForm(prev => {
                      const updatedVehicles = [...prev.vehicles];
                      updatedVehicles[prev.currentVehicleIndex] = {
                        ...updatedVehicles[prev.currentVehicleIndex],
                        mileage: option,
                      };
                      return { ...prev, vehicles: updatedVehicles };
                    });
                    router.push("/quote/6");
                  }}

                  className={`w-full py-6 rounded-xl border transition shadow-sm text-lg text-black font-semibold
                    ${
                      formData.vehicles[formData.currentVehicleIndex]?.mileage === option
                        ? "bg-[#EBF2FB] border-[#2B5BA8]"
                        : "bg-white border-gray-200 hover:border-[#378ADD] hover:bg-[#EBF2FB]"
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>

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

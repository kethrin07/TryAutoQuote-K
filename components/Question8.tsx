"use client";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import BackButton from "./BackButton";

export default function Question8() {
  const router = useRouter();
  const { updateForm } = useForm();

  const handleSelect = (option: string) => {
    if (option === "Yes") {
      const newVehicle = {
        vehicleYear: undefined,
        vehicleMake: undefined,
        vehicleModel: undefined,
      };
      updateForm(prev => ({
        ...prev,
        vehicles: [...prev.vehicles, newVehicle],
        currentVehicleIndex: prev.vehicles.length,
      }));
      router.push("/quote/1");
    } else {
      router.push("/quote/9");
    }
  };


  const options = ["Yes", "No"];

  return (
    <div className="min-h-screen flex flex-col bg-white relative">
      <Navbar />

      <div className="flex-1 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-bottom bg-repeat-x"
          style={{
            backgroundImage: "url('/questions.png')",
            backgroundSize: "100%",
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-20 pb-4 sm:pb-24 pt-24 sm:pt-32">
          <div className="flex flex-col items-center text-center space-y-10">

            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Add Another Vehicle
            </h2>

            <h3 className="text-xl font-bold text-gray-400">
              Save Additional 20%
            </h3>

            <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-6">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="w-full py-6 rounded-xl border transition shadow-sm text-lg text-black font-semibold bg-white border-gray-200 hover:border-[#378ADD] hover:bg-[#EBF2FB]"
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

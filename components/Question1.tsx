"use client";

import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "@/context/FormContext";
import BackButton from "./BackButton";

export default function Question1() {
  const router = useRouter();
  const { formData, updateForm } = useForm();

  const currentVehicle =
    formData.vehicles?.[formData.currentVehicleIndex ?? 0];

  const setVehicleMake = (make: string) => {
    updateForm((prev) => {
      const updatedVehicles = [...prev.vehicles];

      updatedVehicles[prev.currentVehicleIndex] = {
        ...updatedVehicles[prev.currentVehicleIndex],
        vehicleMake: make,
      };

      return { ...prev, vehicles: updatedVehicles };
    });
    router.push("/quote/2");
  };

  const carMakes = [
    { name: "Buick", logo: "/car-logos/buick@2x.png" },
    { name: "Cadillac", logo: "/car-logos/cadillac@2x.png" },
    { name: "Chevrolet", logo: "/car-logos/chevrolet@2x.png" },
    { name: "Chrysler", logo: "/car-logos/chrysler@2x.png" },
    { name: "Dodge", logo: "/car-logos/dodge@2x.png" },
    { name: "Ford", logo: "/car-logos/ford@2x.png" },
    { name: "GMC", logo: "/car-logos/gmc@2x.png" },
    { name: "Honda", logo: "/car-logos/honda@2x.png" },
    { name: "Hyundai", logo: "/car-logos/hyundai@2x.png" },
    { name: "Jeep", logo: "/car-logos/jeep@2x.png" },
    { name: "Kia", logo: "/car-logos/kia@2x.png" },
    { name: "Mazda", logo: "/car-logos/mazda@2x.png" },
    { name: "Nissan", logo: "/car-logos/nissan@2x.png" },
    { name: "Pontiac", logo: "/car-logos/pontiac@2x.png" },
    { name: "Toyota", logo: "/car-logos/toyota@2x.png" },
    { name: "Volkswagen", logo: "/car-logos/volkswagen@2x.png" },
  ];

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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-20 pb-4 sm:pb-24 pt-24 sm:pt-32">
          <div className="flex flex-col items-center text-center space-y-10">

            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Vehicle Make
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
              {carMakes.map((make) => (
                <button
                  key={make.name}
                  onClick={() => setVehicleMake(make.name)}
                  className={`flex flex-col items-center justify-center 
                    rounded-xl p-6 border transition shadow-sm
                    ${
                      currentVehicle?.vehicleMake === make.name
                        ? "bg-[#EBF2FB] border-[#2B5BA8]"
                        : "bg-white border-gray-200 hover:border-[#2B5BA8] hover:bg-[#EBF2FB]"
                    }`}
                >
                  <div className="relative w-16 h-16 mb-4">
                    <Image
                      src={make.logo}
                      alt={make.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <span className="font-semibold text-gray-800">
                    {make.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Dropdown for brands not shown in the grid above */}
            <div className="w-full max-w-md">
              <select
                value={currentVehicle?.vehicleMake ?? ""}
                onChange={(e) => { if (e.target.value) setVehicleMake(e.target.value); }}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3
                  text-gray-700 focus:outline-none focus:border-[#2B5BA8]"
              >
                <option value="">Other brands</option>
                <option value="Acura">Acura</option>
                <option value="Audi">Audi</option>
                <option value="BMW">BMW</option>
                <option value="Genesis">Genesis</option>
                <option value="Infiniti">Infiniti</option>
                <option value="Land Rover">Land Rover</option>
                <option value="Lexus">Lexus</option>
                <option value="Lincoln">Lincoln</option>
                <option value="Mercedes-Benz">Mercedes-Benz</option>
                <option value="Mitsubishi">Mitsubishi</option>
                <option value="Ram">Ram</option>
                <option value="Subaru">Subaru</option>
                <option value="Tesla">Tesla</option>
                <option value="Volvo">Volvo</option>
              </select>
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

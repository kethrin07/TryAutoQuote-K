"use client";

import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import { useRouter } from "next/navigation";
import { useForm } from "@/context/FormContext";
import BackButton from "./BackButton";

export default function Question3() {
  const router = useRouter();
  const { formData, updateForm } = useForm();

  const currentVehicle =
    formData.vehicles?.[formData.currentVehicleIndex ?? 0];

  const [models, setModels] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [customModel, setCustomModel] = useState("");

  useEffect(() => {
    const make = currentVehicle?.vehicleMake;
    const year = currentVehicle?.vehicleYear;

    if (!make) {
      router.push("/quote/1");
      return;
    }

    setLoading(true);
    setError(false);

    const url = year
      ? `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformakeyear/make/${encodeURIComponent(make)}/modelyear/${year}?format=json`
      : `https://vpic.nhtsa.dot.gov/api/vehicles/getmodelsformake/${encodeURIComponent(make)}?format=json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const names: string[] = [...new Set<string>(data.Results.map((r: { Model_Name: string }) => r.Model_Name))].sort();
        setModels(names);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [currentVehicle?.vehicleMake, currentVehicle?.vehicleYear]);

  const setVehicleModel = (model: string) => {
    updateForm((prev) => {
      const updatedVehicles = [...prev.vehicles];

      updatedVehicles[prev.currentVehicleIndex] = {
        ...updatedVehicles[prev.currentVehicleIndex],
        vehicleModel: model,
      };

      return { ...prev, vehicles: updatedVehicles };
    });
    router.push("/quote/4");
  };

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
              Vehicle Model
            </h2>

            {loading && (
              <p className="text-gray-500">Loading models...</p>
            )}

            {!loading && (error || models.length === 0) && (
              <p className="text-gray-500">
                {error ? "Couldn't load models automatically." : "No models found for this make and year."}{" "}
                Enter your model below.
              </p>
            )}

            {!loading && !error && models.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
                {models.map((model) => (
                  <button
                    key={model}
                    onClick={() => setVehicleModel(model)}
                    className={`flex items-center justify-center
                      rounded-xl p-6 border transition shadow-sm
                      ${
                        currentVehicle?.vehicleModel === model
                          ? "bg-[#EBF2FB] border-[#2B5BA8]"
                          : "bg-white border-gray-200 hover:border-[#378ADD] hover:bg-[#EBF2FB]"
                      }`}
                  >
                    <span className="text-lg font-semibold text-gray-800">
                      {model}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Custom model input */}
            <div className="w-full max-w-md">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (customModel.trim()) setVehicleModel(customModel.trim());
                }}
                className="flex gap-2"
              >
                <input
                  type="text"
                  placeholder="Other model..."
                  value={customModel}
                  onChange={(e) => setCustomModel(e.target.value)}
                  className="flex-1 bg-white border border-gray-300 rounded-lg px-4 py-3
                    text-gray-700 focus:outline-none focus:border-[#2B5BA8]"
                />
                <button
                  type="submit"
                  disabled={!customModel.trim()}
                  className="px-5 py-3 rounded-lg bg-[#2B5BA8] text-white font-semibold
                    hover:bg-[#E8732A] disabled:opacity-40 transition"
                >
                  Continue
                </button>
              </form>
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

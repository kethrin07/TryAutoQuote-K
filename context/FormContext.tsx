"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Vehicle = {
  vehicleYear?: number;
  vehicleMake?: string;
  vehicleModel?: string;
  primaryUse?: string;
  mileage?: string;
  coverage?: string;
  ownership?: string;
};

export type FormData = {
  leadId?: string;
  zipCode?: string;
    //   vehicleMake?: string;
    //   vehicleYear?: number;
    //   vehicleModel?: string;
    //   primaryUse?: string;
    //   mileage?: string;
    //   coverage?: string;
    //   ownership?: string;
    vehicles: Vehicle[];
    currentVehicleIndex: number;
    currentlyInsured?: string;
    currentInsurance?: string;
    continuousCoverage?: string;
    activeLicense?: string;
    ticketsLast3Years?: string;
    sr22Filed?: string;
    homeowner?: string;
    married?: string;
    gender?: string;
    military?: string;
    education?: string;
    creditScore?: string;
    dob?: string;
    firstName?: string;
    lastName?: string;
    street?: string;
    email?: string;
    phone?: string;
};

type FormContextType = {
  formData: FormData;
  updateForm: (update: Partial<FormData> | ((prev: FormData) => FormData)) => void;
};

const defaultFormData: FormData = {
  zipCode: "",
  vehicles: [{}],
  currentVehicleIndex: 0,
};

const FormContext = createContext<FormContextType | null>(null);

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormData>(defaultFormData);

  const updateForm = (update: Partial<FormData> | ((prev: FormData) => FormData)) => {
    setFormData((prev) => {
      if (typeof update === "function") return update(prev);
      return { ...prev, ...update };
    });
  };

  return (
    <FormContext.Provider value={{ formData, updateForm }}>
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useForm must be used within FormProvider");
  return ctx;
}

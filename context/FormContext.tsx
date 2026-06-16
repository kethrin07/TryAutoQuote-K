"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type Vehicle = {
  vehicleMake?: string;
  vehicleYear?: number;
  vehicleModel?: string;
};

export type FormData = {
  zipCode: string;
  vehicles: Vehicle[];
  currentVehicleIndex: number;
  street?: string;
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  dob?: string;
  gender?: string;
  married?: string;
  homeowner?: string;
  military?: string;
  education?: string;
  creditScore?: string;
  currentInsurance?: string;
  continuousCoverage?: string;
  activeLicense?: string;
  sr22Filed?: string;
  ticketsLast3Years?: string;
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

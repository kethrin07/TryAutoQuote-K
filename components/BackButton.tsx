"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button data-no-highlight="true" 
      onClick={() => router.back()}
      className="text-base text-gray-400 hover:text-[#2B5BA8] underline underline-offset-2 transition cursor-pointer"
    >
      ← Back
    </button>
  );
}
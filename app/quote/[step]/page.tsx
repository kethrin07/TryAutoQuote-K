import { notFound } from "next/navigation";
import Question1Map from "@/components/Question1_map";
import Question1 from "@/components/Question1";
import Question2 from "@/components/Question2";
import Question3 from "@/components/Question3";
import Question4 from "@/components/Question4";
import Question5 from "@/components/Question5";
import Question6 from "@/components/Question6";
import Question7 from "@/components/Question7";
import Question8 from "@/components/Question8";
import Question9 from "@/components/Question9";
import Question10 from "@/components/Question10";
import Question11 from "@/components/Question11";
import Question12 from "@/components/Question12";
import Question13 from "@/components/Question13";
import Question14 from "@/components/Question14";
import Question15 from "@/components/Question15";

const STEPS: Record<string, React.ComponentType> = {
  "1_map": Question1Map,
  "1": Question1,
  "2": Question2,
  "3": Question3,
  "4": Question4,
  "5": Question5,
  "6": Question6,
  "7": Question7,
  "8": Question8,
  "9": Question9,
  "10": Question10,
  "11": Question11,
  "12": Question12,
  "13": Question13,
  "14": Question14,
  "15": Question15,
};

export default async function QuotePage({
  params,
}: {
  params: Promise<{ step: string }>;
}) {
  const { step } = await params;
  const Component = STEPS[step];
  if (!Component) return notFound();
  return <Component />;
}

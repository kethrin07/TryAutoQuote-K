"use client";

const STEP_ORDER: Record<string, number> = {
  "1_map": 1,
  "1": 2,  "2": 3,  "3": 4,  "4": 5,  "5": 6,
  "6": 7,  "7": 8,  "8": 9,  "9": 10, "10": 11,
  "11": 12, "12": 13, "13": 14, "14": 15, "15": 16,
};

const TOTAL = 16;
const MILESTONES = [25, 50, 75, 100];

export default function QuizProgress({ step }: { step: string }) {
  const current = STEP_ORDER[step] ?? 1;
  const percent = Math.round((current / TOTAL) * 100);

  return (
    <div className="fixed top-[68px] left-0 w-full z-40 bg-white border-b border-[#DDE9F7] px-8 py-4">
      <div className="max-w-3xl mx-auto flex items-center gap-4">

        {/* Track */}
        <div className="relative flex-1 h-2.5 bg-[#DDE9F7] rounded-full">

          {/* Fill */}
          <div
            className="absolute top-0 left-0 h-full rounded-full overflow-hidden"
            style={{
              width: `${percent}%`,
              background: "linear-gradient(90deg, #2B5BA8 0%, #042C53 100%)",
              transition: "width 600ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {/* Shimmer sweep */}
            <span
              className="animate-shimmer absolute inset-y-0 -inset-x-1/2 block"
              style={{
                background:
                  "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)",
              }}
            />
          </div>

          {/* Milestone dots */}
          {MILESTONES.map((m) => {
            const reached = percent >= m;
            return (
              <div
                key={m}
                className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  left: `${m}%`,
                  width: reached ? "14px" : "10px",
                  height: reached ? "14px" : "10px",
                  backgroundColor: reached ? "#2B5BA8" : "#FFFFFF",
                  border: reached ? "2px solid #FFFFFF" : "2px solid #DDE9F7",
                  boxShadow: reached
                    ? "0 0 10px rgba(43, 91, 168, 0.6)"
                    : "none",
                  transition:
                    "width 300ms ease-out, height 300ms ease-out, background-color 300ms ease-out, box-shadow 300ms ease-out, border-color 300ms ease-out",
                }}
              />
            );
          })}

        </div>

        {/* Percentage label */}
        <span className="text-sm font-semibold whitespace-nowrap shrink-0 tabular-nums text-[#042C53]">
          {percent}%
        </span>

      </div>
    </div>
  );
}

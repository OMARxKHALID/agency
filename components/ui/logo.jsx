import { cn } from "@/lib/utils";
import { LOGO_TEXT, LOGO_VARIANTS } from "@/constants/logo";

export function Logo({ variant = "normal", className }) {
  if (variant === "circular") {
    return (
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800">
        <div className="relative w-6 h-6 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white">
            {LOGO_TEXT}
          </div>
          <div className="absolute inset-0 transform scale-150 rotate-45 bg-white opacity-20" />
        </div>
      </div>
    );
  }

  const bgColor = LOGO_VARIANTS[variant] || "bg-black";

  return (
    <div className={cn("w-8 h-8 relative overflow-hidden", bgColor, className)}>
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute w-full h-0.5 bg-white transform rotate-45"
            style={{
              transform: `rotate(45deg) translateY(${i - 1}px) translateX(4px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

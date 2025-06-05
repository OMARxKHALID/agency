import { cn } from "@/lib/utils";

export function Logo({ variant = "normal", className }) {
  if (variant === "circular") {
    return (
      <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center">
        <div className="w-6 h-6 relative overflow-hidden">
          <div className="absolute inset-0 text-white font-bold text-sm flex items-center justify-center">
            ID
          </div>
          <div className="absolute inset-0 bg-white transform rotate-45 scale-150 opacity-20" />
        </div>
      </div>
    );
  }

  const bgColor = variant === "dark" ? "bg-slate-800" : "bg-black";

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

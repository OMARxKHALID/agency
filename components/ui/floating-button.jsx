import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const variantStyles = {
  pink: "bg-pink-100 hover:bg-pink-200 text-pink-700 border-pink-200",
  green:
    "bg-emerald-100 hover:bg-emerald-200 text-emerald-700 border-emerald-200",
  blue: "bg-blue-100 hover:bg-blue-200 text-blue-700 border-blue-200",
};

export function FloatingButton({
  children,
  variant = "pink",
  className,
  transform,
}) {
  return (
    <Button
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium shadow-lg border transition-all duration-300 hover:shadow-xl hover:scale-105",
        variantStyles[variant],
        className
      )}
      style={{ transform }}
    >
      {children}
      <ArrowRight className="ml-1 h-3 w-3" />
    </Button>
  );
}

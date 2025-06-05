import { cn } from "@/lib/utils";

export function MockupCard({
  title,
  variant = "browser",
  className,
  transform,
  children,
}) {
  if (variant === "browser") {
    return (
      <div
        className={cn(
          "bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100",
          className
        )}
        style={{ transform }}
      >
        <div className="bg-gray-50 h-8 flex items-center px-4 border-b border-gray-100 justify-between">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 bg-red-400 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-400 rounded-full" />
          </div>
          <span className="text-xs text-gray-500 font-medium">{title}</span>
        </div>
        <div className="p-6 bg-white">
          <div className="text-sm font-bold text-gray-900 mb-4">{title}</div>
          <div className="w-full h-16 bg-gray-100 rounded-lg mb-4" />
          <div className="space-y-3">
            <div className="w-4/5 h-2 bg-gray-100 rounded-full" />
            <div className="w-3/5 h-2 bg-gray-100 rounded-full" />
            <div className="w-4/5 h-2 bg-gray-100 rounded-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-2xl overflow-hidden p-6 text-white",
        className
      )}
      style={{ transform }}
    >
      <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg" />
      <div className="mt-12">
        <h3 className="text-3xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-6 opacity-90">The Essence of Photography</p>
        <div className="space-y-2">
          <div className="w-full h-1 bg-blue-300/60 rounded-full" />
          <div className="w-4/5 h-1 bg-blue-300/60 rounded-full" />
          <div className="w-3/5 h-1 bg-blue-300/60 rounded-full" />
        </div>
      </div>
      {children}
    </div>
  );
}

import { cn } from "@/lib/utils";

type ScoopProps = {
  gradient: string;
  emoji: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

const sizeMap = {
  sm: "h-20 w-20 text-3xl",
  md: "h-32 w-32 text-5xl",
  lg: "h-48 w-48 text-7xl",
  xl: "h-72 w-72 text-9xl",
} as const;

export function Scoop({ gradient, emoji, size = "md", className }: ScoopProps) {
  return (
    <div
      className={cn(
        "scoop-blob drip relative flex items-center justify-center shadow-xl shadow-black/10",
        sizeMap[size],
        className,
      )}
      style={{ background: gradient }}
      aria-hidden
    >
      <span className="select-none">{emoji}</span>
      <span
        className="absolute -top-2 left-6 h-3 w-8 rounded-full bg-white/60 blur-[2px]"
        style={{ transform: "rotate(-20deg)" }}
      />
    </div>
  );
}

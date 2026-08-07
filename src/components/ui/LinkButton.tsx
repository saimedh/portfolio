import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-soft shadow-glow hover:shadow-[0_0_50px_rgba(110,86,207,0.4)]",
  secondary:
    "bg-bg-raised text-ink border border-bg-border hover:border-accent/50 hover:bg-bg-surface",
  ghost: "text-ink-muted hover:text-ink hover:bg-bg-raised",
};

interface LinkButtonProps {
  href: string;
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

export function LinkButton({
  href,
  variant = "primary",
  icon,
  children,
  className,
  external = true,
}: LinkButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-body text-sm font-medium transition-all duration-200 active:scale-[0.98]",
        variants[variant],
        className
      )}
    >
      {children}
      {icon}
    </a>
  );
}

import { type ReactNode } from "react";
import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dim shadow-sm hover:shadow-md",
  secondary:
    "bg-bg-surface text-ink border border-bg-border hover:border-accent/40 hover:bg-bg-raised",
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

import { type ReactNode, forwardRef } from "react";
import { cn } from "../../lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  icon?: ReactNode;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-dim shadow-sm hover:shadow-md",
  secondary:
    "bg-bg-surface text-ink border border-bg-border hover:border-accent/40 hover:bg-bg-raised",
  ghost: "text-ink-muted hover:text-ink hover:bg-bg-raised",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", icon, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 font-body text-sm font-medium transition-all duration-200 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50",
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
        {icon}
      </button>
    );
  }
);
Button.displayName = "Button";

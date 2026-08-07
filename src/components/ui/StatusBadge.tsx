import { cn } from "../../lib/utils";

const statusStyles: Record<string, string> = {
  LIVE: "text-signal border-signal/40 bg-signal/10",
  DEPLOYED: "text-accent-soft border-accent/40 bg-accent/10",
  ARCHIVED: "text-ink-muted border-bg-border bg-bg-raised",
};

export function StatusBadge({ status }: { status: "LIVE" | "DEPLOYED" | "ARCHIVED" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest",
        statusStyles[status]
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full",
          status === "LIVE" && "bg-signal animate-pulse-slow",
          status === "DEPLOYED" && "bg-accent-soft",
          status === "ARCHIVED" && "bg-ink-faint"
        )}
      />
      {status}
    </span>
  );
}

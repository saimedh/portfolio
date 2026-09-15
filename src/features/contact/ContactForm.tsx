import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "../../components/ui/Button";

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");

  function validate() {
    const nextErrors: Record<string, string> = {};
    if (!fields.name.trim()) {
      nextErrors.name = "Enter your name.";
    }
    if (!fields.email.trim()) {
      nextErrors.email = "Enter your email.";
    } else if (!EMAIL_REGEX.test(fields.email.trim())) {
      nextErrors.email = "Enter a valid email.";
    }
    if (!fields.message.trim()) {
      nextErrors.message = "Enter a message.";
    } else if (fields.message.trim().length < 10) {
      nextErrors.message = "Add a little more detail (10+ characters).";
    }
    return nextErrors;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isSubmitting) return;

    setStatus("idle");
    setServerMessage("");
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
        }),
      });

      const data = await res.json().catch(() => null);

      if (res.ok && data?.success) {
        setStatus("success");
        setServerMessage("Message sent successfully.");
        setFields({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        setStatus("error");
        setServerMessage("Could not send message. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Could not send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      {/* Feedback Banner */}
      {status === "success" && (
        <div
          role="alert"
          className="flex items-center gap-2.5 rounded-lg border border-signal/30 bg-signal/10 px-4 py-3 text-sm font-medium text-signal"
        >
          <CheckCircle2 size={18} className="shrink-0 text-signal" aria-hidden="true" />
          <span>{serverMessage}</span>
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="flex items-center gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600"
        >
          <AlertCircle size={18} className="shrink-0 text-red-500" aria-hidden="true" />
          <span>{serverMessage}</span>
        </div>
      )}

      {/* Name field */}
      <div>
        <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink-muted">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          disabled={isSubmitting}
          value={fields.name}
          onChange={(e) => {
            setFields((f) => ({ ...f, name: e.target.value }));
            if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
          }}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-lg border border-bg-border bg-bg-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
          placeholder="Your name"
        />
        {errors.name && <p id="name-error" className="mt-1 text-xs text-red-500 font-medium">{errors.name}</p>}
      </div>

      {/* Email field */}
      <div>
        <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          disabled={isSubmitting}
          value={fields.email}
          onChange={(e) => {
            setFields((f) => ({ ...f, email: e.target.value }));
            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
          }}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-lg border border-bg-border bg-bg-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
          placeholder="you@company.com"
        />
        {errors.email && <p id="email-error" className="mt-1 text-xs text-red-500 font-medium">{errors.email}</p>}
      </div>

      {/* Message field */}
      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          disabled={isSubmitting}
          value={fields.message}
          onChange={(e) => {
            setFields((f) => ({ ...f, message: e.target.value }));
            if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
          }}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-lg border border-bg-border bg-bg-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
          placeholder="Tell me about the role, or ask about a project."
        />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-red-500 font-medium">{errors.message}</p>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        icon={
          isSubmitting ? (
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
          ) : (
            <Send size={16} aria-hidden="true" />
          )
        }
        className="w-full cursor-pointer"
      >
        {isSubmitting ? "Sending message..." : "Send message"}
      </Button>
    </form>
  );
}

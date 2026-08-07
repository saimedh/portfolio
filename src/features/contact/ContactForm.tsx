import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { Button } from "../../components/ui/Button";

const TO_EMAIL = "saimedhp@gmail.com";

export function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const nextErrors: Record<string, string> = {};
    if (!fields.name.trim())                          nextErrors.name    = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(fields.email.trim())) nextErrors.email   = "Enter a valid email.";
    if (fields.message.trim().length < 10)            nextErrors.message = "Add a little more detail (10+ characters).";
    return nextErrors;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Portfolio contact from ${fields.name}`);
    const body    = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`
    );

    window.location.href = `mailto:${TO_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink-muted">
          Name
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          value={fields.name}
          onChange={(e) => setFields((f) => ({ ...f, name: e.target.value }))}
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-lg border border-bg-border bg-bg-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          placeholder="Your name"
        />
        {errors.name && <p id="name-error" className="mt-1 text-xs text-red-400">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink-muted">
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          value={fields.email}
          onChange={(e) => setFields((f) => ({ ...f, email: e.target.value }))}
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className="w-full rounded-lg border border-bg-border bg-bg-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          placeholder="you@company.com"
        />
        {errors.email && <p id="email-error" className="mt-1 text-xs text-red-400">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-wider text-ink-muted">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={fields.message}
          onChange={(e) => setFields((f) => ({ ...f, message: e.target.value }))}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full resize-none rounded-lg border border-bg-border bg-bg-raised px-4 py-3 text-sm text-ink placeholder:text-ink-faint focus:border-accent focus:outline-none"
          placeholder="Tell me about the role, or ask about a project."
        />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>}
      </div>

      <Button type="submit" icon={<Send size={16} aria-hidden="true" />} className="w-full">
        Send message
      </Button>
    </form>
  );
}

import { motion } from "framer-motion";
import { Code2, Link2, Mail, FileText, Phone } from "lucide-react";
import { ContactForm } from "../features/contact/ContactForm";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

const channels = [
  { icon: Mail, label: "Email", value: "saimedhp@gmail.com", href: "mailto:saimedhp@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 9704093430", href: "tel:+919704093430" },
  { icon: Link2, label: "LinkedIn", value: "linkedin.com/in/sai-medh", href: "https://www.linkedin.com/in/sai-medh/" },
  { icon: Code2, label: "GitHub", value: "github.com/saimedh", href: "https://github.com/saimedh/" },
  { icon: FileText, label: "Resume", value: "Download PDF", href: "/resume.pdf" },
];

export default function ContactPage() {
  useDocumentMeta(
    "Contact — Saimedh Porandla",
    "Get in touch about an AI software engineering internship."
  );

  return (
    <div className="container-page py-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <span className="eyebrow">// final_conversion</span>
        <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">
          Start a conversation
        </h1>
        <p className="mt-4 text-lg text-ink-muted">
          Building an AI product or hiring an AI/ML engineering intern? Let&rsquo;s connect.
        </p>
      </motion.div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_380px]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-bg-border bg-white p-6 sm:p-8 shadow-xs"
        >
          <ContactForm />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="h-fit space-y-3"
        >
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") || c.href.endsWith(".pdf") ? "_blank" : undefined}
              rel={c.href.startsWith("http") || c.href.endsWith(".pdf") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 rounded-xl border border-bg-border bg-white p-4 shadow-xs transition-colors hover:border-accent/40"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-bg-raised text-accent">
                <c.icon size={18} aria-hidden="true" />
              </span>
              <span>
                <span className="block font-mono text-[10px] uppercase tracking-wider text-ink-faint">{c.label}</span>
                <span className="block text-sm text-ink">{c.value}</span>
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

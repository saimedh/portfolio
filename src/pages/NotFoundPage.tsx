import { Link } from "react-router-dom";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export default function NotFoundPage() {
  useDocumentMeta("404 — Page not found | Saimedh Porandla");

  return (
    <div className="container-page flex flex-col items-center justify-center py-32 text-center">
      <p className="font-mono text-sm text-accent-soft">error 404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-ink">Route not found</h1>
      <p className="mt-3 text-ink-muted">This path doesn't resolve to anything deployed.</p>
      <Link
        to="/"
        className="mt-8 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white hover:bg-accent-soft"
      >
        Back to home
      </Link>
    </div>
  );
}

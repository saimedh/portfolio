import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "../../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/process", label: "Process" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "glass shadow-xs"
          : "bg-bg/90 backdrop-blur-md border-b border-bg-border/80"
      )}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <NavLink to="/" className="flex items-center gap-2 font-display text-lg font-bold text-ink" aria-label="Home">
          <Terminal size={20} className="text-accent" aria-hidden="true" />
          saimedh<span className="text-accent">.</span>dev
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-md px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors",
                  isActive
                    ? "text-accent font-semibold bg-accent/10"
                    : "text-ink-muted hover:text-ink hover:bg-bg-raised"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="ml-3 rounded-lg bg-accent px-4 py-2 font-body text-sm font-semibold text-white shadow-xs transition-all hover:bg-accent-dim hover:shadow-sm active:scale-[0.98]"
          >
            Invite to Interview
          </NavLink>
        </div>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden glass md:hidden"
          >
            <div className="container-page flex flex-col gap-1 py-4">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "rounded-md px-3 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors",
                      isActive ? "text-accent font-semibold bg-accent/10" : "text-ink-muted hover:text-ink"
                    )
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                className="mt-2 rounded-lg bg-accent px-4 py-2.5 text-center font-body text-sm font-semibold text-white shadow-xs hover:bg-accent-dim"
              >
                Invite to Interview
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

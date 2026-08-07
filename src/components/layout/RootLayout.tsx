import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function RootLayout() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          id="main-content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="flex-1 pt-16"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

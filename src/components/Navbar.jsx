import { Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import logo from "../../raxi-logo.png";
import { navItems, registrationLink } from "../data/siteData";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../hooks/useTheme";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const sectionIds = useMemo(() => navItems.map((item) => item.href.replace("#", "")), []);
  const activeId = useActiveSection(sectionIds);
  const { theme, toggleTheme } = useTheme();

  const navLink = (item) => {
    const isActive = activeId === item.href.replace("#", "");

    return (
      <a
        key={item.href}
        href={item.href}
        onClick={() => setOpen(false)}
        className={`rounded-full px-3 py-2 text-sm transition ${
          isActive ? "bg-white/10 text-white" : "text-zinc-400 hover:bg-white/5 hover:text-white"
        }`}
      >
        {item.label}
      </a>
    );
  };

  const ThemeIcon = theme === "dark" ? Sun : Moon;
  const themeLabel = theme === "dark" ? "Switch to light mode" : "Switch to dark mode";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink-950/72 backdrop-blur-2xl">
      <div className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="flex items-center gap-3" aria-label="Raxi home">
          <img src={logo} alt="Raxi Game logo" className="h-auto w-32 sm:w-40" width="160" height="56" loading="eager" decoding="async" />
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.035] p-1 md:flex">
          {navItems.map(navLink)}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:bg-white/10"
            aria-label={themeLabel}
            title={themeLabel}
          >
            <ThemeIcon size={18} />
          </button>
          <a
            href={registrationLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Register on Raxi"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink-950 transition hover:bg-zinc-200"
          >
            Register
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            className="section-shell pb-5 md:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
          >
            <div className="grid gap-1 rounded-3xl border border-white/10 bg-ink-800/95 p-2 shadow-soft">
              {navItems.map(navLink)}
              <button
                type="button"
                onClick={toggleTheme}
                className="mt-2 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white"
                aria-label={themeLabel}
              >
                <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                <ThemeIcon size={18} />
              </button>
              <a
                href={registrationLink}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                aria-label="Register on Raxi"
                className="mt-2 rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-ink-950"
              >
                Register
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

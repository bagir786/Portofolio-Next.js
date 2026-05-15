"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HFLogo } from "@/components/shared/Icons";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = ["home", "skills", "projects", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= 300) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || isMenuOpen ? "bg-[#0d1117]/95 backdrop-blur-md py-2" : "bg-transparent py-3"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link href="#home" className="flex items-center group">
            <HFLogo className="w-8 h-8 transition-transform group-hover:scale-110" />
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-[#f0f6fc]",
                  activeSection === link.href.substring(1)
                    ? "text-[#f0f6fc]"
                    : "text-gh-muted"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <Link
            href="/cv.pdf"
            target="_blank"
            className="hidden sm:flex items-center px-4 py-1.5 text-sm font-semibold text-white border border-gh-border bg-transparent hover:bg-gh-border/30 rounded-md transition-all active:scale-95 shadow-sm"
          >
            CV
          </Link>

          <button
            className="md:hidden p-2 text-gh-muted hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gh-border bg-gh-bg overflow-hidden"
          >
            <nav className="flex flex-col py-4 px-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors hover:text-white",
                    activeSection === link.href.substring(1)
                      ? "text-white"
                      : "text-gh-muted"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/cv.pdf"
                target="_blank"
                className="flex items-center justify-center w-full py-3 text-white border border-gh-border rounded-md font-semibold bg-gh-border/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Download CV
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

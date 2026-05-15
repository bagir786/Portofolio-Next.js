"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail } from "lucide-react";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden border-t border-gh-border/50">
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#f0f6fc]">
            Get in touch.
          </h2>

          <p className="text-gh-muted mb-12 max-w-xl mx-auto">
            I&apos;m always excited to connect and innovate.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href={`mailto:${PORTFOLIO_DATA.email}`}
              className="h-11 flex items-center justify-center px-8 font-bold text-white bg-gh-success hover:bg-[#2ea043] border border-[#3fb950]/30 rounded-md transition-all w-full sm:w-auto shadow-[0_0_15px_rgba(46,160,67,0.1)] active:scale-95"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email me
            </Link>

            <div className="flex gap-3">
              {PORTFOLIO_DATA.socials.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    className="relative group rounded-md p-[1px] bg-gh-border hover:bg-gradient-to-r hover:from-gh-glow hover:to-gh-accent transition-all duration-300"
                    title={social.name}
                  >
                    <div className="w-11 h-11 flex items-center justify-center rounded-md bg-gh-canvas text-gh-muted group-hover:text-gh-accent transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>


        </motion.div>
      </div>
    </section>
  );
}

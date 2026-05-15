"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Starfield } from "@/components/shared/Starfield";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <Starfield />
      
      {/* Background Glows - Based on d.md and home.png with layering */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Layer 1: Base Deep Purple Glow (Bottom Center) */}
        <div 
          className="absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[1500px] h-[1000px] opacity-30 blur-[150px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #322074 0%, transparent 80%)'
          }}
        />

        {/* Layer 2: Highlight Bright Violet Glow (Bottom Center) */}
        <div 
          className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] opacity-40 blur-[120px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(121, 40, 202, 0.6) 0%, rgba(121, 40, 202, 0) 70%)'
          }}
        />

        {/* Layer 3: Muted Blue Glow (Right Center) */}
        <div 
          className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] opacity-15 blur-[120px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #1D2D5F 0%, transparent 70%)'
          }}
        />

        {/* Layer 4: Accent Blue Glow (Top Right) */}
        <div 
          className="absolute top-[5%] right-[5%] w-[400px] h-[400px] opacity-10 blur-[80px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #58a6ff 0%, transparent 70%)'
          }}
        />

        {/* Bottom fade to black - Increased height for smoother transition */}
        <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-gh-bg via-gh-bg/60 to-transparent z-[1]" />
      </div>


      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] text-white">
              Hello I&apos;m <br /> 
              Muhamad Hafiudin Bagir
            </h1>

            <p className="text-lg md:text-xl text-gh-muted mb-12 max-w-2xl mx-auto leading-relaxed">
              Software Engineer Passionate about building scalable web applications and solving real business problems through technology.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#projects"
                className="h-12 flex items-center justify-center px-10 font-bold text-white bg-gh-success hover:bg-[#2ea043] rounded-md transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Explore Projects
              </Link>
              <Link
                href="#contact"
                className="h-12 flex items-center justify-center px-10 font-bold rounded-md border border-gh-border bg-transparent hover:bg-gh-border/30 text-white transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                Contact Me
              </Link>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

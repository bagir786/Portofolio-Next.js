"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function SkillsMarquee() {
  // Filter skills that have slugs or iconUrls and get them
  const skillsWithIcons = PORTFOLIO_DATA.skills.filter(skill => skill.slug || skill.iconUrl);

  // Create a duplicated list for infinite scroll effect
  const doubledSkills = [...skillsWithIcons, ...skillsWithIcons];

  return (
    <div className="w-full overflow-hidden py-8 bg-gh-bg relative">
      {/* Gradient masks for smooth fade in/out */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gh-bg via-gh-bg/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gh-bg via-gh-bg/80 to-transparent z-10" />

      <motion.div
        className="flex w-max gap-16"
        animate={{
          x: [0, "-50%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 60,
            ease: "linear",
          },
        }}
      >
        {doubledSkills.map((skill, index) => (
          <div
            key={`${skill.slug || skill.name}-${index}`}
            className="flex flex-col items-center justify-center space-y-3 group cursor-default flex-shrink-0"
          >
            <div className="relative w-14 h-14 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
              <div className="absolute inset-0 bg-gh-glow/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              <img
                src={skill.iconUrl || `https://skillicons.dev/icons?i=${skill.slug}`}
                alt={skill.name}
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_8px_rgba(56,139,253,0.3)]"
                loading="lazy"
              />
            </div>
            <span className="text-[10px] font-mono text-gh-accent opacity-0 group-hover:opacity-100 transition-all duration-300 tracking-tight">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

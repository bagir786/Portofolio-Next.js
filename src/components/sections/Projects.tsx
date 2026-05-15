"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-24 relative border-t border-gh-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <p className="text-[#8b949e]">
            A selection of applications and solutions I&apos;ve developed recently.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PORTFOLIO_DATA.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group rounded-xl p-[1px] bg-gh-border hover:bg-gradient-to-r hover:from-gh-glow hover:to-gh-accent transition-all duration-500"
            >
              <div className="h-full w-full bg-gh-canvas rounded-xl p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <a
                      href={project.links.find(l => l.name.toLowerCase() === "github")?.url || project.links[0]?.url || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/title"
                    >
                      <h3 className="font-bold text-gh-accent group-hover/title:underline transition-all decoration-gh-accent/30 underline-offset-4">
                        {project.title}
                      </h3>
                    </a>
                    <span className="px-2 py-0.5 rounded-full border border-gh-border text-[10px] font-medium text-gh-muted bg-gh-bg">
                      {project.status || "Public"}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    {project.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gh-muted hover:text-gh-accent transition-colors p-1 rounded-md hover:bg-gh-border/50"
                        title={link.name}
                      >
                        <link.icon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                <p className="text-gh-muted text-sm mb-6 flex-1 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] text-gh-muted font-mono uppercase tracking-wider">
                  {project.tags.map((tag, i) => (
                    <div key={i} className="flex items-center space-x-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-gh-accent" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

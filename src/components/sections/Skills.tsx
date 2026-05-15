import { SkillsMarquee } from "@/components/shared/SkillsMarquee";

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-10">
      <div className="container mx-auto px-6 mb-8">
        <div className="flex items-center gap-4 opacity-50">
          <div className="h-px flex-1 bg-gh-border" />
          <h2 className="text-xs font-mono text-gh-muted uppercase tracking-[0.3em]">
            Skills & Stack
          </h2>
          <div className="h-px flex-1 bg-gh-border" />
        </div>
      </div>
      <SkillsMarquee />
    </section>
  );
}

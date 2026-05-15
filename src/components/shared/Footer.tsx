import { PORTFOLIO_DATA } from "@/data/portfolio";
import { HFLogo } from "@/components/shared/Icons";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top part: Detailed Grid */}
      <div className="bg-[#0d1117] py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 md:gap-6">
            {/* Brand/Contact Section */}
            <div className="col-span-2 flex flex-col items-start gap-4">
              <div className="flex items-center gap-2 text-xl font-bold tracking-tighter text-white">
                <HFLogo className="w-8 h-8" />
                <span>HB<span className="text-gh-accent">.</span></span>
              </div>
              <div className="max-w-xs text-sm text-gh-muted leading-relaxed">
                Software Engineer Passionate about building scalable web applications and solving real business problems through technology.

              </div>
              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="px-4 py-2 text-xs font-semibold text-white border border-gh-border bg-transparent hover:bg-gh-border/30 rounded-md transition-all active:scale-95 shadow-sm"
              >
                Contact Me
              </a>
            </div>

            {/* Home Column */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white">Navigate</h4>
              <nav className="flex flex-col gap-2 text-sm text-gh-muted">
                <a href="#home" className="hover:text-white transition-colors">Home</a>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
              </nav>
            </div>

            {/* Skills Column */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white">Skills</h4>
              <nav className="flex flex-col gap-2 text-sm text-gh-muted">
                {PORTFOLIO_DATA.skills.slice(0, 5).map((skill) => (
                  <a key={skill.name} href="#skills" className="hover:text-white transition-colors">
                    {skill.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Projects Column */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white">Projects</h4>
              <nav className="flex flex-col gap-2 text-sm text-gh-muted">
                {PORTFOLIO_DATA.projects.slice(0, 6).map((project) => (
                  <a key={project.title} href="#projects" className="hover:text-white transition-colors">
                    {project.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-semibold text-white">Social</h4>
              <nav className="flex flex-col gap-2 text-sm text-gh-muted">
                {PORTFOLIO_DATA.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom part: Copyright and Secondary Socials */}
      <div className="bg-[#151b23] py-3">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
          <div className="text-sm text-gh-muted text-center md:text-left">
            &copy; 2026 {PORTFOLIO_DATA.name}. Designed with excellence and precision.
          </div>

          <div className="flex items-center gap-4">
            {PORTFOLIO_DATA.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gh-muted hover:text-white transition-colors p-1"
                title={social.name}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

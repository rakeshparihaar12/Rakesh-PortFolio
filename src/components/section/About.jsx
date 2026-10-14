
import RevealOnScroll from "../RevealOnScroll";

const About = () => {
  const languages = ["JavaScript (ES6+)", "HTML5", "CSS3", "Python", "TypeScript"];
  const frontendSkills = ["React", "Tailwind CSS"];
  const backendSkills = ["Node.js"];
  const databases = ["MongoDB", "MySQL"];
  const tools = ["Git", "GitHub", "VS Code"];

  const skillGroups = [
    {
      title: "Languages",
      subtitle: "Programming fundamentals",
      icon: "</>",
      color: "blue",
      skills: languages,
    },
    {
      title: "Frontend",
      subtitle: "Building user interfaces",
      icon: "◫",
      color: "cyan",
      skills: frontendSkills,
    },
    {
      title: "Backend",
      subtitle: "Server-side development",
      icon: "{ }",
      color: "violet",
      skills: backendSkills,
    },
    {
      title: "Databases",
      subtitle: "Data storage",
      icon: "▤",
      color: "emerald",
      skills: databases,
    },
    {
      title: "Tools",
      subtitle: "Development workflow",
      icon: "⚙",
      color: "orange",
      skills: tools,
    },
  ];

  const colorStyles = {
    blue: {
      icon: "border-blue-400/20 bg-blue-500/10 text-blue-400",
      glow: "bg-blue-500/10",
      hover: "hover:border-blue-500/40 hover:bg-blue-500/[0.04]",
      badge: "hover:border-blue-400/40 hover:text-blue-300 hover:bg-blue-500/10",
    },
    cyan: {
      icon: "border-cyan-400/20 bg-cyan-500/10 text-cyan-400",
      glow: "bg-cyan-500/10",
      hover: "hover:border-cyan-500/40 hover:bg-cyan-500/[0.04]",
      badge: "hover:border-cyan-400/40 hover:text-cyan-300 hover:bg-cyan-500/10",
    },
    violet: {
      icon: "border-violet-400/20 bg-violet-500/10 text-violet-400",
      glow: "bg-violet-500/10",
      hover: "hover:border-violet-500/40 hover:bg-violet-500/[0.04]",
      badge: "hover:border-violet-400/40 hover:text-violet-300 hover:bg-violet-500/10",
    },
    emerald: {
      icon: "border-emerald-400/20 bg-emerald-500/10 text-emerald-400",
      glow: "bg-emerald-500/10",
      hover: "hover:border-emerald-500/40 hover:bg-emerald-500/[0.04]",
      badge: "hover:border-emerald-400/40 hover:text-emerald-300 hover:bg-emerald-500/10",
    },
    orange: {
      icon: "border-orange-400/20 bg-orange-500/10 text-orange-400",
      glow: "bg-orange-500/10",
      hover: "hover:border-orange-500/40 hover:bg-orange-500/[0.04]",
      badge: "hover:border-orange-400/40 hover:text-orange-300 hover:bg-orange-500/10",
    },
  };

  return (
    <section
      id="about"
      className="min-h-screen px-4 py-20 sm:px-6"
    >
      <RevealOnScroll>
        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase
              tracking-[0.25em] text-blue-400">
              Get to know me
            </p>

            <h2 className="text-3xl font-bold
              bg-linear-to-r from-blue-500 to-cyan-400
              bg-clip-text text-transparent sm:text-4xl md:text-5xl">
              About Me
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm
              leading-7 text-gray-400 sm:text-base">
              My background, technical skills, and journey
              as an aspiring software developer.
            </p>
          </div>

          {/* Introduction */}
          <div className="relative mb-8 overflow-hidden rounded-2xl
            border border-white/10 bg-white/3 p-6
            transition-all duration-300 hover:border-blue-500/30
            sm:p-8 md:p-10">

            <div className="pointer-events-none absolute -right-20
              -top-20 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center
                  justify-center rounded-xl border border-blue-400/20
                  bg-blue-500/10 text-xl text-blue-400">
                  👋
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">
                    Hello, I'm Rakesh
                  </h3>
                  <p className="mt-1 text-sm text-cyan-400">
                    Aspiring Software Developer
                  </p>
                </div>
              </div>

              <p className="max-w-4xl text-sm leading-7 text-gray-300 sm:text-base">
                I'm a BCA Graduate interested in building useful,
                user-friendly web applications. I'm learning full-stack
                development with the MERN stack while strengthening my
                skills in JavaScript, React, backend development, REST APIs,
                and databases. I enjoy learning by building projects and
                improving my problem-solving skills.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-blue-400/20
                  bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                  🎓 BCA Graduate — 2026
                </span>

                <span className="rounded-full border border-cyan-400/20
                  bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  💻 Web Development
                </span>

                <span className="rounded-full border border-violet-400/20
                  bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  🌱 Continuous Learning
                </span>
              </div>

              <p className="mt-3 text-xs text-gray-500">
                
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-white">
              Technical Skills
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Technologies and tools I'm learning and using in projects.
            </p>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => {
              const colors = colorStyles[group.color];

              return (
                <div
                  key={group.title}
                  className={`group relative overflow-hidden rounded-2xl
                    border border-white/10 bg-white/3 p-6
                    transition-all duration-300 hover:-translate-y-1
                    ${colors.hover}`}
                >
                  <div className={`pointer-events-none absolute -right-10
                    -top-10 h-28 w-28 rounded-full blur-2xl
                    ${colors.glow}`} />

                  <div className="relative">
                    <div className="mb-5 flex items-center gap-3">
                      <div className={`flex h-11 w-11 shrink-0
                        items-center justify-center rounded-xl border
                        text-lg font-bold ${colors.icon}`}>
                        {group.icon}
                      </div>

                      <div>
                        <h4 className="font-semibold text-white">
                          {group.title}
                        </h4>
                        <p className="mt-1 text-xs text-gray-500">
                          {group.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((tech) => (
                        <span
                          key={tech}
                          className={`rounded-lg border border-white/10
                            bg-white/4 px-3 py-2 text-sm
                            text-gray-300 transition-all duration-200
                            ${colors.badge}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Education and Experience */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10
              bg-white/3 p-6 sm:p-8 transition-all duration-300
              hover:-translate-y-1 hover:border-blue-500/30">

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center
                  justify-center rounded-xl bg-blue-500/10 text-xl">
                  🎓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Education
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Academic background
                  </p>
                </div>
              </div>

              <div className="space-y-6 border-l border-blue-500/30 pl-5">
                <div className="relative">
                  <span className="absolute -left-6.25 top-1.5
                    h-3 w-3 rounded-full border-2 border-blue-400
                    bg-gray-950" />

                  <h4 className="font-semibold leading-6 text-gray-100">
                    Bachelor of Computer Applications
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Tirupati College of Technical Education
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    2023–2026 · CGPA: 7.35
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute -left-6.25 top-1.5
                    h-3 w-3 rounded-full border-2 border-cyan-400
                    bg-gray-950" />

                  <h4 className="font-semibold text-gray-100">
                    Full-Stack Web Development MERN
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    AU Future Academy
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    2026
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10
              bg-white/3 p-6 sm:p-8 transition-all duration-300
              hover:-translate-y-1 hover:border-cyan-500/30">

              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center
                  justify-center rounded-xl bg-cyan-500/10 text-xl">
                  💼
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Experience
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Professional journey
                  </p>
                </div>
              </div>

              <div className="rounded-xl border border-white/10
                bg-black/20 p-5">
                <span className="inline-flex rounded-full border
                  border-cyan-400/20 bg-cyan-400/10 px-3 py-1
                  text-xs font-medium text-cyan-300">
                  Entry Level
                </span>

                <h4 className="mt-4 font-semibold text-white">
                  Aspiring Software Developer
                </h4>

                <p className="mt-2 text-sm leading-7 text-gray-400">
                  Building practical projects to strengthen my development
                  skills and gain real-world experience. Open to suitable
                  internships and entry-level opportunities.
                </p>
              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default About;

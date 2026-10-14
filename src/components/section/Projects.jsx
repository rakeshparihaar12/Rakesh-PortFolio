
import RevealOnScroll from "../RevealOnScroll";

const projects = [
  {
    title: "Gemini AI Clone",
    subtitle: "AI-Powered Chat Application",
    description:
      "A responsive AI chat application built with React and Google's Gemini API. Features AI-generated responses, chat state management, dynamic text rendering, and a responsive interface.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Gemini API", "Context API"],
    demo: "https://newgeminiclone.netlify.app/",
    github: "https://github.com/rakeshparihaar12/Gemini-Clone-2.0", // Add your GitHub repository URL
    featured: true,
  },
  {
    title: "Significo Clone",
    subtitle: "Animated Interactive Website",
    description:
      "A modern website inspired by Significo, featuring smooth scroll-based animations, transitions, and interactive UI elements using GSAP.",
    tech: ["JavaScript", "Tailwind CSS", "GSAP"],
    demo: "https://significco.netlify.app/",
    github: "https://github.com/rakeshparihaar12/Animated-Significco",
  },
  {
    title: "Todo App",
    subtitle: "Task Management Application",
    description:
      "A responsive task management application that lets users add, complete, manage, and delete tasks through a simple interface.",
    tech: ["HTML", "CSS3", "JavaScript"],
    demo: "https://rakesh-todo-app.netlify.app/",
    github: "https://todo-5sf0drdf0-rakeshparihaar12s-projects.vercel.app/",
  },
  {
    title: "Weather App",
    subtitle: "Real-Time Weather Forecast",
    description:
      "A weather application that fetches data from a weather API and displays current weather conditions through a responsive interface.",
    tech: ["HTML", "CSS3", "JavaScript", "Weather API"],
    demo: "https://weatherusingcity.netlify.app/",
    github: "https://github.com/rakeshparihaar12/Weather-App",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 scroll-mt-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto">
          <p className="text-blue-400 text-sm font-semibold uppercase
            tracking-[0.25em] text-center mb-3">
            What I've Built
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl
            font-bold mb-5 text-center bg-linear-to-r
            from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <p className="text-gray-400 text-center max-w-2xl
            mx-auto mb-12 leading-relaxed">
            A selection of projects where I turn ideas into
            responsive web experiences and practical applications.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2
            xl:grid-cols-3 gap-6 items-stretch">

            {projects.map((project, index) => (
              <article
                key={project.title}
                className={`group relative flex flex-col min-w-0
                  rounded-2xl border bg-white/3 p-6
                  transition-all duration-300
                  hover:-translate-y-2 hover:border-blue-500/50
                  hover:bg-blue-500/4
                  hover:shadow-[0_12px_35px_rgba(59,130,246,0.12)]
                  ${
                    project.featured
                      ? "border-blue-500/40"
                      : "border-white/10"
                  }`}
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex items-center justify-center
                    w-12 h-12 rounded-xl bg-blue-500/10
                    text-blue-400 font-bold text-lg
                    border border-blue-500/20">
                    0{index + 1}
                  </div>

                  {project.featured && (
                    <span className="text-xs font-medium
                      text-cyan-300 border border-cyan-400/20
                      bg-cyan-400/10 px-3 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white
                  mb-1 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-cyan-400/80 mb-4">
                  {project.subtitle}
                </p>

                <p className="text-gray-400 text-sm leading-7 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-7">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs text-blue-300
                        bg-blue-500/10 border border-blue-500/10
                        px-3 py-1.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-4
                  border-t border-white/10">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center rounded-lg
                      bg-blue-500 px-4 py-2.5 text-sm
                      font-semibold text-white transition
                      hover:bg-blue-600"
                  >
                    Live Demo ↗
                  </a>

                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center rounded-lg
                        border border-white/15 px-4 py-2.5
                        text-sm font-semibold text-gray-200
                        transition hover:border-blue-400
                        hover:text-blue-400"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span
                      className="flex-1 text-center rounded-lg
                        border border-white/10 px-4 py-2.5
                        text-sm text-gray-500"
                      title="Add your repository URL in Projects.jsx"
                    >
                      Add GitHub URL
                    </span>
                  )}
                </div>
              </article>
            ))}

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;

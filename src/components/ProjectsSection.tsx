import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import finanzyScreenshot from "@/assets/finanzy-screenshot.png";

const projects = [
  {
    title: "Finanzy App",
    description:
      "Personal finance management web app with income and expense tracking, secure JWT authentication, real-time updates and a fully responsive interface. Feature-based architecture with Context API and custom hooks.",
    tags: ["React", "TypeScript", "CSS3", "Supabase", "Vite", "Vercel"],
    image: finanzyScreenshot,
    vercel: "https://finanzy-app.vercel.app",
    github: "https://github.com/hubdanielcode/Finanzy-App",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Projects
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Recent <span className="text-gradient">work</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-12 max-w-xl">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="card-gradient border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-500 hover:glow-shadow"
            >
              {/* Screenshot */}
              <div className="w-full overflow-hidden border-b border-border max-h-[250px]">
                <img
                  src={project.image}
                  alt={`Screenshot of ${project.title} project`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl text-justify">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.vercel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border text-foreground font-display font-semibold text-sm hover:border-primary/50 transition-colors"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

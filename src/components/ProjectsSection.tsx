import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma completa de e-commerce com carrinho, pagamentos e painel administrativo.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    title: "Task Management App",
    description:
      "Aplicação de gerenciamento de tarefas com drag and drop, filtros e colaboração em tempo real.",
    tags: ["TypeScript", "Next.js", "Prisma"],
    link: "#",
    github: "#",
  },
  {
    title: "Dashboard Analytics",
    description:
      "Dashboard interativo com gráficos dinâmicos, relatórios e visualização de dados em tempo real.",
    tags: ["React", "D3.js", "Tailwind"],
    link: "#",
    github: "#",
  },
  {
    title: "Social Media App",
    description:
      "Rede social com feed, stories, mensagens diretas e sistema de notificações.",
    tags: ["React Native", "Firebase", "Redux"],
    link: "#",
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Projetos
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Trabalhos <span className="text-gradient">recentes</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group card-gradient border border-border rounded-xl p-8 hover:border-primary/30 transition-all duration-500 hover:glow-shadow"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a
                  href={project.link}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Ver projeto"
                >
                  <ExternalLink size={18} />
                </a>
                <a
                  href={project.github}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Ver código"
                >
                  <Github size={18} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

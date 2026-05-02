import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguageContext } from "../locales/hooks/useLanguageContext";
import finanzyScreenshot from "@/assets/finanzy-screenshot.png";
import petmatchScreenshot from "@/assets/petmatch-screenshot.png";
import codaraScreenshot from "@/assets/codara-screenshot.png";

const images = [finanzyScreenshot, petmatchScreenshot, codaraScreenshot];

const tags = [
  [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "React Router",
    "Recharts",
    "Lucide React",
    "Vitest",
    "Vite",
    "Vercel",
  ],
  [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "React Router",
    "Lucide React",
    "Framer Motion",
    "Vitest",
    "Vite",
    "Vercel",
  ],
  [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "React Router",
    "Monaco Editor",
    "React Image Crop",
    "React Icons",
    "Lucide React",
    "Framer Motion",
    "Vitest",
    "Vite",
    "Vercel",
  ],
];

const links = [
  {
    vercel: "https://finanzy-app.vercel.app",
    github: "https://github.com/hubdanielcode/Finanzy-App",
  },
  {
    vercel: "https://pet-match-app-nine.vercel.app/",
    github: "https://github.com/hubdanielcode/PetMatch-App",
  },
  {
    vercel: "https://codara-ai.vercel.app/",
    github: "https://github.com/hubdanielcode/Codara-AI",
  },
];

const cardVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const ProjectsSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const { translations } = useLanguageContext();

  const canPrev = index > 0;
  const canNext = index < translations.projects.list.length - 1;

  const handlePrev = () => {
    if (!canPrev) return;
    setDirection(-1);
    setIndex((current) => current - 1);
  };

  const handleNext = () => {
    if (!canNext) return;
    setDirection(1);
    setIndex((current) => current + 1);
  };

  const project = translations.projects.list[index];

  return (
    <section
      className="py-32 px-6"
      id="projects"
    >
      <div className="max-w-6xl mx-auto">
        {/* - Heading - */}

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            {translations.projects.tag}
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            {translations.projects.title}{" "}
            <span className="text-gradient">
              {translations.projects.titleHighlight}
            </span>
          </h2>
        </motion.div>

        {/* - Carousel wrapper with side arrows - */}

        <div className="flex items-center gap-4">
          {/* - Arrow Left - */}

          <button
            className="shrink-0 p-2.5 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={handlePrev}
            disabled={!canPrev}
          >
            <ChevronLeft size={22} />
          </button>

          {/* - Card - */}

          <div className="flex-1 overflow-hidden">
            <AnimatePresence
              mode="wait"
              custom={direction}
            >
              <motion.article
                className="card-gradient border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors duration-500 hover:glow-shadow"
                key={project.title}
                custom={direction}
                variants={cardVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 1, ease: "easeInOut" }}
              >
                {/* - Screenshot - */}

                <div className="w-full overflow-hidden border-b border-border max-h-[250px] flex">
                  <img
                    className="w-full h-full object-cover object-top"
                    src={images[index]}
                    alt={`Screenshot of ${project.title} project`}
                    loading="lazy"
                  />
                </div>

                {/* - Info - */}

                <div className="p-6 sm:p-8">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
                    {project.description}
                  </p>

                  {/* - Tags - */}

                  <div className="flex flex-wrap gap-2 mb-8">
                    {tags[index].map((tag) => (
                      <span
                        className="text-xs px-3 py-1.5 rounded-full bg-secondary text-secondary-foreground font-medium"
                        key={tag}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* - Links - */}

                  <div className="flex items-center gap-4">
                    <a
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold text-sm hover:opacity-90 transition-opacity"
                      href={links[index].vercel}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      {translations.projects.viewProject}
                    </a>

                    <a
                      className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg border border-border text-foreground font-display font-semibold text-sm hover:border-primary/50 transition-colors"
                      href={links[index].github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          {/* - Arrow Right - */}

          <button
            className="shrink-0 p-2.5 rounded-lg border border-border text-foreground hover:border-primary/50 hover:text-primary transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={!canNext}
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* - Dots - */}

        <div className="flex justify-center gap-2 mt-8">
          {translations.projects.list.map((_, dotIndex) => (
            <button
              className={`h-2 rounded-full transition-all duration-300 ${
                dotIndex === index ? "bg-primary w-5" : "bg-border w-2"
              }`}
              key={dotIndex}
              onClick={() => {
                setDirection(dotIndex > index ? 1 : -1);
                setIndex(dotIndex);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProjectsSection };

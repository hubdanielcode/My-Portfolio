import { motion } from "framer-motion";
import { useLanguageContext } from "../locales/hooks/useLanguageContext";

const skills = [
  ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  [
    "React",
    "Tailwind CSS",
    "Framer Motion",
    "Axios",
    "Context API",
    "Recharts",
    "React Router",
    "Monaco Editor",
    "React Image Crop",
  ],
  ["Git", "GitHub", "Vite", "Supabase", "Vitest", "VS Code", "Vercel"],
];

const SkillsSection = () => {
  const { translations } = useLanguageContext();

  return (
    <section
      className="py-32 px-6"
      id="skills"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            {translations.skills.tag}
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            {translations.skills.title}{" "}
            <span className="text-gradient">
              {translations.skills.titleHighlight}
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {translations.skills.categories.map((category, index) => (
            <motion.div
              className="card-gradient border border-border rounded-xl p-8 hover:border-primary/60 hover:shadow-lg"
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.15 }}
            >
              <h3 className="font-display text-lg font-semibold text-primary mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skills[index].map((skill) => (
                  <span
                    className="text-sm px-4 py-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors duration-300 cursor-default"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { SkillsSection };

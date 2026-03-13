import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["HTML5", "CSS3", "JavaScript", "TypeScript"],
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Axios",
      "Context API",
      "Recharts",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Vite", "Supabase", "Vitest", "VS Code"],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-32 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Skills
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Technologies I have{" "}
            <span className="text-gradient">expertise with</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              className="card-gradient border border-border rounded-xl p-8 hover:border-primary/60 hover:shadow-lg"
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.15 }}
            >
              <h3 className="font-display text-lg font-semibold text-primary mb-6">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
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

export default SkillsSection;

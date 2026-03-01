import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "I write organized, scalable and easy-to-maintain code.",
  },
  {
    icon: Palette,
    title: "Intuitive Design",
    description: "Beautiful interfaces that provide a great experience.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Fast and optimized applications for any device.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            About Me
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Turning ideas into{" "}
            <span className="text-gradient">digital reality</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-6 text-justify">
            Junior Frontend Developer focused on React, TypeScript and Tailwind CSS, 
            building modern, responsive web applications oriented towards user experience. 
            I value well-structured code, reusable components and interfaces that truly 
            work well in everyday use. My transition from Veterinary Medicine to technology 
            strengthened my discipline, analytical thinking and problem-solving skills.
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-16 text-justify">
            I work on complete projects with API consumption, state management, 
            authentication (Supabase/JWT), scalable componentization and production deployment. 
            Experience with Git, versioning and collaboration best practices.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-gradient border border-border rounded-xl p-8 hover:border-primary/30 transition-colors duration-500 group"
            >
              <item.icon className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300" size={28} />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";
import { useLanguageContext } from "../locales/hooks/useLanguageContext";

const icons = [Code2, Palette, Zap];

const AboutSection = () => {
  const { translations } = useLanguageContext();

  return (
    <section
      className="py-32 px-6"
      id="about"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            {translations.about.tag}
          </p>

          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
            {translations.about.title}{" "}
            <span className="text-gradient">
              {translations.about.titleHighlight}
            </span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-6 text-justify">
            {translations.about.p1}
          </p>

          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-6 text-justify">
            {translations.about.p2}
          </p>

          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-6 text-justify">
            {translations.about.p3}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {translations.about.highlights.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                className="card-gradient border border-border rounded-xl p-8 hover:border-primary/60 hover:shadow-lg transition-colors duration-500 group"
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.15 }}
              >
                <Icon
                  className="text-primary mb-4 group-hover:scale-110 transition-transform duration-300"
                  size={28}
                />

                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {item.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { AboutSection };

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const { scrollY } = useScroll();
  const arrowOpacity = useTransform(scrollY, [0, 150], [1, 0]);

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      id="hero"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-transparent rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        className="text-center  max-w-3xl relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.p
          className="text-primary font-display text-sm tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Front End Developer
        </motion.p>

        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6">
          <span className="text-foreground">Hi, I'm</span>

          <br />

          <span className="text-gradient">Daniel Lorenzo</span>
        </h1>

        <motion.p
          className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I create unique digital experiences with clean code, intuitive design
          and attention to detail.
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <a
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            href="#projects"
          >
            View Projects
          </a>

          <a
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg border border-border text-foreground font-semibold text-sm hover:border-primary/50 transition-colors"
            href="#contact"
          >
            Contact
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ opacity: arrowOpacity }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown
            className="text-muted-foreground"
            size={20}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

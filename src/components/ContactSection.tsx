import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Contato
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Vamos <span className="text-gradient">conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12 max-w-lg mx-auto">
            Estou sempre aberto a novos projetos e oportunidades. Entre em contato e vamos criar algo incrível juntos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="mailto:danlorenzo.of@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-semibold hover:opacity-90 transition-opacity"
            >
              <Mail size={18} />
              Enviar Email
            </a>
            <a
              href="https://wa.me/5571996173547"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg border border-border text-foreground font-display font-semibold hover:border-primary/50 transition-colors"
            >
              <Phone size={18} />
              WhatsApp
            </a>
          </div>

          <div className="flex items-center justify-center gap-8">
            <a
              href="https://github.com/hubdanielcode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/daniellorenzodev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} />
              <span className="text-sm">Brasil</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

import { motion } from "framer-motion";
import { Code2, Palette, Zap } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Código Limpo",
    description: "Escrevo código organizado, escalável e fácil de manter.",
  },
  {
    icon: Palette,
    title: "Design Intuitivo",
    description: "Interfaces bonitas que proporcionam uma ótima experiência.",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Aplicações rápidas e otimizadas para qualquer dispositivo.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-display text-sm tracking-[0.2em] uppercase mb-3">
            Sobre Mim
          </p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Transformando ideias em{" "}
            <span className="text-gradient">realidade digital</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-6 text-justify">
            Desenvolvedor Frontend Júnior com foco em React, TypeScript e Tailwind CSS, 
            criando aplicações web modernas, responsivas e orientadas à experiência do usuário. 
            Gosto de código bem estruturado, componentes reutilizáveis e interfaces que realmente 
            funcionam bem no dia a dia. Minha transição da Medicina Veterinária para a tecnologia 
            fortaleceu minha disciplina, pensamento analítico e resolução de problemas.
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed mb-16 text-justify">
            Atuo em projetos completos com consumo de APIs, gerenciamento de estado, 
            autenticação (Supabase/JWT), componentização escalável e deploy em produção. 
            Experiência com Git, versionamento e boas práticas de colaboração.
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

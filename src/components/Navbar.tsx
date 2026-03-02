import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          className="font-display text-xl font-bold text-gradient"
          href="#hero"
        >
          Daniel Lorenzo
        </a>

        {/* Desktop */}

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <motion.a
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 inline-block font-semibold"
                href={item.href}
                whileHover={{ scale: 1.2 }}
              >
                {item.label}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}

        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}

      {isOpen && (
        <motion.ul
          className="md:hidden px-6 pb-6 space-y-4 bg-background/95 backdrop-blur-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                className="block text-muted-foreground hover:text-primary transition-colors"
                href={item.href}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;

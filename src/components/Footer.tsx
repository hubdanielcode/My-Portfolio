const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © 2026 <span className="text-gradient font-display font-semibold">Seu Nome</span>. Todos os direitos reservados.
        </p>
        <p className="text-xs text-muted-foreground/60">
          Feito com ❤️ e muito café
        </p>
      </div>
    </footer>
  );
};

export default Footer;

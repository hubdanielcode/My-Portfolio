import { useLanguageContext } from "../locales/hooks/useLanguageContext";

const Footer = () => {
  const { translations } = useLanguageContext();

  return (
    <footer className="border-t border-border py-8 px-6 bg-background">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          © 2026{" "}
          <span className="text-gradient font-display font-semibold">
            Daniel Lorenzo
          </span>
          . {translations.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export { Footer };

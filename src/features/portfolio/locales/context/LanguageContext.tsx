import { createContext, ReactNode, useState } from "react";
import { translations } from "../translation";

interface LanguageContnextType {
  language: "en-US" | "pt-BR";
  setLanguage: (language: "en-US" | "pt-BR") => void;
  translations: typeof translations.en;
}

const LanguageContext = createContext<LanguageContnextType | null>(null);

const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"en-US" | "pt-BR">("en-US");

  let currentTranslations;

  if (language === "en-US") {
    currentTranslations = translations.en;
  } else {
    currentTranslations = translations.pt;
  }

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, translations: currentTranslations }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };

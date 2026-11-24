import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";

const useLanguageContext = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguageContext must be used inside LanguageProvider");
  }
  return context;
};

export { useLanguageContext };

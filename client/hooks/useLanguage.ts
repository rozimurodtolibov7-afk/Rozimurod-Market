import { useState, useCallback, useMemo } from "react";
import { translations, Language, TranslationKeys } from "@/i18n/translations";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem("rozimurod-language");
    if (saved && saved in translations) {
      return saved as Language;
    }

    // Try to detect from browser language
    const browserLang = navigator.language.split("-")[0];
    if (browserLang in translations) {
      return browserLang as Language;
    }

    // Default to English
    return "en";
  });

  const changeLanguage = useCallback((lang: Language) => {
    if (lang in translations) {
      setLanguage(lang);
      localStorage.setItem("rozimurod-language", lang);
    }
  }, []);

  const t = useCallback(
    (key: TranslationKeys): string => {
      return translations[language][key] || translations.en[key] || key;
    },
    [language],
  );

  return useMemo(
    () => ({
      language,
      changeLanguage,
      t,
      availableLanguages: Object.keys(translations) as Language[],
    }),
    [language, changeLanguage, t],
  );
}

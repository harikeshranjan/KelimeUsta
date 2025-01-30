"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { Dispatch, SetStateAction } from "react";

const LanguageContext = createContext<{
  language: string;
  setLanguage: Dispatch<SetStateAction<string>>;
}>({
  language: "en",
  setLanguage: () => { },
});

export const useLanguage = () => {
  return useContext(LanguageContext);
}

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<string>(() => {
    if (typeof window !== "undefined") {
      const storedLanguage = localStorage.getItem("userLanguage");
      return storedLanguage || "en";
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("userLanguage", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
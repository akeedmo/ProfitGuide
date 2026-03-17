import React, { createContext, useState, useContext, useEffect } from 'react';

type Language = 'ar' | 'en' | 'tr';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  dir: 'rtl' | 'ltr';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('ar');

  useEffect(() => {
    const dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    
    // Apply font family based on language
    if (lang === 'ar') {
      document.documentElement.style.setProperty('--font-family', '"Cairo", sans-serif');
    } else {
      document.documentElement.style.setProperty('--font-family', '"Poppins", sans-serif');
    }
  }, [lang]);

  const value = {
    lang,
    setLang,
    dir: lang === 'ar' ? 'rtl' : 'ltr' as 'rtl' | 'ltr'
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

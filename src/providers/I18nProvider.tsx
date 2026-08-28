import React, { createContext, useContext, useEffect, useState } from 'react'
import { translations, type Language } from '../data/translations'

const I18nContext = createContext<any>(null)

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const stored = typeof window !== 'undefined' ? localStorage.getItem('ilj:user:prefs') : null
  const defaultLang: Language = stored ? (JSON.parse(stored).language ?? 'en') : 'en'
  const [language, setLanguage] = useState<Language>(defaultLang)

  const t = (path: string) => {
    const parts = path.split('.')
    let obj: any = translations[language]
    for (const p of parts) obj = obj?.[p]
    return obj ?? path
  }

  useEffect(() => {
    const prev = JSON.parse(localStorage.getItem('ilj:user:prefs') || '{}')
    localStorage.setItem('ilj:user:prefs', JSON.stringify({ ...prev, language }))
  }, [language])

  return <I18nContext.Provider value={{ t, language, setLanguage }}>{children}</I18nContext.Provider>
}

export const useI18n = () => useContext(I18nContext) as { t: (s: string) => string; language: Language; setLanguage: (l: Language) => void }

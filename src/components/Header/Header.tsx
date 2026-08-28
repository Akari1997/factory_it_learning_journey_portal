import React from 'react'
import { useI18n } from '../../providers/I18nProvider'
import { Link } from 'react-router-dom'

export default function Header() {
  const { t, language, setLanguage } = useI18n()
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow">
      <div className="flex items-center gap-4">
        <div className="rounded bg-legoBlue h-9 w-9 flex items-center justify-center text-white font-bold">IT</div>
        <h1 className="text-lg font-semibold">{t('header.title')}</h1>
      </div>
      <div className="flex-1 max-w-xl mx-4">
        <div className="relative">
          <input aria-label={t('header.searchPlaceholder')} placeholder={t('header.searchPlaceholder')} className="w-full pl-10 pr-4 py-2 border rounded" />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <select value={language} onChange={(e) => setLanguage(e.target.value)} aria-label="Language switcher" className="border px-2 py-1 rounded">
          <option value="en">EN</option>
          <option value="zh">中文</option>
        </select>
        <div className="rounded-full bg-gray-100 w-9 h-9 flex items-center justify-center">U</div>
      </div>
    </header>
  )
}

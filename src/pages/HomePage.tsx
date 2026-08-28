import React from 'react'
import Header from '../components/Header/Header'
import { useData } from '../providers/DataProvider'
import { DomainCard } from '../components/DomainCard/DomainCard'
import { useProgress } from '../providers/ProgressProvider'
import { useI18n } from '../providers/I18nProvider'

export default function HomePage() {
  const { domains } = useData()
  const { getModuleProgressPercent, initFromData } = useProgress()
  const { t, language } = useI18n()

  React.useEffect(() => {
    initFromData(domains)
  }, [domains])

  const computeDomainProgress = (domain: any) => {
    if (!domain.modules || domain.modules.length === 0) return 0
    const pts = domain.modules.map((m: any) => getModuleProgressPercent(m.id))
    const avg = Math.round(pts.reduce((a: number, b: number) => a + b, 0) / (pts.length || 1))
    return avg
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-6 max-w-6xl mx-auto">
        <section className="mb-8">
          <h2 className="text-3xl font-bold">{t('header.title')}</h2>
          <p className="text-gray-600 mt-2">{t('home.heroSubtitle')}</p>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Training Domains</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {domains.map((d: any) => (
              <DomainCard key={d.id} domain={d} progressPercent={computeDomainProgress(d)} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header/Header'
import { useData } from '../providers/DataProvider'
import { useProgress } from '../providers/ProgressProvider'
import { useI18n } from '../providers/I18nProvider'
import { ProgressRing } from '../components/ProgressRing/ProgressRing'

export default function DomainPage() {
  const { domainId } = useParams()
  const { domains } = useData()
  const domain = domains.find((d: any) => d.id === domainId)
  const { getModuleProgressPercent } = useProgress()
  const { t, language } = useI18n()

  if (!domain) {
    return (
      <div>
        <Header />
        <main className="p-6 max-w-4xl mx-auto">Domain not found. <Link to="/">Back</Link></main>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-6 max-w-6xl mx-auto">
        <nav className="text-sm text-gray-500 mb-4"> <Link to="/">Home</Link> / {domain.title[language]}</nav>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <aside className="lg:col-span-1">
            <div className="p-4 border rounded">
              <h3 className="font-semibold">Roadmap</h3>
              <p className="text-sm text-gray-600 mt-2">Progress overview</p>
              <div className="mt-4 space-y-4">
                {domain.modules.map((m: any) => (
                  <div key={m.id} className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{m.title[language]}</div>
                      <div className="text-sm text-gray-500">{m.topics.length} topics • {m.estimatedMinutes || 0} mins</div>
                    </div>
                    <div>
                      <ProgressRing progress={getModuleProgressPercent(m.id)} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
          <section className="lg:col-span-2">
            <div className="p-4 border rounded">
              <h2 className="text-2xl font-bold">{domain.title[language]}</h2>
              <p className="text-gray-600 mt-2">{domain.description?.[language]}</p>
              <div className="mt-6 space-y-4">
                {domain.modules.map((m: any) => (
                  <div key={m.id} className="p-3 border rounded">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold">{m.title[language]}</div>
                        <div className="text-sm text-gray-500">{m.description?.[language]}</div>
                      </div>
                      <div className="flex items-center gap-4">
                        <ProgressRing progress={getModuleProgressPercent(m.id)} />
                        <Link to={`/domain/${domain.id}`} className="text-sm text-legoBlue">Open</Link>
                      </div>
                    </div>
                    <div className="mt-3">
                      <ul className="space-y-2">
                        {m.topics.map((t: any) => (
                          <li key={t.id} className="flex items-center justify-between">
                            <div>{t.title[language]}</div>
                            <div className="text-sm text-gray-500">{t.durationMinutes || ''} mins</div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

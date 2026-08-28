import React, { createContext, useContext, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const ProgressContext = createContext<any>(null)

export const ProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useLocalStorage<any[]>('ilj:user:progress', [])

  useEffect(() => {
    // no-op: initialization can be handled by consumer when data available
  }, [])

  const initFromData = (domains: any[]) => {
    if (progress && progress.length > 0) return
    const skeleton = domains.map((d: any) => ({
      domainId: d.id,
      modules: d.modules.map((m: any) => ({ moduleId: m.id, topics: m.topics.map((t: any) => ({ topicId: t.id, completed: false })) }))
    }))
    setProgress(skeleton)
  }

  const markTopicComplete = (domainId: string, moduleId: string, topicId: string, completed: boolean) => {
    setProgress((prev: any[]) => {
      const copy = JSON.parse(JSON.stringify(prev || []))
      const dom = copy.find((d: any) => d.domainId === domainId)
      if (!dom) return prev
      const mod = dom.modules.find((m: any) => m.moduleId === moduleId)
      if (!mod) return prev
      const topic = mod.topics.find((t: any) => t.topicId === topicId)
      if (topic) topic.completed = completed
      return copy
    })
  }

  const getModuleProgressPercent = (moduleId: string) => {
    for (const d of progress || []) {
      const m = d.modules.find((mm: any) => mm.moduleId === moduleId)
      if (m) {
        const total = m.topics.length
        const done = m.topics.filter((t: any) => t.completed).length
        return total === 0 ? 0 : Math.round((done / total) * 100)
      }
    }
    return 0
  }

  return <ProgressContext.Provider value={{ progress, initFromData, markTopicComplete, getModuleProgressPercent }}>{children}</ProgressContext.Provider>
}

export const useProgress = () => useContext(ProgressContext)

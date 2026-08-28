export type Language = 'en' | 'zh'

export interface Topic {
  id: string
  title: Record<Language, string>
  durationMinutes?: number
  content?: Record<Language, string>
  order: number
  locked?: boolean
}

export interface Module {
  id: string
  title: Record<Language, string>
  description?: Record<Language, string>
  estimatedMinutes?: number
  topics: Topic[]
  order: number
  prerequisites?: string[]
  badge?: 'Beginner' | 'Intermediate' | 'Advanced' | 'DomainExpert'
}

export interface Domain {
  id: string
  title: Record<Language, string>
  description?: Record<Language, string>
  modules: Module[]
  order: number
  icon?: string
}

export interface ProgressTopic {
  topicId: string
  completed: boolean
  lastViewedAt?: string
}

export interface ProgressModule {
  moduleId: string
  topics: ProgressTopic[]
  startedAt?: string
  completedAt?: string
}

export interface ProgressDomain {
  domainId: string
  modules: ProgressModule[]
}

export interface NotesItem {
  id: string
  domainId: string
  moduleId: string
  content: string
  updatedAt: string
}

export interface Bookmark {
  id: string
  type: 'domain' | 'module' | 'topic'
  domainId?: string
  moduleId?: string
  topicId?: string
  createdAt: string
}

export interface UserPreferences {
  language: Language
  theme?: 'light' | 'dark'
}

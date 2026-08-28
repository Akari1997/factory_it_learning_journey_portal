export const translations = {
  en: {
    header: { title: 'IT Learning Journey', searchPlaceholder: 'Search domains, modules, topics...' },
    dashboard: { title: 'Dashboard', overallProgress: 'Overall Progress' },
    home: { heroSubtitle: 'Build your expertise across Manufacturing, Logistics, Infrastructure, and Digital Workplace technologies.' },
    actions: { startLearning: 'Start learning', bookmark: 'Bookmark', notes: 'Notes' },
    statuses: { notStarted: 'Not started', inProgress: 'In progress', completed: 'Completed' }
  },
  zh: {
    header: { title: 'IT 学习之旅', searchPlaceholder: '搜索 域、模块、主题...' },
    dashboard: { title: '仪表板', overallProgress: '总体进度' },
    home: { heroSubtitle: '在制造、物流、基础设施和数字工作场所技术中构建您的专业技能。' },
    actions: { startLearning: '开始学习', bookmark: '收藏', notes: '笔记' },
    statuses: { notStarted: '未开始', inProgress: '进行中', completed: '已完成' }
  }
} as const

export type Language = keyof typeof translations

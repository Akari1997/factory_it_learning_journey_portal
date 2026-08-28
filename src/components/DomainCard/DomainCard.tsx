import React from 'react'
import { Link } from 'react-router-dom'
import { ProgressRing } from '../ProgressRing/ProgressRing'
import { useI18n } from '../../providers/I18nProvider'

export const DomainCard: React.FC<{ domain: any; progressPercent: number }> = ({ domain, progressPercent }) => {
  const { t, language } = useI18n()
  return (
    <div className="p-4 border rounded shadow-sm flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-md font-semibold">{domain.title[language]}</h3>
          <ProgressRing progress={progressPercent} />
        </div>
        <p className="text-sm mt-2 text-gray-600">{domain.description?.[language]}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm">{domain.modules.length} modules</span>
        <Link to={`/domain/${domain.id}`} className="px-3 py-1 rounded bg-legoBlue text-white text-sm">{t('actions.startLearning')}</Link>
      </div>
    </div>
  )
}

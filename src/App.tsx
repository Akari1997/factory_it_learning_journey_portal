import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { I18nProvider } from './providers/I18nProvider'
import { DataProvider } from './providers/DataProvider'
import { ProgressProvider } from './providers/ProgressProvider'
import HomePage from './pages/HomePage'
import DomainPage from './pages/DomainPage'

export default function App() {
  return (
    <I18nProvider>
      <DataProvider>
        <ProgressProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/domain/:domainId" element={<DomainPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </ProgressProvider>
      </DataProvider>
    </I18nProvider>
  )
}

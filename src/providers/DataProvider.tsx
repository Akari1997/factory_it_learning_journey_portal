import React, { createContext, useContext } from 'react'
import training from '../data/training-content.json'

const DataContext = createContext<any>(null)

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // training is static JSON for now
  const domains = (training as any).domains as any[]
  return <DataContext.Provider value={{ domains }}>{children}</DataContext.Provider>
}

export const useData = () => useContext(DataContext)

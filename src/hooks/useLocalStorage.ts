import { useState, useEffect } from 'react'

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [state, setState] = useState<T>(() => {
    try {
      const value = localStorage.getItem(key)
      return value ? (JSON.parse(value) as T) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state))
    } catch (e) {
      // ignore
    }
  }, [key, state])

  return [state, setState] as const
}

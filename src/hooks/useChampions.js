import { useEffect, useState, useMemo } from 'react'
import { fetchLatestVersion, fetchChampionList } from '../services/ddragon'

export default function useChampions(locale = 'es_AR') {
  const [version, setVersion] = useState(null)
  const [champions, setChampions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        setLoading(true)
        const v = await fetchLatestVersion()
        if (cancelled) return
        setVersion(v)
        const list = await fetchChampionList(v, locale)
        if (cancelled) return
        setChampions(list)
      } catch (e) {
        if (!cancelled) setError(e.message || 'Error desconocido')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [locale])

  const byLetter = useMemo(() => {
    const grouped = {}
    for (const c of champions) {
      const letter = c.name[0].toUpperCase()
      grouped[letter] ||= []
      grouped[letter].push(c)
    }
    return grouped
  }, [champions])

  return { version, champions, byLetter, loading, error }
}

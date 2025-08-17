import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchLatestVersion, fetchChampionDetail } from '../../services/ddragon'
import ChampionDetail from './ChampionDetail.jsx'

export default function ChampionDetailContainer() {
  const { id } = useParams()
  const [version, setVersion] = useState(null)
  const [champ, setChamp] = useState(null)
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
        const detail = await fetchChampionDetail(v, id, 'es_AR')
        if (cancelled) return
        setChamp(detail)
      } catch (e) {
        if (!cancelled) setError(e.message || 'Error')
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => { cancelled = true }
  }, [id])

  return <ChampionDetail loading={loading} error={error} champ={champ} version={version} />
}

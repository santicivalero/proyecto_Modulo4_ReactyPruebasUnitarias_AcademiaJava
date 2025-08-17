import React, { useState, useMemo } from 'react'
import ChampionCard from './ChampionCard.jsx'

export default function ChampionCardContainer({ champion, version, favorites, onToggleFavorite }) {
  const [open, setOpen] = useState(false)
  const isFavorite = useMemo(() => favorites.some(f => f.id === champion.id), [favorites, champion.id])
  return (
    <ChampionCard
      champion={champion}
      version={version}
      open={open}
      onToggleOpen={() => setOpen(o => !o)}
      isFavorite={isFavorite}
      onToggleFavorite={onToggleFavorite}
    />
  )
}

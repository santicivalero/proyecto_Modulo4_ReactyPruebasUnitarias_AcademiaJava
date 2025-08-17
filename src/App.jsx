import React, { useMemo, useState } from 'react'
import useChampions from './hooks/useChampions'
import { filterByName } from './utils/filter'

import SearchBar from './components/SearchBar/SearchBar.jsx'
import AlphaFilter from './components/AlphaFilter/AlphaFilter.jsx'
import FavoritesChips from './components/FavoritesChips/FavoritesChips.jsx'
import ChampionListContainer from './components/ChampionList/ChampionListContainer.jsx'

export default function App() {
  const { version, champions, loading, error } = useChampions('es_AR')
  const [q, setQ] = useState('')
  const [alpha, setAlpha] = useState(null)
  const [favorites, setFavorites] = useState([])

  const filtered = useMemo(() => {
    let list = filterByName(champions, q)
    if (alpha) list = list.filter(c => c.name.toUpperCase().startsWith(alpha))
    return list
  }, [champions, q, alpha])

  function toggleFavorite(ch) {
    setFavorites(prev =>
      prev.some(f => f.id === ch.id) ? prev.filter(f => f.id !== ch.id) : [...prev, ch]
    )
  }

  return (
    <div className="container">
      <header className="header">
        <div className="title">League of Legends · Campeones</div>
      </header>

      <SearchBar value={q} onChange={setQ} />
      <AlphaFilter active={alpha} onPick={setAlpha} />

      <div className="space"></div>

      <section>
        <h3>Favoritos</h3>
        <FavoritesChips favorites={favorites} onRemove={toggleFavorite} />
      </section>

      <div className="space"></div>

      {loading && <p>Cargando campeones...</p>}
      {error && <p>Ocurrió un error: {error}</p>}
      {!loading && !error && (
        <ChampionListContainer
          list={filtered}
          version={version}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}
    </div>
  )
}


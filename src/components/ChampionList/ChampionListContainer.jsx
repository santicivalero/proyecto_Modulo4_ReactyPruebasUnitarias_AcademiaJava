import React from 'react'
import ChampionList from './ChampionList.jsx'

export default function ChampionListContainer({ list, version, favorites, onToggleFavorite }) {
  return (
    <ChampionList
      list={list}
      version={version}
      favorites={favorites}
      onToggleFavorite={onToggleFavorite}
    />
  )
}

import styles from './styles.module.css'
import ChampionCardContainer from '../ChampionCard/ChampionCardContainer.jsx'

export default function ChampionList({ list, version, favorites, onToggleFavorite }) {
  return (
    <div className={styles.grid}>
      {list.map(ch => (
        <div key={ch.id} className={styles.item}>
          <ChampionCardContainer
            champion={ch}
            version={version}
            favorites={favorites}
            onToggleFavorite={onToggleFavorite}
          />
        </div>
      ))}
    </div>
  )
}


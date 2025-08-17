import React from 'react'
import styles from './styles.module.css'

export default function FavoritesChips({ favorites, onRemove }) {
  if (!favorites?.length) return <p className={styles.muted}>Aún no agregaste favoritos.</p>
  return (
    <div className={styles.wrap}>
      {favorites.map(f => (
        <span key={f.id} className={styles.badge}>
          {f.name}
          <button className={styles.btn} onClick={() => onRemove(f)}>X</button>
        </span>
      ))}
    </div>
  )
}

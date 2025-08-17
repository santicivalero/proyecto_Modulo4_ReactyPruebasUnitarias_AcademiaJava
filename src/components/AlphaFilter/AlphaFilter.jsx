import React from 'react'
import styles from './styles.module.css'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function AlphaFilter({ active, onPick }) {
  return (
    <div className={styles.alpha} role="list">
      {letters.map(l => (
        <button
          key={l}
          className={`${styles.btn} ${active === l ? styles.active : ''}`}
          onClick={() => onPick(l)}
          aria-label={`Filtrar por ${l}`}
        >
          {l}
        </button>
      ))}
      <button className={styles.btn} onClick={() => onPick(null)} aria-label="Quitar filtro">
        Todos
      </button>
    </div>
  )
}

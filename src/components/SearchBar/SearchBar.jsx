import React from 'react'
import styles from './styles.module.css'

export default function SearchBar({ value, onChange }) {
  return (
    <input
      className={styles.search}
      aria-label="Buscar campeón"
      type="search"
      placeholder="Buscar campeón..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}

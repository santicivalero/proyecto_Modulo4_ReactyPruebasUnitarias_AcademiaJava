import styles from './styles.module.css'
import { Link } from 'react-router-dom'
import { championSquare } from '../../services/ddragon'

export default function ChampionDetail({ loading, error, champ, version }) {
  if (loading) return <div className="container"><p>Cargando...</p></div>
  if (error) return <div className="container"><p>Ocurrió un error: {error}</p></div>

  return (
    <div className="container">
      <Link to="/">← Volver</Link>
      <div className="space"></div>
      <div className={styles.row}>
        <img className={styles.square} src={championSquare(version, champ.image.full)} alt={champ.name} />
        <div>
          <h1 className={styles.title}>{champ.name}</h1>
          <div className={styles.muted}>{champ.title}</div>
        </div>
      </div>
      <div className="space"></div>
      <div className={styles.details} dangerouslySetInnerHTML={{ __html: champ.lore }} />
      <div className="space"></div>
      <h3>Habilidades</h3>
      <ul className={styles.list}>
        {champ.spells.map(s => (
          <li key={s.id}>
            <strong>{s.name}:</strong>{' '}
            <span dangerouslySetInnerHTML={{ __html: s.description }} />
          </li>
        ))}
      </ul>
    </div>
  )
}

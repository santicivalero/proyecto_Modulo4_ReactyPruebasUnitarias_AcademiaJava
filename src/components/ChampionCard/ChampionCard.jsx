// import React from 'react'
// import styles from './styles.module.css'
// import { championSquare } from '../../services/ddragon'

// export default function ChampionCard({
//   champion,
//   version,
//   open,
//   onToggleOpen,
//   isFavorite,
//   onToggleFavorite
// }) {
//   return (
//     <div className={styles.card} data-testid="champion-card">
//       <div className={styles.row}>
//         <img
//           className={styles.square}
//           src={championSquare(version, champion.image.full)}
//           alt={champion.name}
//         />
//         <div className={styles.flex}>
//           <div className={styles.rowBetween}>
//             <strong>{champion.name}</strong>
//             <div className={styles.row}>
//               <button className={styles.btn} onClick={() => onToggleFavorite(champion)} aria-label="Favorito">
//                 {isFavorite ? 'Quitar' : 'Favorito'}
//               </button>
//               <button className={styles.btn} onClick={onToggleOpen} aria-expanded={open} aria-controls={`det-${champion.id}`}>
//                 {open ? 'Ocultar' : 'Ver más'}
//               </button>
//             </div>
//           </div>
//           <div className={styles.muted}>{champion.title}</div>
//         </div>
//       </div>

//       {open && (
//         <div id={`det-${champion.id}`} className={styles.details}>
//           <div dangerouslySetInnerHTML={{ __html: champion.blurb }} />
//           <a className={styles.btn} href={`/champion/${champion.id}`}>Más info</a>
//         </div>
//       )}
//     </div>
//   )
// }


import React from 'react'
import styles from './styles.module.css'
import { championSquare } from '../../services/ddragon'

export default function ChampionCard({
  champion,
  version,
  open,
  onToggleOpen,
  isFavorite,
  onToggleFavorite
}) {
  return (
    <div className={styles.card} data-testid="champion-card">
      <div className={styles.row}>
        <img
          className={styles.square}
          src={championSquare(version, champion.image.full)}
          alt={champion.name}
        />
        <div className={styles.flex}>
          <div className={styles.rowBetween}>
            <strong className={styles.name}>{champion.name}</strong>

            <div className={styles.actions}>
              <button
                className={styles.btn}
                onClick={() => onToggleFavorite(champion)}
                aria-label="Favorito"
              >
                {isFavorite ? 'Quitar' : 'Favorito'}
              </button>
              <button
                className={styles.btn}
                onClick={onToggleOpen}
                aria-expanded={open}
                aria-controls={`det-${champion.id}`}
              >
                {open ? 'Ocultar' : 'Ver más'}
              </button>
            </div>
          </div>

          <div className={styles.subtitle}>{champion.title}</div>
        </div>
      </div>

      {open && (
        <div id={`det-${champion.id}`} className={styles.details}>
          <div className={styles.blurb} dangerouslySetInnerHTML={{ __html: champion.blurb }} />
          <a className={styles.linkBtn} href={`/champion/${champion.id}`}>Más info</a>
        </div>
      )}
    </div>
  )
}


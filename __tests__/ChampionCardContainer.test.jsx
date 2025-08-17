import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ChampionCardContainer from '../src/components/ChampionCard/ChampionCardContainer.jsx'

const champ = { id: 'Ahri', name: 'Ahri', title:'La Mujer Zorra', blurb:'<p>Demo</p>', image:{ full:'Ahri.png' } }

describe('ChampionCardContainer', () => {
  it('alternar detalles (open/close) y marcar favorito', async () => {
    const onToggleFavorite = vi.fn()
    render(
      <ChampionCardContainer
        champion={champ}
        version={'15.15.1'}
        favorites={[]}
        onToggleFavorite={onToggleFavorite}
      />
    )
    const verMas = screen.getByRole('button', { name: /Ver más/i })
    await userEvent.click(verMas)
    expect(screen.getByText('Más info')).toBeInTheDocument()

    const favBtn = screen.getByRole('button', { name: /Favorito/i })
    await userEvent.click(favBtn)
    expect(onToggleFavorite).toHaveBeenCalledTimes(1)
  })
})

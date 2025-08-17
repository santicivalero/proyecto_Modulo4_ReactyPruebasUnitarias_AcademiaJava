import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../src/App.jsx'

const sampleList = {
  data: {
    Aatrox: { id: 'Aatrox', name: 'Aatrox', title: 'La Espada Darkin', blurb: 'Demo', image:{full:'Aatrox.png'} },
    Ahri:   { id: 'Ahri',   name: 'Ahri',   title: 'La Mujer Zorra',   blurb: 'Demo', image:{full:'Ahri.png'} }
  }
}

beforeEach(() => {
  vi.stubGlobal('fetch', vi.fn((url) => {
    if (url.includes('/api/versions.json')) {
      return Promise.resolve(new Response(JSON.stringify(['15.15.1'])))
    }
    if (url.includes('/champion.json')) {
      return Promise.resolve(new Response(JSON.stringify(sampleList)))
    }
    return Promise.reject(new Error('Unknown URL: ' + url))
  }))
})

describe('App', () => {
  it('renderiza y permite buscar', async () => {
    render(<App />)
    await waitFor(() => expect(screen.getByText('Aatrox')).toBeInTheDocument())
    const input = screen.getByLabelText(/Buscar campeón/i)
    await userEvent.type(input, 'ah')
    expect(screen.queryByText('Aatrox')).not.toBeInTheDocument()
    expect(screen.getByText('Ahri')).toBeInTheDocument()
  })
})

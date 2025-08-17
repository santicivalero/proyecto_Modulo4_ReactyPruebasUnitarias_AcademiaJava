import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import ChampionDetailContainer from './pages/ChampionDetail/ChampionDetailContainer.jsx'
import './styles.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/champion/:id" element={<ChampionDetailContainer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)


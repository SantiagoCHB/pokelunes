import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import Aleatorios from './Componentes/Aleatorios'
import Capturados from './Componentes/Capturados'
import Favoritos from './Componentes/Favoritos'
import Lista from './Componentes/Lista'
import Pokemon from './Componentes/Pokemon'
import Usuario from './Componentes/Usuario'
import Menu from './Componentes/Menu'

function App() {

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Lista />} />
        <Route path="/usuarios" element={<Usuario/>} />
        <Route path="/aleatorios" element={<Aleatorios />} />
        <Route path="/capturados" element={<Capturados />} />
        <Route path="/favoritos" element={<Favoritos />} />
      </Routes>
    </Router>
  )
}

export default App

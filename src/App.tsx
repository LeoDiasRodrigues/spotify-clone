import './App.css'
import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Perfil from './pages/Perfil'
import Musica from './pages/Musica'
import Biblioteca from './pages/Biblioteca'

function App() {

  return (

    <Routes>

      <Route path="/" element={<Perfil />} />

      <Route path="/home" element={<Home />} />

      <Route path="/musica/:id" element={<Musica />} />

      <Route path="/biblioteca" element={<Biblioteca />} />

    </Routes>

  )

}

export default App
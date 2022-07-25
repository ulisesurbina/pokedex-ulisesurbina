import { HashRouter, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import UserLogin from './components/UserLogin';
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {


  return (
    <div className="App Dark">
      <HashRouter>
        <Routes>
          <Route path="/" element={<UserLogin />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex pokemonsPerPage={12} />}  />
            <Route path="/pokedex/:id" element={<PokemonDetail />} />
          </Route>

        </Routes>
        </HashRouter>
    </div>
  )
}

export default App

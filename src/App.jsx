import React from 'react'

import NavBar from './components/NavBar'
import Home from './components/Home'
import Sobre from './components/Sobre'
import PorqueTerUmWebSite from './components/PorqueTerUmWebSite'
import Servicos from './components/Servicos'
import Contato from './components/Contato'

function App() {
    return (
        <div className='conteudo'>
            <NavBar />
            <main>
                <Home />
                <Sobre />
                <PorqueTerUmWebSite />
                <Servicos />
                <Contato />
            </main>

        </div>
    )
}

export default App
import './index.css'
import ReactDOM from 'react-dom'
import React from 'react'

import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'

ReactDOM.render(
    <div id="app">
        <Primeiro/>
        <ComParametro 
            titulo="Segundo Componente" 
            aluno="Pedro Silva" nota={9.3}/>
    </div>,
    document.getElementById('root')
) 
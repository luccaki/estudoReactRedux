import './App.css'
import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'
import Fragmento from './components/basicos/Fragmento.jsx'
import Aleatorio from './components/basicos/Aleatorio.jsx'
import Card from './components/layout/Card.jsx'
import Familia from'./components/basicos/Familia.jsx'
import FamiliaMembro from './components/basicos/FamiliaMembro'

export default props =>
    <div className="App">
        <h1>Fundamentos React teste</h1>
        <div className="Cards">
            <Card titulo="#05 Componente com Filhos" color="#a4b787">
                <Familia sobrenome="Silva">
                    <FamiliaMembro nome="Pedro"/>
                    <FamiliaMembro nome="Ana"/>
                    <FamiliaMembro nome="Gustavo"/>
                </Familia>
            </Card>

            <Card titulo="#04 Numero Aleatorio" color="#6497b1">
                <Aleatorio min={0} max={100} />
            </Card>

            <Card titulo="#04 Fragmento" color="#851e3e">
                <Fragmento />
            </Card>

            <Card titulo="#02 ComParametro" color="#0e9aa7 ">
                <ComParametro
                    titulo="Segundo Componente"
                    aluno="Pedro Silva" nota={9.3}
                />
            </Card>

            <Card titulo="#01 Primeiro Componente" color="#65c3ba ">
                <Primeiro />
            </Card>
        </div>
    </div>
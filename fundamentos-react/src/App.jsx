import Primeiro from './components/basicos/Primeiro.jsx'
import ComParametro from './components/basicos/ComParametro.jsx'
import Fragmento from './components/basicos/Fragmento.jsx'
import Aleatorio from './components/basicos/Aleatorio.jsx'
import Card from './components/layout/Card.jsx'

export default props =>
    <div id="app">
        <h1>Fundamentos React teste</h1>
        <Card titulo="#04 Numero Aleatorio">
            <Aleatorio min={0} max={100} />
        </Card>

        <Card titulo="#04 Fragmento">
            <Fragmento />
        </Card>

        <Card titulo="#02 ComParametro">
            <ComParametro
                titulo="Segundo Componente"
                aluno="Pedro Silva" nota={9.3}
            />
        </Card>

        <Card titulo="#01 Primeiro Componente">
            <Primeiro />
        </Card>
    </div>
export default props => {
    const gerarIdade = () => parseInt(Math.random() * (40)) + 30
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={_ => props.quandoClicar('Joao', gerarIdade(), gerarNerd())}>
                Fornercer Informações
            </button>
        </div>
    )
}
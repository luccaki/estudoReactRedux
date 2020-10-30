import DiretaFilho from './DiretaFilho.jsx'

export default props => {
    return (
        <div>
            <DiretaFilho nome="Felipe" idade={20} nerd={false}/>
            <DiretaFilho nome="Roberto" idade={17} nerd={true}/>
        </div>
    )
}
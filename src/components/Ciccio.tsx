import "./Ciccio.css"
import { useState } from 'react'

interface PropsType{

    valore: number
    aggiorna:Function
}

function Ciccio(props: PropsType){

    const [contatore, setContatore] = useState(0)
    
    const cliccato = () =>{
        props.aggiorna(contatore +1)
        setContatore(contatore +1)
    }

    return (
        <>
        <p>bottone del padre {props.valore}</p>        
        <h2>tassox</h2>
        <button onClick={() => { cliccato()}}>clicca il bastox {contatore}</button>
        </>
    )

}

export default Ciccio


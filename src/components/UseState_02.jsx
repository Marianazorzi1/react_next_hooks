import { useState } from "react"

export default () => {

    const [valor,setValor] = useState(0)

    function diminuir (){
        setValor(dim => dim - 1)
    }
    function aumentar (){
        setValor (aum => aum +1)
    }
    function diminuir_valor(a){
        setValor(dv => dv - a)
    }


    return(
        <>
            <h4>useState</h4>
            <p>Valor: {valor}</p>
            <button onClick={() => {diminuir_valor(100)}}>Diminuir+</button>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>

        </>
    )
}
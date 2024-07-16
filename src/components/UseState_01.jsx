import { useState } from "react"

export default () => {

    const [valor,setValor] = useState(0)

    function diminuir (){
        setValor(dim => dim - 1)
    }
    function aumentar (){
        setValor (aum => aum +1)
    }


    return(
        <>
            <h4>useState</h4>
            <p>Valor: {valor}</p>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>

        </>
    )
}
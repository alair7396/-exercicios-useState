import { useState } from "react";



const BotaoContador=()=>{
const[use,useSet]=useState(0)

    const contador=()=>{
        useSet((use)+1)
    }

    return(
        <>
        <button onClick={contador}>Contador é: {use}</button>
        </>
    )
}
export default BotaoContador;
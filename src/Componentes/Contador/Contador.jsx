import { useState } from "react";



const Contador=()=>{
const[use,useSet]=useState(0)


    const soma=()=>{
        useSet((use)+1)
    }
    const diminui=()=>{
        useSet((use)-1)
    }

    return(
        <>
        <button onClick={diminui}> Menos um </button> {use} <button onClick={soma}>Mais um </button>
        </>
    )
}
export default Contador;
import React from "react";
import { useState } from "react";

const CambioEuro=()=>{
    const[use,setReal]=useState('')
    const[use2,setEuro]=useState('')

        const input=(event)=>{
            if(event.target.name==='Real'){
                setReal (Number(event.target.value))
                setEuro (Number(event.target.value)/5.50)
            }
            if(event.target.name==='Euro'){
                setEuro (Number(event.target.value))
                setReal (Number(event.target.value)*5.50)
            }
        }

    return(
        <>
            <input type="text" name="Real"  value={use} onChange={input} />Reais é igual a  <input type="text" name="Dólar"  value={use2} onChange={input} />Euros 
        </>
    )
}
export default CambioEuro;
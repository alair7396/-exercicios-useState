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
            <h1>Real</h1>
            <input 
            type="text" 
            name="Real" 
            value={use} 
            onChange={input} />
            <h1>Euro</h1>
            <input 
            type="text" 
            name="Euro" 
            value={use2} 
            onChange={input} />
        </>
    )
}
export default CambioEuro;
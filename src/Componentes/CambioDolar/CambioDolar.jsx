import React from "react"
import { useState } from "react"
import'./CambioDolar.css';

const CambioDolar=()=>{
    const[use,setDolar]=useState('')
    const[use2,setReal]=useState('')
     
    const input=(event)=>{
        if(event.target.name==='Real'){
            setReal(Number(event.target.value)) 
            setDolar(Number(event.target.value)/(5))           
    }   
        if(event.target.name==='Dólar'){
            setDolar(Number(event.target.value))  
            setReal(Number(event.target.value)*(5))              
    }        
}
    return(
        <>
            <h1>Real</h1><input 
            type="text" 
            name="Real" 
            value={use2} 
            onChange={input} 
            />
            <h1>Dolár</h1>
            <input 
            type="text" 
            name="Dólar" 
            value={use} 
            onChange={input}  
            />
        </>
    )
}
export default CambioDolar;
import React from "react";
import { useState } from "react";


const CalculoiMC=()=>{
    const[use,setAltura]=useState('')
    const[use2,setPeso]=useState('')
    const[use3,setCalcular]=useState('')

    const input=(event)=>{
        setAltura(event.target.value)
    }
    const input2=(event)=>{
        setPeso(event.target.value)
    }
    const button=()=>{
        setCalcular((use2)/(((use)*2)))
    }
   
    return(
        <>
        <h3>Altura (m):</h3><input type="text" value={use} onChange={input} placeholder="Altura"/>
        <h3>Peso (kg):</h3><input type="text" value={use2} onChange={input2} placeholder="Peso"/>
        <button onClick={button}>Calcular IMC</button>
        
        <div>
           <h4>Resultado: {use3.toFixed(2)}</h4>
           {use3 && use3<=18.5 && <h4>Abaixo do peso.</h4>}
           {use3 && use3<=25 && <h4>Peso normal.</h4>}
           {use3 && use3<=30 && use3>25 && <h4>Sobrepeso.</h4>}
           {use3 && use3>30 && <h4>Obeso.</h4>}
        </div>
        </>
    )
}
export default CalculoiMC;
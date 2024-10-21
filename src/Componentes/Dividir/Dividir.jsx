import React from "react";
import { useState } from "react";
import './Dividir.css';


const Dividir=()=>{
    const[use,setUse]=useState('')
    const[use2,setUse2]=useState('')
    const[use3,setUse3]=useState(0)

    const input=(event)=>{
        setUse(event.target.value)
    }
    const input2=(event)=>{
        setUse2(event.target.value)
    }
    const input3=()=>{
        setUse3(parseFloat(use) / parseFloat(use2))
    }

    return(
        <div className="container">
        <input type="text" value={use} onChange={input} placeholder="Número"/>
        <h1>/</h1>
        <input type="text" value={use2} onChange={input2} placeholder="Número"/>
        <h1>:</h1>
        <button onClick={input3}>Dividir</button>
        <h1>=</h1>
        <h2>{use3}</h2>
        </div>
    )
}
export default Dividir;
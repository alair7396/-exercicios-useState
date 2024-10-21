import React from "react";
import { useState } from "react";
import'./Diminuir.css';

const Diminuir=()=>{
    const[input1,setInput1]=useState('')
    const[input2,setInput2]=useState('')
    const[resultado,setResultado]=useState(0)

        const consumir=(event)=>{
            setInput1(event.target.value)
        }
        const consumir2=(event)=>{
            setInput2(event.target.value)
        }
        const diminuir=()=>{
            setResultado(parseFloat(input1) - parseFloat(input2))

            setInput1('')
            setInput2('')
        }
     return(
        <div className="container">
        <input type="text" value={input1} onChange={consumir} placeholder="Número" />
        <h1>-</h1>
        <input type="text" value={input2} onChange={consumir2} placeholder="Número" />
        <h1>:</h1>
        <button onClick={diminuir}>Subtrair</button>
        <h1>=</h1>
        <h2>{resultado}</h2>
        </div>
     )
}
export default Diminuir;
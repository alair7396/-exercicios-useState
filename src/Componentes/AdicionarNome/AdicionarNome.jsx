import React from "react";
import { useState } from "react";

const AdicionarNome=()=>{
   const[use,setName]=useState('')
   const[use2,setName2]=useState([])

   const input=(event)=>{
        setName(event.target.value)
   }
   const button=()=>{
        setName2([...use2,use])
   }
   
    return(
        <>
        <input type="text" value={use} onChange={input}/>
        <button onClick={button}>Adicionar</button>
        <ul>
            {use2.map((nome,index)=>(
                <li key={index}>
                    {nome}
                </li>
            ))}
        </ul> 
        </>
    )
}

export default AdicionarNome;


import { useState } from "react";

const RemoverNome=()=>{
   const[use,setName]=useState('')
   const[use2,setName2]=useState([])

   const input=(event)=>{
        setName(event.target.value)
   }
   const button=()=>{
        setName2([...use2,use])
        setName('')
        
   }
   const removerItem=(index)=>{
    const newitems=[...use2]
    newitems.splice(index.target.value,1)
    setName2(newitems)
   }
   
    return(
        <>
        <input type="text" value={use} onChange={input} placeholder="Nome"/>
        <button onClick={button}>Adicionar</button>
        <ul>
            {use2.map((nome,index)=>(
                <li key={index}>
                    {nome} <button value={index} onClick={removerItem}>Remover</button>
                </li>
            ))}
        </ul> 
        </>
    )
}

export default RemoverNome;
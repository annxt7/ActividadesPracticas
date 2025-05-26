import React, { useEffect } from "react";
import { useState } from "react";

function TimerThree(){
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log('UseEffect - Montaje(renderizado inicial)');
        const id= setInterval(()=>{
            setCount((prevCount)=>prevCount+1);
        },1000)
        return ()=>{
            console.log('Limpieza- Desmontaje del Componente');
            clearInterval(id);
        }
    },[])
  return (
    <div className="Timer">
      <h2>Temporizador Tres</h2>
 
      <h3>{count}</h3>
    </div>
  );
}
export default TimerThree;
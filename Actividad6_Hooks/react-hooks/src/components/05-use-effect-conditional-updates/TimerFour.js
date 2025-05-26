import React, { use } from "react";
import { useState,useEffect } from "react";

function TimerFour(){
    const[count,setCount]=useState(0);
    useEffect(()=>{
        const id=setInterval(()=>{
            setCount((prevCount)=>prevCount+1);
        },1000);
        return ()=>{
            clearInterval(id);
            console.log('Desmontaje del Componente');
        }
    },[])

    //Añadir un nuevo efecto que se ejecutará cuando el valor 'count' se actualice

    useEffect(()=>{
        console.log('useEffect- en actualización');
        document.title=count
    },[count])
return (
    <div className="Timer">
      <h2>Temporizador Cuatro</h2>
      <h3>{count}</h3>
    </div>
  );
}
 
export default TimerFour;

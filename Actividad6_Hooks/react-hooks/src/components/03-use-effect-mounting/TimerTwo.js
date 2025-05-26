import React, { useEffect, useState } from "react";

function TimerTwo(){
const[count,setCount]=useState(0);
useEffect(()=>{
console.log('useEffect - Montaje (Renderizado inicial)');
const id=setInterval(()=>{
    setCount((prevCount)=>prevCount+1); 
},1000);
 return ()=>{
            console.log('Limpieza- Desmontaje del Componente');
            clearInterval(id);
        }
    },[])   //<-- con [] decimos que solo de ejecute el efecto una vez, después del renderizado inicial

return(
    <div className="Timer">
        <h2>Temporizados Dos</h2>
        <h3>{count}</h3>
    </div>
);
}
export default TimerTwo;
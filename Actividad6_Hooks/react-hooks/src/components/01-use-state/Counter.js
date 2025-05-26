import React from "react";
import { useState } from "react";

function Counter(){
const [count,setCount]=useState(0);
return(
    <div className="Counter">
        <h2>Contador</h2>
        <p>Hiciste click {count} veces</p>
        <button onClick={()=>setCount(count+1)}>+</button>
         <button onClick={()=>setCount(count-1)}>-</button>
    </div>
);

}

export default Counter
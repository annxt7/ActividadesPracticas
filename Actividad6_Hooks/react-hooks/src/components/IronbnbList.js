import { useState,useEffect } from "react";
import axios from "axios";

const apiUrl="https://ironbnb-m3.herokuapp.com/apartments";

function IronbnbList(){
    const[fetching,setFetching]=useState(true);
    const[apartments,setApartments]=useState([]);
    
        useEffect(()=>{
            console.log('UseEffect -Renderizado inicial (Montaje)');
            axios.get(apiUrl).then((response)=>{
                setApartments(response.data);
                setFetching(false);
            })
        },[])
  return (
    <div>
      <h3>Lista de apartamentos</h3>
      {fetching && <p>Cargando ...</p>}
 
      {apartments.map((apt) => {
        return (
          <div key={apt._id} className="card">
            <img src={apt.img} alt="apartment" />
            <h3>{apt.title}</h3>
            <p>Precio: {apt.pricePerDay}</p>
          </div>
        )
      })}
    </div>
  );
}
export default IronbnbList
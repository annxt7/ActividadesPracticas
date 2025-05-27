import { useState,useEffect } from "react";
import axios, { Axios } from 'axios';

function ApartmentsPage() {

const[apartments,setApartments]=useState([])

useEffect(()=>{
    axios
    .get('https://ironbnb-m3.herokuapp.com/apartments')
    .then((response)=>{
        console.log('response.data',response.data);
        setApartments(response.data)
    })
},[])
return(
    <>
    <h3>Lista de apartamentos</h3>
    {apartments.map((apartment)=>(
        <div key={apartment._id} className="card">
            <img src={apartment.img} alt='apartamento'/>
            <h3>{apartment.title}</h3>
            <p>Precio:{apartment.pricePerDay}</p>
        </div>
    ))}
    </>
);
}
export default ApartmentsPage;
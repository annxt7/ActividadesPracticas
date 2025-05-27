import axios from "axios";
import React from "react"; 
import{ useState } from "react";
import {useNavigate} from 'react-router-dom';
function AddApartmentPage() {
    const [headline, setHeadline] = useState('');
    const [price, setPrice] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
    const body = { title: headline, pricePerDay: price }
    axios
        .post("https://ironbnb-m3.herokuapp.com/apartments", body)
        .then((response) => {
            setHeadline("");
            setPrice(1)
          navigate('/')
        })
       
    }
    return (
        <div className="AddApartmentPage">
            <h3>Añadir Nuevo Apartamento</h3>

            <form onSubmit={handleSubmit}>
                <label>Título</label>
                <input
                    type="text"
                    name="headline"
                    onChange={(e) => setHeadline(e.target.value)}
                    value={headline}
                />
                <label>Precio por Día</label>
                <input type="text"
                    name="pricePerDay"
                    onChange={(e) => setPrice(e.target.value)}
                    value={price}
                />
                <button type="submit">Crear Apartamento</button>
            </form>
        </div>
    );
}
export default AddApartmentPage
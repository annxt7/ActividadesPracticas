import Header from '../assets/nav.js';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NewBeer() {
    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirst_brewed] = useState('');
    const [brewers_tips, setBrewers_tips] = useState('');
    const [attenuation_level, setAttenuation_level] = useState('');
    const [contributed_by, setContributed_by] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const body = {
            name:name,
            tagline:tagline,
            description:description,
            first_brewed:first_brewed,
            brewers_tips:brewers_tips,
            attenuation_level:attenuation_level,
            contributed_by:contributed_by
        };

        axios
            .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
            .then((response) => {
                console.log("Cerveza añadida:", response.data);
                navigate('/');
            })
            .catch((error) => {
                console.error("Error al añadir la cerveza:", error);
            });
    };

    return (
        <div className="AddBeerPage">
            <Header />
            <div className='formularioAdd'>
                <form onSubmit={handleSubmit}>
                    <label>Name</label>
                    <br />
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <br />
                    <label>Tagline</label>
                    <br />
                    <input
                        type="text"
                        name="tagline"
                        onChange={(e) => setTagline(e.target.value)}
                        value={tagline}
                    />
                    <br />
                    <label>Description</label>
                    <br />
                    <input
                        type="text"
                        name="description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                    <br />
                    <label>First Brewed</label>
                    <br />
                    <input
                        type="text"
                        name="first_brewed"
                        onChange={(e) => setFirst_brewed(e.target.value)}
                        value={first_brewed}
                    />
                    <br />
                    <label>Brewers Tips</label>
                    <br />
                    <input
                        type="text"
                        name="brewers_tips"
                        onChange={(e) => setBrewers_tips(e.target.value)}
                        value={brewers_tips}
                    />
                    <br />
                    <label>Attenuation Level</label>
                    <br />
                    <input
                        type="number"
                        name="attenuation_level"
                        onChange={(e) => setAttenuation_level((e.target.value))}
                        value={attenuation_level}
                    />
                    <br />
                    <label>Contributed By</label>
                    <br />
                    <input
                        type="text"
                        name="contributed_by"
                        onChange={(e) => setContributed_by(e.target.value)}
                        value={contributed_by}
                    />
                    <br />
                    <button type="submit">Add New</button>
                </form>
            </div>
        </div>
    );
}

export default NewBeer;

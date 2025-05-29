import { useParams } from 'react-router-dom';
import Header from '../assets/nav.js'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function RandomBeer() {
    const { id } = useParams();
    const apiRoute = `https://ih-beers-api2.herokuapp.com/beers/random`
    const [beer, setBeer] = useState({})
    useEffect(() => {
        axios.get(apiRoute).then((response) => {
            setBeer(response.data)
        })
    }, [])
    return (
        <>
            <Header />
            <div className='cervezaRandom'>
                <img src={beer.image_url} />
                <div>
                    <h1>{beer.name}</h1>
                    <h3>{beer.attenuation_level}</h3>
                    <h2>{beer.brewers_tips}</h2>
                    <p>{beer.first_brewed}</p>
                    <p>{beer.description}</p>
                    <p>{beer.contributed_by}</p>

                </div>
            </div>
        </>
    );
}
export default RandomBeer;
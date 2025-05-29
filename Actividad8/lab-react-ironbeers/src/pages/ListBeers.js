import { useEffect, useState } from 'react'
import Header from '../assets/nav.js'
import axios from 'axios'
import { Link } from 'react-router-dom'
const apiRoute = 'https://ih-beers-api2.herokuapp.com/beers'
function ListBeers() {
    const [beers, setBeers] = useState([])
    const [search, setSearch] = useState("");

    useEffect(() => {
        axios.get(apiRoute).then((response) => {
            console.log(response.data)
            setBeers(response.data)
            console.log({ beers })
        })
    }, [])
    useEffect(() => {
    if (search === "") {
      axios
        .get("https://ih-beers-api2.herokuapp.com/beers")
        .then((response) => setBeers(response.data))
        .catch((err) => console.error(err));
    } else {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`)
        .then((response) => setBeers(response.data))
        .catch((err) => console.error(err));
    }
  }, [search]);
    return (

   <>
  <Header />
  <input
        type="text"
        placeholder="Search beers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "90%",
          padding: "10px",
          borderRadius: "20px",
          marginBottom: "20px",
          border: "1px solid #ccc"
        }}
      />
  {beers.map((beer) => (
    <Link to={`../SingleBeer/${beer._id}`} >
    <div key={beer._id} className='CardCerveza'>
      <img src={beer.image_url} alt={beer.name} />
      <div>
        <h4>{beer.name}</h4>
        <h5>{beer.tagline}</h5>
        <p><strong>Created by:</strong>{beer.contributed_by}</p>
      </div>
    </div>
    </Link>
  ))}
</>
    );
}
export default ListBeers;
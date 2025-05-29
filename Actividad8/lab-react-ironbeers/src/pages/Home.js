import React from "react";
import AllBeers from '../assets/beers.png';
import RandomBeer from '../assets/random-beer.png';
import NewBeer from '../assets/new-beer.png';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <>
            <div className="Home">
                <div className="AllBeers">
                    <Link to="/Beers">
                        <img src={AllBeers} />
                    </Link>
                    <h1>All Beers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur eget magna id eleifend. Mauris volutpat orci sit amet nunc cursus dignissim.Maecenas maximus justo sagittis mollis vulputate. Quisque vel odio at orci congue varius. Curabitur placerat libero eros, vel hendrerit massa eleifend et. Nunc hendrerit eu nunc vel finibus. </p>
                </div>
                <div className="RandomBeer">
                    <Link to="/RandomBeer">
                        <img src={RandomBeer} />
                    </Link>
                    <h1>Random Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur eget magna id eleifend. Mauris volutpat orci sit amet nunc cursus dignissim.Maecenas maximus justo sagittis mollis vulputate. Quisque vel odio at orci congue varius. Curabitur placerat libero eros, vel hendrerit massa eleifend et. Nunc hendrerit eu nunc vel finibus. </p>
                </div>
                <div className="NewBeer">
                    <Link to="/NewBeer">
                        <img src={NewBeer} />
                    </Link>
                    <h1>New Beer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur eget magna id eleifend. Mauris volutpat orci sit amet nunc cursus dignissim.Maecenas maximus justo sagittis mollis vulputate. Quisque vel odio at orci congue varius. Curabitur placerat libero eros, vel hendrerit massa eleifend et. Nunc hendrerit eu nunc vel finibus. </p>
                </div>
            </div>
        </>
    );

} export default Home;
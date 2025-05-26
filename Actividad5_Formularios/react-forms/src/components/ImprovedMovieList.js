import { useState } from "react";
import Data from "../movies-data.json";
import ImprovedMovieCard from './ImprovedMovieCard';
import AddMovie from './AddMovie';
import FilterMovies from "./FilterMovies";

function ImprovedMovieList() {
    const [movies, setMovies] = useState(Data);
    const [moviesData, setMoviesData] = useState(Data)
    const addNewMovie = newMovie => {
        const updatedMoviesData = [...moviesData, newMovie];
        const updatedMovies = [...movies, newMovie];
        setMoviesData(updatedMoviesData);
        setMovies(updatedMovies);
    }
   
    /*     Filtar por letra */
    const filterMovieList = str => {
        let filteredMovies
        if (str === 'Todas') {
            filteredMovies = moviesData
        } else {
            filteredMovies = moviesData.filter(movie => {
                return movie.title[0].toLowerCase() === str.toLowerCase()
            });
        }
        setMovies(filteredMovies);
    }
    /*     Boton de borrar película*/
    const deleteMovie = movieId => {
        const filteredMovies = movies.filter(movie => {
            return movie._id !== movieId;
        });
        setMovies(filteredMovies)
    };
/*     Mostrar formulario añadir películas*/
const [showForm,setShowForm]=useState(false)
    const toogleShowForm=()=>{
setShowForm(!showForm);
    }
    /* Mostrar listado de películas o no mostrar */
     const [showMovies, setShowMovies] = useState(true);
    const toggleShowMovies = () => {
        setShowMovies(!showMovies)
    }
    return (
        <>
            <h2>Movie List</h2>
            <button onClick={toogleShowForm}>{showForm ?'Cerrar formulario':'Abrir formulario'}</button>
            {showForm && <AddMovie addMovie={addNewMovie} /> }
            <FilterMovies filterMovies={filterMovieList} />
            <button onClick={toggleShowMovies}>{showMovies ? 'Hide' : 'Show'}</button>
            <div className="cardsBox">
            {showMovies && movies.map(movie => {
                return <ImprovedMovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie} />;
            })}
            </div>
        </>
    );
}
export default ImprovedMovieList;
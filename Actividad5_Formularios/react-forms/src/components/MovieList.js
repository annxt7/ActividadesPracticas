import { useState } from "react";
import Data from "../movies-data.json";

import MovieCard from "./MovieCard";
import AddMovie from './AddMovie';
import FilterMovies from "./FilterMovies";

export default function MovieList() {
    const [movies, setMovies] = useState(Data);
    const [moviesData, setMoviesData] = useState(Data)

    const addNewMovie = newMovie => {
        const updatedMoviesData = [...moviesData, newMovie];
        const updatedMovies = [...movies, newMovie];
        setMoviesData(updatedMoviesData);
        setMovies(updatedMovies);
    }
    /*     Filtar por letra */
    const filterMovieList=str=>{
        let filteredMovies
        if(str==='Todas'){
            filteredMovies=moviesData
        }else{
            filteredMovies=moviesData.filter(movie=>{
                return movie.title[0].toLowerCase()===str.toLowerCase()
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
    return (
        <>
            <FilterMovies filterMovies={filterMovieList}/>
            <AddMovie addMovie={addNewMovie} />
            <h2>Movie List</h2>
            {movies.map(movie => {
                return <MovieCard key={movie._id} movie={movie} clickToDelete={deleteMovie} />;
            })}
        </>
    );
}

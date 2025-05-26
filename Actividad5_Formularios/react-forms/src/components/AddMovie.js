import { useState } from "react";

export default function AddMovie(props) {
    const [title, setTitle] = useState("");
    const [director, setDirector] = useState("");
    const [IMDBRating,setIMDBRating]=useState(5);
    const [hasOscars,setHasOscars]=useState(true);

    const handleTitleInput= e=>setTitle(e.target.value);
    const handleDirectorInput=e=>setDirector(e.target.value);
    const handleRatingInput= e=> setIMDBRating(e.target.value);
    const handleOscarsInput= e=> setHasOscars(e.target.checked);

    const handleSubmit= (e)=>{
        e.preventDefault();
        const newMovie={title,director,IMDBRating,hasOscars};
        console.log("Enviado",newMovie);
        props.addMovie(newMovie)
    }

    return(
        <div className="AddMovie">
            
            <form onSubmit={handleSubmit} className="add-movie-form">
                <h4>Añadir una película</h4>
                <label> Título: </label>
                <input
                type="text"
                name="title"
                value={title}
                onChange={handleTitleInput}
                />
                  <label> Director: </label>
                <input
                type="text"
                name="director"
                value={director}
                onChange={handleDirectorInput}
                />
                  <label> Calificacion IMDB: </label>
                <input
                type="number"
                name="IMDBRating"
                value={IMDBRating}
                onChange={handleRatingInput}
                />
                  <label> Ganó Óscares: </label>
                <input
                type="checkbox"
                name="hasOscars"
                value={hasOscars}
                onChange={handleOscarsInput}
                />
                <br/>
                <button type="submit">Añadir una película +</button>
            </form>
        </div>
    );

}
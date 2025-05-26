import { useState } from "react";

function FilterMovies(props){
    const [firstLetter,setFirstLetter]=useState("Todas");
    const handleSelect=e=>{
        setFirstLetter(e.target.value);
        console.log('Selecionado',e.target.value);
        props.filterMovies(e.target.value);
    }

    return(
<div className="FilterMovies">
    <label>Mostrar películas por primera letra:</label>
    <select value={firstLetter} onChange={handleSelect}>
        <option value='Todas'>Todas</option>
        <option value='A'>A</option>
        <option value='B'>B</option>
        <option value='C'>C</option>
        <option value='D'>D</option>
    </select>
</div>

    );
}
export default FilterMovies;
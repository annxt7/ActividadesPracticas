// App.jsx
import { useState } from 'react';
import './App.css';
import foods from "./foods.json";
import { Card, Col, Button,Input } from 'antd';
import imagen from "../src/images/noHayProductos.png"



function App() {
  //Generar un id
const generarId=()=>{
  return Date.now()+Math.random()
}
  const [comidas, setComidas] = useState(foods.map((food)=>({
    ...food,
    "id": generarId()
  }))

  );
  //Borrar carta
  const deleteFood=(id)=>
  {
  setComidas(comidas.filter((comida)=>comida.id!==id))
  }
  //Boton de formulario añadir
  const[botonValue,setBoton]=useState("Añadir nueva comida")
  const[cssValue,setCss]=useState("Ocultar")
  //Formulario de añadir
 const addComida= (nuevaComida)=>{
  setComidas([...comidas,nuevaComida]);
 };
 //Buscador
const[searchText,setSearchText]=useState("");
const filteredFoods=comidas.filter(comida=>{
const matchesSearch=comida.name.toLocaleLowerCase().includes(searchText.toLowerCase());
return matchesSearch;

 });

  return (
    <div className="App">
      <h1 className='Titulo'>Food List</h1>
       <AddFoodForm 
       onAdd={addComida} generarId={generarId} onCssChange={cssValue} onBoton={botonValue} setBoton={setBoton} setCss={setCss}
       />
       <SearchBar searchText={searchText} setSearchText={setSearchText}/>
       <hr className='lineaSep'></hr>
      <div className="boxAlimentos">
        {filteredFoods.length!==0 && <Listado Productos={filteredFoods} onDelete={deleteFood}/>}
        {filteredFoods.length===0 && <NoProducts/>}
      
      </div>
    </div>
  );
}

export default App;

function Listado({ Productos, onDelete }) {

  return (
    <>
      {Productos.map((producto) =>  (
        <FoodBox key={producto.id} item={producto} onDelete={onDelete} />
      ))}
    </>
  );
}

function FoodBox({item,onDelete}) {

  return (
    <Col>
      <Card key={item.name}
        title={item.name}
        style={{ width: 230, height: 350, margin: 10 }}
      >
        <img src={item.image} height={60} alt="food" />
        
        <p>Calories: {item.calories}</p>
        <p>Servings:{item.servings}</p>
        <p>
          <b>Total Calories: {item.calories * item.servings} </b> kcal
        </p>
        <Button type="primary" onClick={()=>onDelete(item.id)}> Delete </Button>
      </Card>
    </Col>
  );
};
function AddFoodForm({onAdd, generarId ,onCssChange, onBoton, setBoton,setCss}){

const[nameValue,setNameValue]=useState("");
const[imageValue,setImageValue]=useState("");
const[caloriesValue,setCaloriesValue]=useState("");
const[servingsValue,setServingsValue]=useState("");

const handleSend =(e)=>{
e.preventDefault();
if(!nameValue||!imageValue||!caloriesValue||!servingsValue){
  return alert("¡Rellena primero todos lo campos")
};
const nuevaComida={
  "name" : nameValue,
  "calories": caloriesValue,
  'image': imageValue,
  "servings":servingsValue,
  "id":generarId()
};
onAdd(nuevaComida);
console.log("Introduzco los datos")
setNameValue("");
setImageValue("");
setCaloriesValue("");
setServingsValue("");
};
function handleClick(){
  if (onBoton==="Añadir nueva comida"){
    console.log("holaa")
    setBoton("Ocultar formulario")
    setCss("Mostrar")
  }else{
    console.log({onBoton})
    setBoton("Añadir nueva comida");
    setCss("Ocultar")
  }

}

  return(
    <>
    <div className={onCssChange}>
    <h1>Add Food Entry</h1>
    <form onSubmit={handleSend} className='Formulario'>
      <label>
        Name:
      <Input value={nameValue} type="text" onChange={(e)=>setNameValue(e.target.value)} />
      </label>
       <label>
        Image:
      <Input value={imageValue} type="text" onChange={(e)=>setImageValue(e.target.value)} />
      </label>
       <label>
        Calories:
      <Input value={caloriesValue} type="text" onChange={(e)=>setCaloriesValue(e.target.value)} />
      </label>
       <label>
        Servings:
      <Input value={servingsValue} type="number" onChange={(e)=>setServingsValue(e.target.value)} />
      </label>
    <button type='submit'>Add food</button>
    </form>
    </div>
    <button onClick={handleClick} >{onBoton}</button> 
    </>
  );
};
function SearchBar({searchText,setSearchText}){
  return(
    <>
    <h3 >Busca la comida que quieras: </h3>
    <Input type='text'  value={searchText} onChange={(e)=>setSearchText(e.target.value)} className='SearchBar'></Input>
    </>
  );
}
function NoProducts(){
  console.log("Renderiza no products")
return(
  <>
  <div>
   <img src={imagen} alt='Sin productos'/>
  </div>
  </>
);
}

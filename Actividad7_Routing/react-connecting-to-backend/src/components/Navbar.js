import { NavLink } from 'react-router-dom';

function Navbar(){
return( 
<nav>
    <NavLink to='/'>
    <button>Inicio</button>
    </NavLink>
    <NavLink to='/apartments/new'>
    <button>Añadir apartamento</button>
    </NavLink>
</nav>
);
}
export default Navbar
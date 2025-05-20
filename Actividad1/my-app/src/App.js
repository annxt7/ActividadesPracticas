
import './App.css';
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import declarative from "./images/icon1.png";
import components from "./images/icon2.png";
import singleway from "./images/icon3.png";
import imgjsx from "./images/icon4.png";

export default function App() {
  return (
    <>
      <div className="First">
        <div className="Org-header">
          <img className='New-logo' alt="Logo Empresa" src={logo} />
          <img className='New-logo' alt="Nav" src={menu} />
        </div>
        <div className='Main'>
          <h1>Say hello to React Js</h1>
          <p>You will learn how to use<br /> the most popular frontend library,<br /> and become a super Ninja developer.</p>
          <button ><strong>Awesome!</strong></button>
        </div>
      </div>
      <div className='Second'>
        <row className="Fila">
          <div className='Columnas'>
            <img src={declarative} alt="Logodeclarative"></img>
            <h3>Declarative</h3>
            <p className='Logos'>React makes it <br/> painless to create <br/> interactive UIs.</p>
          </div>
          <div className='Columnas'>
            <img src={components}  alt="Logocomponents"></img>
            <h3>Components</h3>
            <p className='Logos'>Build encapsulated <br/> components that <br/> manage their state.</p>
          </div>
          <div className='Columnas'>
            <img src={singleway} alt="Logosingle"></img>
            <h3>Single-Way</h3>
            <p className='Logos'>A set of immutable <br/> values are passes to <br/> the component's.</p>
          </div>
          <div className='Columnas'>
            <img src={imgjsx} alt="LogoJSX"></img>
            <h3>JSX</h3>
            <p className='Logos'>Statically-typed, <br/> designed to run on <br/> modern browsers.</p>
          </div>
        </row>
      </div>
    </>
  );
}


import './App.css';
import { useState } from 'react';
import Counter from './components/01-use-state/Counter';
import Timer from './components/02-use-state-loop/Timer'; 
import TimerTwo from './components/03-use-effect-mounting/TimerTwo';
import TimerThree from './components/04-use-effect-unmounting/TimerThree';
import TimerFour from './components/05-use-effect-conditional-updates/TimerFour';
import IronbnbList from './components/IronbnbList';

function App() {
  const[show,setShow]=useState(true);

  return (
    <div className="App">
      <button onClick={()=>setShow(!show)}>{show ? 'Ocultar': 'Mostrar'}</button>
      {show && <Counter/>}
      {show && <IronbnbList/>}
    </div>
  );
}

export default App;

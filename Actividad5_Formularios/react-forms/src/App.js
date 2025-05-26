
//import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import ImprovedMovieList from './components/ImprovedMovieList';
import Spinner from './components/Spinner';
import { useState } from 'react';

function App() {
  //const [isLoading,setIsLoading]=useState(true)
  const [isLoading, setIsLoading] = useState(false)
  if (isLoading) {
    return <Spinner />;
  }
  else {
    return(<div className="App">
      <MovieList />
    </div>
  )};
  ;
}

export default App;

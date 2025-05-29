import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import RandomBeer from './pages/RandomBeer';
import SingleBeer from './pages/SingleBeer';
import ListBeers from './pages/ListBeers';
import NewBeer from './pages/NewBeer';



import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes >
      <Route path='/' element={<Home />} />
      <Route path='/Beers' element={<ListBeers />} />
      <Route path='/RandomBeer' element={<RandomBeer />} />
      <Route path='/SingleBeer/:id' element={<SingleBeer />} />
      <Route path='/NewBeer' element={<NewBeer />} />
     

    </Routes>
  );
}

export default App;

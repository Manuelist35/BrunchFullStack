import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import DishesMenuScreen from './pages/DishesMenuScreen';
import LocationScreen from './pages/LocationScreen';
import DeliveryScreen from './pages/DeliveryScreen';
import MenuScreen from './pages/MenuScreen';
import CoffeeMenuScreen from './pages/CoffeeMenuScreen';
import MexicanMenuScreen from './pages/MexicanMenuScreen';
import DrinksMenuScreen from './pages/DrinksMenuScreen';


function App() {
  return (
    <>
    <Navbar />
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/home' exact element={<Home/>}/>
        <Route path='/DishesMenuScreen' exact element={<DishesMenuScreen/>}/>
        <Route path='/about' exact element={<About/>}/>
        <Route path='/LocationScreen' exact element={<LocationScreen/>}/>
        <Route path='/delivery' exact element={< DeliveryScreen/>}/>
        <Route path='/MenuScreen' exact element={< MenuScreen/>}/>
        <Route path='/CoffeeMenuScreen' exact element={< CoffeeMenuScreen/>}/>
        <Route path='/MexicanMenuScreen' exact element={< MexicanMenuScreen/>}/>
        <Route path='/DrinksMenuScreen' exact element={< DrinksMenuScreen/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;

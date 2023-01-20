import './App.css';
import { Routes, Route} from 'react-router-dom';
import NavBar from './compounents/NavBar';
import SingalCoktailDetails from './compounents/SingalCoktailDetails';
import Coktails from './compounents/Coktails';
import About from './compounents/About';


function App() {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Coktails/>}>  </Route>
        <Route path='/details/:id' element={<SingalCoktailDetails/>}></Route>
        <Route path='/about' element={<About/>}>  </Route>
      </Routes>    
    </div>
  );
}

export default App;

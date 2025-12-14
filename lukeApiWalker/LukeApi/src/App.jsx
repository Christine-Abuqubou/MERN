
import './App.css';
import Home from './Components/Home';
import CharacterDetails from './Components/CharacterDetails';
import PlanetDetails from './Components/PlanetDetails';
import Search from './Components/Search';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

function App() {
  return (
    <Router>  
      <Search />  
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/planet/:id" element={<PlanetDetails />} />
      </Routes>
    </Router>
  );
}

export default App;

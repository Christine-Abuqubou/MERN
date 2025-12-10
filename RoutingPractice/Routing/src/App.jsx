
import './App.css'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
// import { useParams } from "react-router";
import Home from './Components/Home';
import Words from './Components/Words';
import WordColor from './Components/WordColor';



function App() {
  

  return (
    <>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/words/:word" element={<Words />} />
      <Route path="/words/:word/:color1/:color2" element={<WordColor />} />

    </Routes>

     
    </>
  )
}

export default App

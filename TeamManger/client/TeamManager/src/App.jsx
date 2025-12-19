import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import './App.css'

import Navbar from "./components/Navbar";
import PlayerList from "./pages/PlayerList";
import AddPlayer from "./pages/AddPlayer";
import PlayerStatus from "./pages/PlayerStatus";


function App() {
  

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Navigate to="/players/list"/>}/>
        <Route path="/players/list" element={<PlayerList />}/>
        <Route path="/players/addplayer" element={<AddPlayer />}/>
        <Route path="/status/game/:num" element={<PlayerStatus/>} />


      </Routes>
    
      
    </BrowserRouter>
  )
}

export default App


import React, { useState } from 'react';
import './App.css'
import ToDo from './Components/ToDo'
import List from './Components/List'

function App() {



  const [list, setList] = useState([]);
  

  return (
    <>
     

      <ToDo  setList={setList}/>
        <List list={list}   />
    </>
  )
}

export default App

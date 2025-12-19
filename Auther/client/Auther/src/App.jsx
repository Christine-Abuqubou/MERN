import {useState} from "react";
import './App.css'
import Input from './components/input'
import axios from 'axios'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import AutherList from './components/AutherList'

function App(){
  const navigate=useNavigate()
  const [name,setName]=useState('')
  const [authers,setAuthers]=useState([])
  const [curentId,setCurentId]=useState(0)


  const handleSubmit = (e) =>{
    console.log(name)
    e.preventDefault()
    axios.post('http://localhost:8008/authers', {
      name:name
    })
  }

  const getAll=()=> {
    fetch("http://localhost:8008/authers")
    .then((res) => res.json())
    .then((data) => setAuthers(data))
  }
  getAll()


  const handleUpdate= () =>{
    axios.patch(`http://localhost:8008/authers/${curentId}`,{name:name}).then(()=>{
      setName("")
      navigate("/")
    })
     

  }

  const handleDelete=(id)=>{
    axios.delete(`http://localhost:8008/authers/${id}`).then(()=>
      getAll()
    )
  }
  

  return(
    <>

    <Routes>
      <Route path="/authers/:id" element={<AutherList/>}/>
      <Route path="/authers/:id/update" element={

        <>
        <h1>Update Auther</h1>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="name" value={name} onChange={setName} update={true}/>

          <button  onClick={handleUpdate} type="submit" className="btn btn-primary">
                Update
            </button>
        </form>

        </>
      }/>
      <Route path="/" element={
        <>

        <h1>Auther</h1>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="name" value={name} onChange={setName}/>
          <button type="submit">Submit</button>
          </form>

          <h1>authers</h1>
          {
            authers && authers.map((auther) => (
          <div key={auther._id}>
            <h2>
              <Link to={"/authers/" + auther._id}> {auther.name}</Link>
              <button><Link onClick={() => {
                setCurentId(auther._id)
                setName(auther.name)
                
                }} to={"/authers/" + auther._id + "/update"}>edit</Link></button>
              <button onClick={() => handleDelete(auther._id)}>Delete</button>

            </h2>
            
          </div>
        ))

          }

        </>
      }/>


    </Routes>
    
    
    
    
    
    
    
    
    </>














  )
  }

export default App

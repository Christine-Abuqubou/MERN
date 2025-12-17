import { useState } from 'react'
import './App.css'
import Input from './components/input'
import axios from 'axios'


function App() {
  const [name ,setName] = useState('')
  const[price,setPrice] = useState('')
  const[description,setDescription] = useState('')

  const handleSubmit = (e) => {
    console.log(name,price,description)
    e.preventDefault()
    axios.post('http://localhost:8000/products', {
      name: name,
      price: price,
      description: description
    })
  }


  return (
    <>
      
      <h1>Product</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" value={name} onChange={setName}/>
        <Input type="text" name="price" value={price} onChange={setPrice}/>
        <Input type="text" name="description" value={description} onChange={setDescription}/>
        <button type="submit">Submit</button>
      </form>
      
    </>
  )
}

export default App

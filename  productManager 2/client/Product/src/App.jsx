import { useEffect, useState } from 'react'
import './App.css'
import Input from './components/input'
import axios from 'axios'
import { Link, Routes, Route } from 'react-router-dom'
import ProductList from './components/productList'



function App() {
  const [name ,setName] = useState('')
  const[price,setPrice] = useState('')
  const[description,setDescription] = useState('')

  const [products, setProducts] = useState([]);

  const handleSubmit = (e) => {
    console.log(name,price,description)
    e.preventDefault()
    axios.post('http://localhost:8000/products', {
      name: name,
      price: price,
      description: description
    })
  }

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
      
  }, []);


  return (
    <>
      
      


      <Routes>
        <Route path="/products/:id" element={<ProductList />} />
        <Route path="/" element={
          <>
          <h1>Product</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" value={name} onChange={setName}/>
        <Input type="text" name="price" value={price} onChange={setPrice}/>
        <Input type="text" name="description" value={description} onChange={setDescription}/>
        <button type="submit">Submit</button>
      </form>

      <h1>Products</h1>
      {
        products && products.map((product) => (
          <div key={product.id}>
            <h2>
              <Link to={"/products/" + product._id}> {product.name}</Link>
            </h2>
            
          </div>
        ))
      }
          </>
        } />
      </Routes>


      
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Input from './components/input'
import axios from 'axios'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import ProductList from './components/productList'



function App() {
  const [name ,setName] = useState('')
  const[price,setPrice] = useState('')
  const[description,setDescription] = useState('')

  const [products, setProducts] = useState([]);
  const[currentId,setCurrent]=useState(0)
  const navigate=useNavigate;

  const handleSubmit = (e) => {
    console.log(name,price,description)
    e.preventDefault()
    axios.post('http://localhost:8000/products', {
      name: name,
      price: price,
      description: description
    })
  }

  const getAll=()=> {
    fetch("http://localhost:8000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
      
  }

  getAll()

  const handleUpdate= () =>{
  axios.patch(`http://localhost:8000/products/${currentId}`,{name:name,price:price,description:description}).then(()=>{

    setName("")
    setPrice("")
    setDescription("")
    navigate("/")


  })

   
 }

 const handleDelete=(id)=>{
  axios.delete(`http://localhost:8000/products/${id}`).then(() => getAll())
 }









  return (
    <>
      
      


      <Routes>
        <Route path="/products/:id" element={<ProductList />} />
        <Route path="/products/:id/update" element={
          <>
          <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" name="name" value={name} onChange={setName} update={true}/>
        <Input type="text" name="price" value={price} onChange={setPrice} update={true}/>
        <Input type="text" name="description" value={description} onChange={setDescription} update={true}/>
        
        
            <button  onClick={handleUpdate} type="submit" className="btn btn-primary">
                Update
            </button>
            
        

      </form>


          </>
        } />
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
          <div key={product._id}>
            <h2>
              <Link to={"/products/" + product._id}> {product.name}</Link>
              <button><Link onClick={() => {
                setCurrent(product._id)
                setName(product.name)
                setPrice(product.price)
                setDescription(product.description)
                }} to={"/products/" + product._id + "/update"}>edit</Link></button>
              <button onClick={() => handleDelete(product._id)}>Delete</button>

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

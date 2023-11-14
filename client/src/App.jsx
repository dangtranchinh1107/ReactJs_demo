import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Dogs from './components/Pages/Dogs'
import Cart from './components/Pages/Cart'
import Navbar from './components/Navbar/Navbar'
import axios from 'axios'
import { CartContext } from './Contexts/CartContext'
function App() {
  const [dogs, setDogs] = useState([])
  const [myCart, addToCart] = useState([{}])
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:8088/api");
        setDogs(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [])


  return (
    // khi dùng reactContext thì gom vào trong CartContext
    <CartContext.Provider value={{ myCart, addToCart, total, setTotal }}>
      < Router >
        <Navbar />
        <div className='page-container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/dogs' element={<Dogs dogs={dogs} />} />
            <Route path='cart' element={<Cart />} />
          </Routes>
        </div>
      </Router >
    </CartContext.Provider>
  )
}

export default App

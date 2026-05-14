
import React from 'react'
import {Route, Routes} from'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Contactus from './component/Contactus'
import Product from './component/Product'
function App() {
  return (
    <div>
      
      <Navbar/>
      <h2> main page </h2>
    <Routes>
      <Route path='/about' element={<About/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/contact' element={<Contactus/>}/>
          <Route path='/product' element={<Product/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
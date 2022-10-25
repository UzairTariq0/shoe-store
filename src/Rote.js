import React from 'react';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import Navbar from './Components/Navbar';

function Rote() {
  return (
	<>
        <BrowserRouter>
          <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/about" element={<About/>}/>
                <Route exact path="/product" element={<Product/>}/>
                <Route exact path="/product/:id" element={<ProductItem/>}/>
                <Route path="*" component={()=><h2>404 Not Found</h2>}/>
            </Routes>
        </BrowserRouter>
	</>
  );
}

export default Rote;

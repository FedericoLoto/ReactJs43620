import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home"
import ItemListContainer from "./components/ItemListContainer";
import Description from "./pages/Description";
import Carrito from "./pages/Carrito";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Nosotros from "./pages/Nosotros";
import ProductList from "./components/ProductList";


function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar/>
        <ProductList/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/catalogo" element={<ItemListContainer/>} />
          <Route path="/catalogo/:juego" element={<Description/>} />
          <Route path="/Nosotros" element={<Nosotros/>}/>
          <Route path="/carrito" element={<Carrito/>} />
        </Routes>  
        <Footer/> 
      </BrowserRouter>
 
    </>  
    
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";
import Footer from "./components/Footer";
import Caja from "./components/Caja";

function App() {
  return (
   <>
    <Navbar/>
    <ItemListContainer>
    <Caja valor="$5500">
    </Caja>
    </ItemListContainer>  
    <Footer/>
   </>  
  );
}

export default App;

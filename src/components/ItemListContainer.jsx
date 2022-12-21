import { useState, useEffect } from "react";
import Caja from "./Caja";
import ProductList from "./ProductList";

const ItemListContainer= ()=>{
    const [traer, setTraer] = useState([]);

    return(
        <>            
            <div className="baseCaja">
                {/* <Caja/>
                <Caja/>
                <Caja/>
                <Caja/>
                <Caja/>
                <Caja/>
                <Caja/>
                <Caja/>
                <Caja/>                */}
            </div>
                <ProductList/>
        </>
        )     
};

export default ItemListContainer;
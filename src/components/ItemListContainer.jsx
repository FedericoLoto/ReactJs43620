import { useState, useEffect } from "react";
import Caja from "./Caja";

const ItemListContainer= ()=>{
    const [traer, setTraer] = useState([]);
    
    const traerLista =()=>{    
        setTimeout(()=>{

        } ) 
    }
    return(
        <>            
            <div className="baseCaja">
                <Caja/>
                <Caja/>
                <Caja/>
                <Caja/>
                <Caja/>
                <Caja/>
                <Caja/>
                <Caja/>
                <Caja/>               
            </div>
        </>
        )     
};

export default ItemListContainer;
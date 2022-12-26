import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import ItemListContainer from "../components/ItemListContainer";

    
function Description(){
    const [producto,setProducto]=useState(null);
    const{ id } = useParams();
    console.log('id: ',id);
    useEffect(()=>{
        const obtProducto= <ItemListContainer/>;
        console.log('es: ',obtProducto);
    })
    return(
        <>
        <h1>{producto?.id}</h1>
        </>
        
    )
};
export default Description;
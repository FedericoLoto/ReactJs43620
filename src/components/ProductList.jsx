import { useState } from "react";
import { useEffect } from "react";

const ProductList = () => {
    const [products,setProducts]= useState([]);
    useEffect(() => {
        fetch('https://638fa3d09cbdb0dbe32d7634.mockapi.io/catalogo/catalogo')
        .then((response)=>response.json())       
        .then((response)=>{
            console.log(response);
            setProducts(response);
        })
        .catch(()=>{
            console.error('error')
        })
    }, []);
    
    const renderProducts =()=>{
        return(
            products.map((products)=>{
                <div>
                    <h1>{products.name}</h1>
                    <img src={products.img}/>
                    <h2>{products.price}</h2>
                    <p>{products.description}</p>
                </div>
            })
            )
            
    }
    return(
        renderProducts()
    )
};
export default ProductList;
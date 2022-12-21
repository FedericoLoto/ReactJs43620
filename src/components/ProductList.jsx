import { useState,useEffect } from "react";
import Loader from './Loader'
import ItemCount from "./ItemCount";


const onAdd= (cantidad) =>{
    console.log(`compraste ${cantidad} juegos`);
}
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
            products.map((p)=>
                <div className='caja'>
                    <h1 className='tituloJuego' >{p.name}</h1>
                    <img className='imagenJuego' src={p.img}/>
                    <h2 className='precioJuego'>{p.price}</h2>
                    <p className='precioJuego'>{p.description}</p>
                    <div>
            <ItemCount inicial={1} disponible={10} onAdd={onAdd} />
            </div> 
                </div>
            )
            )
            
    }
    return(
        <>
        {products.length === 0 ? <Loader/> : renderProducts()}
        </>
        )
        
        
};
export default ProductList;
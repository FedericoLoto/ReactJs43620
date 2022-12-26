import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from './Loader'


const onAdd= (cantidad) =>{
    console.log(`compraste ${cantidad} juegos`);
}
const ItemListContainer = () => {
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
            <div className="baseCaja">
                <div className='caja'>
                    <h1 className='tituloJuego' >{p.name}</h1>
                    <img className='imagenJuego' src={p.img}/>
                    <Link to={`/producto/${p.id}`}>Detalles</Link>
                    {/* <h2 className='precioJuego'>{p.price}</h2> */}
                    {/* <p className='precioJuego'>{p.description}</p> */} 
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

export default ItemListContainer;
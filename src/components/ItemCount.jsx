import { useState, useEffect } from "react";

const ItemCount = ({inicial, disponible, onAdd})=>{
    const [contador, setConstador] = useState(parseInt(inicial));
    const resta =()=>{
        setConstador(contador - 1);
    }
    const suma =()=>{
        setConstador(contador + 1);
    }
    useEffect(()=>{
        setConstador(parseInt(inicial));
    },[inicial])

    return(
        
        <>
            <div className="contHome1" >     
                <button className="rns" disabled={contador <= 1} onClick={resta}>-</button>
                <p className="rns">{contador}</p>
                <button className="rns" disabled={contador >= disponible} onClick={suma}>+</button>
            </div>
                
            <div className="contHome2">

                <button className='btnAgregar' disabled={disponible <= 0} onClick={()=>onAdd(contador)}>Agregar</button>
            </div>
        </>            
        
    )
};
export default ItemCount;
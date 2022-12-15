import Mario from '../img/Mario.jpg'
import ItemCount from './ItemCount';

const Caja = ()=>{
    const marioBros= {nombre:"Super Mario 3D", valor:5700};
    const onAdd= (cantidad) =>{
        console.log(`compraste ${cantidad} juegos`);
    }

    return(  
        
        <>
        <div className='caja'>
            <img className='imagenJuego' src={Mario} alt="juego"/>
            <h3 className='tituloJuego'> {`${marioBros.nombre}`}</h3>
            <p className='precioJuego'>${`${marioBros.valor}`}</p>
            <div>
            <ItemCount inicial={1} disponible={10} onAdd={onAdd} />
            </div>           
        </div>               
        </> 
    )     
             
}
export default Caja;
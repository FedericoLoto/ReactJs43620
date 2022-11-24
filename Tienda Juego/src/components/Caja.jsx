import Mario from '../img/Mario.jpg'

const Caja = (props)=>{
    return(  
        <><div className='caja'>
            <img className='imagenJuego' src={Mario} alt="juego"/>
            <h3 className='tituloJuego'>Super Mario</h3>
            <p className='precioJuego'>{props.valor}</p>
            <button className='btnAgregar'>Agregar</button>
            
        </div>               
        </> 
    )     
             
}
export default Caja;
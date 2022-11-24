import Carrito from '../img/Carrito.png'

const CartWidget = ()=>{
    return(
        <>
            <img className='carrito' src={Carrito} alt="botón carrito"/>
            <p className='carritoBtn'>1</p>
        </>
        
    )
};

export default CartWidget;
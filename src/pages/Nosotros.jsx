import Tienda from '../img/Tienda.jpeg';

function Nosotros(){
    return(
        <> 
            <div className="divN">
            <h1 className='n_h1'>Sobre nosotros:</h1>
            <div className='n_div'>
                <h3 className=' n_h3'>Historia de la tienda</h3>
                <img className='n_tienda' src={Tienda} alt="local físico"/>
                <p className='n_p'>Esta página se realizó con el fin de poder salir de vender juegos de una manera física y poder ampliar los horizontes en cuanto a la venta de juegos con el fin de brindar seguridad y calidad en la compra de sus juegos favoritos</p>
            </div>    
            </div>
        </>
    )
};
export default Nosotros;
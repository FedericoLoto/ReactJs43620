import CartContext from './CartContext';

const CartProvider=({ Children })=>{

    const obtUser=()=>{
        return({
            userName: 'ferdekio',
            name: 'Federico Loto',
            country: 'Argentina'
        });
    };
    return(        
        <>
            <CartContext.Provider value={{
                user: obtUser(),
                lang:'es'
            }}>
            { Children }
        </CartContext.Provider>
        </>
    )
};
export default CartProvider;
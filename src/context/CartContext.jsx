import { createContext } from "react";

const CartContext = createContext({
    user: {},
    lang: 'es'
});

export default CartContext;
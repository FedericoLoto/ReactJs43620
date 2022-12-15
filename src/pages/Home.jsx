import { Link } from "react-router-dom";

function Home (){
    return(
        <>
        <img className="imgHome" src="https://www.nintenderos.com/wp-content/uploads/2022/11/juegos-largos.jpg" alt="logojuego" />
        <h1 className="h1Home">Bienvenido a Tienda Juegos</h1>
        <div className="divHome">
            <p className="pHome">Muchos juegos a tu disposición</p>
        </div>
        <div className="divHome2">
            <button className="btnAgregar"><Link className="linkHome" to="/Catalogo">Ver Juegos</Link></button>
        </div>
        </>  
    )
};
export default Home;
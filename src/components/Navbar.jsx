import { Link } from "react-router-dom";
import CartWidget from "./CardWidget";
import Logo from "./Logo";

const Navbar = () =>{
    return(
    <>
        <nav className="navegacion navbar navbar-expand-lg">
            <div className="container-fluid">
                <Link className="nav-link i_nav" to={'/'}><Logo/></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                            <Link className="nav-link i_nav i_links" to="/Catalogo">Cátalogo</Link>                       
                        </li>
                        <li>
                            <Link className="nav-link i_nav i_links" to="/Nosotros">Nosotros</Link>
                        </li>
                        <li>
                            <Link className="nav-link i_nav" to="/Carrito"><CartWidget/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
};

export default Navbar;
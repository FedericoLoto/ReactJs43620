import CartWidget from "./CardWidget";
import Logo from "./Logo";

const Navbar = () =>{
    return(
    <>
        <nav className="navegacion navbar navbar-expand-lg">
            <div className="container-fluid">
                <a className="nav-link i_nav" href="#"> <Logo/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li>
                        <a className="nav-link i_nav i_links" href="#">Juegos Consola</a>
                        </li>
                        <li>
                        <a className="nav-link i_nav i_links" href="#">Juegos Mobile</a>
                        </li>
                        <li>
                        <a className="nav-link i_nav i_links" href="#">Juegos PC</a>
                        </li>
                        <li>
                        <a className="nav-link i_nav" href="#"><CartWidget/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
};

export default Navbar;
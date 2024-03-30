import logo from "../../assets/logo.png"
import { BiCartDownload } from "react-icons/bi";
import "./navbar.css"

function Navbar () {
    return(
        <nav className="navbar">
            <div className="img-logo">
                <img src={logo} className="logo" alt="logo" />
            </div>
            <ul className="navbar-list">
                <li className="navbar-items"><a href="">Inicio</a></li>
                <li className="navbar-items"><a href="">Productos</a></li>
                <li className="navbar-items"><a href="">Contacto</a></li>
            </ul>
            <div className="cart">
            <BiCartDownload size="30px"/>
            <span className="badge">2</span>
            </div>
        </nav>
    )
}

export default Navbar
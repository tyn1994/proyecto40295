import CartWidget from "../CartWidget/CartWidget";
import "./navBar.css";
import {Link} from "react-router-dom"

function NavBar() {
  return (
    <div className="cssNavBar">
        <Link to="/">
            <img src="/logo_react.png" alt="Logo de tienda" width="50px" height="50px"/>
        </Link>

        <ul className="cssOrderListNavbar">
            <li className="cssLi"><Link to="/types/1">Normal</Link></li>
            <li className="cssLi"><Link to="/types/2">Lucha</Link></li>
            <li className="cssLi"><Link to="/types/3">Volador</Link></li>
            <li className="cssLi"><Link to="/types/4">Veneno</Link></li>
            <li className="cssLi"><Link to="/types/5">Tierra</Link></li>
        </ul>

        <div className="cssFullWidth"></div>
        
        <CartWidget />
    </div>
  )
}

export default NavBar
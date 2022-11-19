import CartWidget from "../CartWidget/CartWidget";
import "./navBar.css";

function NavBar() {
  return (
    <div className="cssNavBar">
        <a href="/">
            <img src="/logo192.png" alt="Logo de tienda" width="50px" height="50px"/>
        </a>

        {/* https://pokeapi.co/api/v2/type/ */}

        <ul className="cssOrderListNavbar">
            <li className="cssLi"><a href="/">Normal</a></li>
            <li className="cssLi"><a href="/">Lucha</a></li>
            <li className="cssLi"><a href="/">Volador</a></li>
            <li className="cssLi"><a href="/">Veneno</a></li>
            <li className="cssLi"><a href="/">Tierra</a></li>
        </ul>

        <div className="cssFullWidth"></div>
        
        <CartWidget />
    </div>
  )
}

export default NavBar
import { Link, NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link className="nameStore" to="/">
        <h1>Store's name</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink className={"navList"} to="/category/electronicos">
              Electrónicos
            </NavLink>
          </li>
          <li>
            <NavLink className={"navList"} to="/category/ropa">
              Ropa
            </NavLink>
          </li>
          <li>
            <NavLink className={"navList"} to="/category/electrodomesticos">
              Electrodomésticos
            </NavLink>
          </li>
          <li>
            <NavLink className={"navList"} to="/category/juguetes">
              Juguetes
            </NavLink>
          </li>
          <li>
            <NavLink className={"navList"} to="/category/deportes">
              Deportes
            </NavLink>
          </li>
          <li>
            <NavLink className={"navList"} to="/category/accesorios">
              Accesorios
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget/>
    </header>
  )
}

export default NavBar
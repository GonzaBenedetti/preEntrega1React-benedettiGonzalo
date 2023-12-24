import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
        <div>
            <img src="./public/logo.png" alt="logo E-commerce" />
            <ul>
                <li>Categories</li>
                <li>Shop</li>
                <li>Offers</li>
            </ul>
        </div>
        <ul>
            <li><CartWidget/></li>
            <li className="signIn">Sign in</li>
        </ul>
    </nav>
  )
}

export default NavBar
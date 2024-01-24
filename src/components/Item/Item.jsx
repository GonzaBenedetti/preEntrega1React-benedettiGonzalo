import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({id, nombre, precio, imagen}) => {
  return (
      <div className="cardProduct">
          <h3>{nombre}</h3>
          <img src={imagen} alt={nombre} />
          <p>Precio: ${precio}</p>
          <Link to={`./item/${id}`}>Details</Link>
      </div>
  )
}

export default Item
import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, imagen}) => {
  return (
    <div className='itemContainer'>
      <h2> {nombre} </h2>
      <p>ID: {id} </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto ea eum in consequatur nesciunt dolores nam, fugiat eligendi ipsa esse quod voluptatem accusamus facere natus! Numquam expedita ut repellendus inventore!</p>
      <img src={imagen} alt={nombre} />
      <h3 className='priceDetail'>${precio}</h3>
    </div>
  )
}

export default ItemDetail
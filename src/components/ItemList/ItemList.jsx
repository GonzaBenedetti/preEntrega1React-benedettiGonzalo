import Item from '../Item/Item';
import "./ItemList.css";

const ItemList = ({products}) => {
  return (
    <div className='productsContainer'>
        {products.map(prod => <Item key={products.id} {...prod}/>)}
    </div>
  )
}

export default ItemList
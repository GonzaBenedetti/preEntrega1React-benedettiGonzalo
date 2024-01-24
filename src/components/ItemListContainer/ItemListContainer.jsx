import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import {getProduct, getProductCategory} from '../../asyncmock'
import './ItemListContainer.css'

const ItemListContainer = () => {
  const [product, setProduct] = useState([]);

  const {idCategory} = useParams();

  useEffect(() => {
    const productsFunction = idCategory ? getProductCategory : getProduct;

    productsFunction (idCategory)
    .then(res => setProduct(res))
    .catch(err => console.log(err))

  }, [idCategory])

  return (
    <>
      <h2>My Products</h2>
      <ItemList products={product}/>
    </>
  )
}

export default ItemListContainer
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getAProduct } from "../../asyncmock";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {idItem} = useParams();

    useEffect(() => {
        getAProduct (idItem)
            .then(res => setProduct(res))
    }, [idItem]);

  return (
    <>
        <ItemDetail {...product}/>
    </>
  )
}

export default ItemDetailContainer
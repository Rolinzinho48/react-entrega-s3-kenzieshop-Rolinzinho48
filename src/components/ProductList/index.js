
import {useSelector} from 'react-redux'
import Product from '../Product'

function ProductList(){

    const productList = useSelector((state) => state.productList)

    return(
        <>
         {
          productList.map((e,index)=>(
            <Product key={index} name={e.name} price={e.price} img = {e.image} btn={'Adicionar'}></Product>
          ))
        }
        </>
    )
}

export default ProductList
import { List } from './styled'
import {useSelector} from 'react-redux'
import Product from '../Product'

function ProductList(){

    const productList = useSelector((state) => state.productList)

    return(
          <List>
            {
              productList.map((e,index)=>(
                <Product key={index} name={e.name} price={e.price} image = {e.image} btn={'Adicionar'}></Product>
              ))
            }
          </List>
    )
}

export default ProductList
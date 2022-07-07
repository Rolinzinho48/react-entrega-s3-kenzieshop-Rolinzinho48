import {useDispatch} from 'react-redux'
import { ProductContent } from './styled'

function Product({name,price,image,btn}){

    const dispatch =useDispatch()

    const obj = {
        name:name,
        price:price,
        image:image
    }

    return(
    
        <ProductContent>
        
            <img src={image}/>
            <span>{name}</span>
            <h1>R${price},00</h1>
            {
                btn==="Adicionar"?
                <button onClick={(e)=>dispatch({ type: '@product/ADD',payload:obj})}>{btn}</button>:
                <button onClick={(e)=>dispatch({ type: '@product/REMOVE',payload:name})}>{btn}</button>
            }
        </ProductContent>
        
    )
}

export default Product
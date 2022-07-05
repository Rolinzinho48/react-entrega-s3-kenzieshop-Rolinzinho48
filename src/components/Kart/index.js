
import {useSelector} from 'react-redux'
import Product from '../Product'

function Kart(){

    const kart = useSelector((state) => state.kart)

    console.log(kart)

    return(
        <>
         {
          kart.map((e,index)=>(
            <Product key={index} name={e.name} price={e.price} img = {e.image} btn={'Remover'}></Product>
          ))
        }
        </>
    )
}

export default Kart
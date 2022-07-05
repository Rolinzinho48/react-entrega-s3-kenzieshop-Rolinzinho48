import {useDispatch} from 'react-redux'

function Product({name,price,img,btn}){

    const dispatch =useDispatch()

    const obj = {
        name:name,
        price:price,
        image:img
    }

    return(
        <>
            <img src={img}/>
            <span>{name}</span>
            <h1>{price}</h1>
            {
                btn=="Adicionar"?
                <button onClick={(e)=>dispatch({ type: '@product/ADD',payload:obj})}>{btn}</button>:
                <button onClick={(e)=>dispatch({ type: '@product/REMOVE',payload:name})}>{btn}</button>
            }
        </>
    )
}

export default Product
import { ADD_PRODUCT,REMOVE_PRODUCT,GET_SUM } from "./actionsType";

const Kart = (state=[],action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            return state.concat(action.payload);
        case REMOVE_PRODUCT:
            const arr = state.filter((e)=>{
                return e.name !== action.payload
            })
            return arr
        case GET_SUM:
            let sum = 0
            
            return sum

        default:
            return state
    }
}

export default Kart
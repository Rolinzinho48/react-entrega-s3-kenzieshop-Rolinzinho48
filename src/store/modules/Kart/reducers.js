import { ADD_PRODUCT,REMOVE_PRODUCT } from "./actionsType";

const Kart = (state=[],action)=>{
    switch(action.type){
        case ADD_PRODUCT:
            return state.concat(action.payload);
        case REMOVE_PRODUCT:
            const arr = state.filter((e)=>{
                return e.name !== action.payload
            })
            return arr

        default:
            return state
    }
}

export default Kart
import { Typee } from "./Typee";

export const initialstate={
    data:[]
}


export const Reducerrr=(state=initialstate,{type,payload})=>{
    switch (type) {
        case Typee.add:
            return {
               ...state,
               data:[...state.data,payload]
            }
            
          
    
        default:
            return state
    }
}
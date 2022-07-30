import { Type } from "./Reducer4Type";

export const InitiState={
    data:[],
    data2:[]
}

export const reduser=(state=InitiState,{type,payload})=>{
    switch (type) {
        case Type.add:
            return{
                ...state,
                data:[...state.data,payload]
            }
        case Type.edit:
            return {
                ...state,
                data:state.data.map((val)=>val.id===payload.id?payload:val)
            }
        case Type.delete:
            return{
                ...state,
                data:state.data.filter((val)=>val.id !== payload)
            }
        case Type.add2:
            return{
                ...state,
                data2:[...state.data2,payload]
            }
        case Type.edit2:
            return{
                ...state,
                data2:state.data2.map((val)=>val.id===payload.id?payload:val)
            }
        case Type.delete2:
            return{
                ...state,
                data2:state.data2.filter((val)=>val.id!== payload)
            }
        default:
           return state
    }
}
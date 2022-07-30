import { actionTypes } from "./actionType/ActionTypes";


export const initialState={
    data:[
        {
            id:1,
            name:'Bahrom'
        }
    ],
    data2:[
        {
            id:1,
            name:'Bahrom'
        },
        {
            id:2,
            name:'Bahrom2222'
        },
        {
            id:3,
            name:'Bahrom33333333'
        },
    ],
    inputvalue:0
}

export const reducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case actionTypes.add:
          return{
            ...state,
            data:[...state.data,payload]
          }
       case actionTypes.delete:
        const datafilter = state.data.filter((val)=>val.id !== payload)
        return{
            ...state,
            data:datafilter
        }
        case actionTypes.add2:
            return{
                ...state,
                data2:[...state.data2,payload]
            }
        case actionTypes.delete2:
            const datafilter2 = state.data2.filter((val)=>val.id!==payload)
            return{
                ...state,
                data2:datafilter2
            }
        case actionTypes.incr:
         
            return{
                ...state,
                inputvalue:state.inputvalue +1
            }
        case actionTypes.decr:
      
            return{
                ...state,
                inputvalue:state.inputvalue -1
            }
    
        default:
            return state;
    }
}



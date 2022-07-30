import { actionTypes } from "../actionType/ActionTypes";

export const add =(data)=>{
    return{
        type:actionTypes.add,
        payload:data
    }
}
export const deletefun =(data)=>{
    return{
        type:actionTypes.delete,
        payload:data
    }
}
export const add2fun=(data)=>{
    return{
        type:actionTypes.add2,
        payload:data
    }
}
export const deletefun2=(data)=>{
    return{
        type:actionTypes.delete2,
        payload:data
    }

}
import { Typee } from "./Typee"

export const add =(val)=>{
    return{
        type:Typee.add,
        payload:val
    }
}
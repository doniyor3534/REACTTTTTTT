export const initialstate2={
    data2:[
        {id:0,
        name:'dddd'}
    ]
}

export const Reduser2=(state=initialstate2,action)=>{
    const  {type,payload}=action
    switch (type) {
        case 'add':
            return{
                ...state,data2:[...state.data2,payload]
            }
           
        case 'delete':
            const del = state.data2.filter((val)=>val.id !== payload)
            return{
                ...state,
                data2:del
            }
       
    
        default:
           return state
    }
}
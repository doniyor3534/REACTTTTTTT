export const initialstate= {
    data :[
        {id:0,name:'ali'}
    ],
    
}

export const Reducer=(state=initialstate,action)=>{
    const {type,payload}= action;
    switch (type) {
        case 'add':
            return{
                ...state,
                data:[...state.data,payload]
            };
        case 'delete':
            const del = state.data.filter((val)=>val.id!== payload)
            return{
                ...state,
                data:del
            }
           
    
        default:
            return state
    }
}
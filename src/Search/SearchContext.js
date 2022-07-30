import React,{useState} from "react";

export const SearchContext= React.createContext()

const SearchContextProvider=({children})=>{
    const [data]=useState([
        {
            id:0,
            name:'aaaaaa'
        },
        {
            id:1,
            name:'bbbbbbbb'
        },
        {
            id:2,
            name:'ddddddd'
        },
        {
            id:3,
            name:'ccccccc'
        },
        {
            id:4,
            name:'eeeeee'
        },
        {
            id:5,
            name:'ggggggggg'
        },
    ])
    const [search,setSearch]=useState('')
    const [tab,setTab]=useState(1)
    return(
        <SearchContext.Provider value={{data,search,setSearch,tab,setTab}}>
             {children}
      </SearchContext.Provider>
    )
}
export default SearchContextProvider ;
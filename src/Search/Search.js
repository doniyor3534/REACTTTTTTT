import React, { useContext } from 'react';
import { SearchContext } from './SearchContext';

const Search = () => {
  const {data,search,setSearch,tab,setTab}=useContext(SearchContext)
    return (
        <div>
            <form >
                <input type="text" placeholder='search' onChange={(e)=>setSearch(e.target.value)}/>
            </form>
            <div className="cards">
                {
                    search ==='' ?
                    data.map((val)=>(
                        <div className="card" key={val.id}>
                            <h1>{val.name}</h1>
                        </div>
                    ))
                    : <>
                       {
                        data.filter((ser)=>{
                            return ser.name.toLocaleLowerCase().indexOf(search) !== -1
                        }).length > 0 ?
                        data.filter((ser)=>{
                            return ser.name.toLocaleLowerCase().indexOf(search) !== -1
                        }).map((val)=>(
                            <div className="card" key={val.id}>
                                <h1>{val.name}</h1>
                            </div>
                        ))
                        :'topilmadi'
                    }
                    </>
                }
            </div>
            <button className='btn' onClick={()=>setTab(1)}>1</button>
            <button className='btn' onClick={()=>setTab(2)}>2</button>
            <button className='btn' onClick={()=>setTab(3)}>3</button>
            {
                tab=== 1 ? <h1>bir</h1>
                : tab=== 2 ?  <h1>ikki</h1>
                : tab=== 3 ? <h1>uch</h1>
                :'hjfhfhh'
            }
            
          
            
        </div>
    );
};

export default Search;
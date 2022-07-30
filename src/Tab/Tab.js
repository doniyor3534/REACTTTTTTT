import React, { useState } from 'react';

const Tab = () => {
    const [tab,setTab]=useState(1)
    return (
        <div>
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

export default Tab;
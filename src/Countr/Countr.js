import React, { useState } from 'react';

const Countr = () => {
    const [count,setCount]=useState(0);
    const [data,setData]=useState([
        {
            id:0,
            name:'telefon',
            price:10,
            count:0
        },
        {
            id:1,
            name:'planshet',
            price:300,
            count:0
        },
        {
            id:2,
            name:'kampyuter',
            price:500,
            count:0
        },
    ])
    const productAdd=(id)=>{
        setData(data.map((val)=>val.id === id ? {...val,count:val.count +1} :val))
    }
    const productRemove=(id)=>{
        setData(data.map((val)=>{ return val.id === id ? {...val,count:val.count >0 ? val.count -1 :0}:val}))
    }
    const cardprice = data.reduce((a,c)=>a+c.price*c.count,0)
    return (
        <>
            {/* <button className='btn' onClick={()=>setCount(count +1)}>+</button>
            <button className='btn'>{count}</button>
            <button className='btn'  onClick={()=>setCount(count > 0 ? count -1 : 0)}>-</button> */}

            <hr />
            <div className="cards">
            <h1>umumiy summa: {cardprice} $ </h1>
            <hr />
                {
                    data.map((val)=>(
                        <div className="card" key={val.id}>
                            <h1>nomi:{val.name}</h1>
                            <p>narxi:{val.price} $</p>
                            <p>soni: {val.count} $</p>
                          
                            <div>
                                <button className='btn' onClick={()=>productAdd(val.id)}>+</button>
                                <button className='btn'>{val.count}</button>
                                <button className='btn'  onClick={()=>productRemove(val.id)}>-</button>
                            </div>
                            <h4>productAll: {val.price * val.count} $</h4>
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Countr;
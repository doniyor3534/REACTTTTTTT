import React,{useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { DataContext } from './DataContext';


const List = () => {
    const path = useNavigate()
    const {data,daleteproduct}=useContext(DataContext)

    return (
        <div>
            <h1>Crud</h1>
            <button onClick={()=>path('/add')}className='btn'>Add</button>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                        <th>color</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((val,i)=>(
                            <tr key={val.id}>
                                <th>{i +1}</th>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>
                                    <div style={{width:'50px',height:'50px',background:val.color}}></div>
                                </td>
                                <td>
                                    <button onClick={()=>path(`/edit/${val.id}`)}className='btn'>edit</button>
                                    <button onClick={()=>daleteproduct(val.id)}className='btn'>dalete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default List;
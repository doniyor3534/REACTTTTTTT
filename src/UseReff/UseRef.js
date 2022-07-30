// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';



// const UseRef = () => {
//     const path =useNavigate
//     const ref =useRef()
//     const [play,setplay]=useState(false)
//     let time;
//     useEffect(()=>{
//         setInterval(() => {
//             console.log(ref.current.currentTime);
//             if(ref.current.ended){
//                 alert('tugadi')
//                 clearInterval(time)
//             }
//         }, 1000);
//     },[])
//     const player=()=>{
//         console.log(ref);
//         if(play){
//             ref.current.pause();
//             setplay(!play)   
          
//         }else{
//             ref.current.play()
//             setplay(!play)
//             time = setInterval(player,1000)
//         }
  
//     }
//     return (
//         <div>
//             <button onClick={()=>path('/')}className='btn'>Back</button>
//            <div className="vidio">
//             <video src="./img/vidio4.mp4" ref={ref} controls></video>
//             <button onClick={player} className="btn">play</button>  
//            </div>
//         </div>
//     );
// };

// export default UseRef;
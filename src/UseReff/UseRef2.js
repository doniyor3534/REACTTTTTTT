import React, { useRef, useState } from 'react';

const UseRef2 = () => {
    const ref =useRef();
    const [play,setPlay]=useState(false)
    const [input,setInput]=useState(0)
    let time;
    const plays=()=>{
        if(ref.current.ended){
            alert('tugadi')
            clearInterval(time)
        }else{
            setInput((ref.current.currentTime / ref.current.duration)*100)
        }
    }
    const playfun=()=>{
        if(play){
            ref.current.pause()
            setPlay(!play)
        }else{
            ref.current.play()
            setPlay(!play)
            time =setInterval(plays,1000)
        }
    }
    const playTime=(e)=>{
        console.log(e.target.value)
        ref.current.currentTime =(ref.current.duration/100)*e.target.value ;
        setInput(e.target.value)
    }
    return (
        <div>
            <div className="vidio">
                <video src="./img/vidio4.mp4" ref={ref} controls ></video>
                <button onClick={playfun} className="btn">play</button>  
            </div>
            <input type="range" value={input}  onChange={playTime} className="inputrange"/>
        </div>
    );
};

export default UseRef2;
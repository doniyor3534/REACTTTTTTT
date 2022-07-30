import axios from 'axios';


const URL = "https://community-open-weather-map.p.rapidapi.com/weather";


export const FeatWeatherfun = async(query)=>{
    const {data}= axios.get(URL,{
        params:{
            q:query,
            units:'metric',
           
        }
    })
    return data
}
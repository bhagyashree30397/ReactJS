import { React,useEffect,useState } from "react";
import axios from 'axios';

function Tempapp(){
    const [city,setCity]= useState("");
    const[cityInfo,setCityInfo]=useState(null);
    const handleOnChange=(event)=>{
        setCity(event.target.value);
    }
    useEffect(()=>{
        const weatherData=()=>{
           axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=024a2baac6364f7af6bda45438a7fe80`)
           .then((response)=> setCityInfo(response.data)).catch((err)=>console.log(err))
        }
        weatherData();
    },[city])
    console.log("cityInfo",cityInfo)
    return(
        <>
        <div>
        <input type="search" name="city" onBlur={handleOnChange}/>
        </div>
        <div>
        {cityInfo?.name}
        <br/>
        Temp- {cityInfo?.main.temp}
        </div>
        </>
    )
}

export default Tempapp;
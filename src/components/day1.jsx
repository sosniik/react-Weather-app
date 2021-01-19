import React from 'react';
import { useState } from 'react'
import { useEffect} from 'react'
//import Day from './Day.jsx'


export default function Day1(props){
    const [weather, setWeather] = useState(null)
useEffect(
  () => {
    fetch('https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&appid=8508a7c28350e562ec59a3d1a2bb6ee2&units=metric')
        .then(response => response.json())
        .then((data) => {
            setWeather(data)
        })
  },
  [],
)
if(!weather){ //conditionnal rendering
    return <p></p>
  }else{
    console.log(weather.daily)
    return (
      
        <div>
            <p>Check more informations :</p>
            <p>-Humidity : {weather.daily[0].humidity}</p>
            <p>-Pressure : {weather.daily[0].pressure}</p>
            <p>-Wind speed : {weather.daily[0].wind_speed}</p>
        </div>
    )
  }
}
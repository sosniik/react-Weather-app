import React from 'react'
import{useParams} from 'react-router-dom'
import { useState } from 'react'
import { useEffect} from 'react'
import './DayDetails.css'
import Hours from './Hours.jsx';
function gethours(dt){
  let hours = (new Date(dt*1000)).getHours()
  return hours+" H"
}
export default function DayDetails(){
    
        const { nDay } = useParams();

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
    
    return(
        <div className="Informations">
          <Hours
          hours={gethours(weather.hourly[0].dt)}
          image={`http://openweathermap.org/img/wn/${weather.hourly[0].weather[0].icon}.png`}
          label1={weather.hourly[0].temp}
          />
          <Hours
          hours={gethours(weather.hourly[1].dt)}
          image={`http://openweathermap.org/img/wn/${weather.hourly[1].weather[0].icon}.png`}
          label1={weather.hourly[1].temp}
          />

          <Hours
          hours={gethours(weather.hourly[2].dt)}
          image={`http://openweathermap.org/img/wn/${weather.hourly[2].weather[0].icon}.png`}
          label1={weather.hourly[2].temp}
          />
          <Hours
          hours={gethours(weather.hourly[3].dt)}
          image={`http://openweathermap.org/img/wn/${weather.hourly[3].weather[0].icon}.png`}
          label1={weather.hourly[3].temp}
          />
          <Hours
          hours={gethours(weather.hourly[4].dt)}
          image={`http://openweathermap.org/img/wn/${weather.hourly[4].weather[0].icon}.png`}
          label1={weather.hourly[4].temp}
          />
          <Hours
          hours={gethours(weather.hourly[5].dt)}
          image={`http://openweathermap.org/img/wn/${weather.hourly[5].weather[0].icon}.png`}
          label1={weather.hourly[5].temp}
          />
          <Hours
          hours={gethours(weather.hourly[6].dt)}
          image={`http://openweathermap.org/img/wn/${weather.hourly[6].weather[0].icon}.png`}
          label1={weather.hourly[6].temp}
          />
          <Hours
          hours={gethours(weather.hourly[7].dt)}
          image={`http://openweathermap.org/img/wn/${weather.hourly[7].weather[0].icon}.png`}
          label1={weather.hourly[7].temp}
          />
          <Hours
          hours={gethours(weather.hourly[8].dt)}
          image={`http://openweathermap.org/img/wn/${weather.hourly[8].weather[0].icon}.png`}
          label1={weather.hourly[8].temp}
          />
          <Hours
          hours={gethours(weather.hourly[9].dt)}
          image={`http://openweathermap.org/img/wn/${weather.hourly[9].weather[0].icon}.png`}
          label1={weather.hourly[9].temp}
          />        
          <div>
            <p>Check more informations :</p>
            <p>-Humidity : {weather.daily[nDay].humidity} g/m3</p>
            <p>-Pressure : {weather.daily[nDay].pressure} Pa</p>
            <p>-Wind speed : {weather.daily[nDay].wind_speed} km/h</p>
            </div>
        </div>
    )
  }
}
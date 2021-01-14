import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Day from './Day.jsx';
import './App.css';
import Home from '/Users/leolemercier/Documents/cours_efrei/weather_app/weather/src/components/Home.jsx';
import About from '/Users/leolemercier/Documents/cours_efrei/weather_app/weather/src/components/About.jsx';
import { useState } from 'react'
import { useEffect} from 'react'
/*
const name = document.getElementById('name')
    fetch("http://api.openweathermap.org/data/2.5/weather?q=paris&appid=8508a7c28350e562ec59a3d1a2bb6ee2")
    .then(res => res.json())
    .then(data => console.log(data))
    */

   function timestamps(dt){
    const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    let day = (new Date(dt*1000)).getDay()
    //console.log(day)
    //console.log(days[day-1])
    day=day-1
    if(typeof days[day] === 'undefined'){
      day = 6
    }
    console.log(days[day-1])
    return days[day]
    }

  
function App() {

    
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


  //console.log(weather.daily[0])
    //name.src =data[0].url
  //https://i.pinimg.com/originals/d9/d2/82/d9d282bfd1842ef06e706a12679e7e49.jpg


  if(!weather){ //conditionnal rendering
    return <p></p>
  }else{
  
  console.log(weather.daily)
  console.log(Home())
    return (
      <Router>
      <div>
        <header className="App-header">
        </header>
        <div className='weatherList'>
        <Day 
          day={timestamps(weather.daily[0].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}.png`}
          label1={weather.daily[0].temp.min}
          label2={weather.daily[0].temp.max}
          texte = "More informations"
          inf ='dd '
        />
  
        <Day 
          day={timestamps(weather.daily[1].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}.png`}
          label1={weather.daily[1].temp.min}
          label2={weather.daily[1].temp.max}
          texte = "More informations"
          
        />

        <Day 
          day={timestamps(weather.daily[2].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}.png`}
          label1={weather.daily[2].temp.min}
          label2={weather.daily[2].temp.max}
        />
  
        <Day 
         day={timestamps(weather.daily[3].dt)}
         image={`http://openweathermap.org/img/wn/${weather.daily[3].weather[0].icon}.png`}
         label1={weather.daily[3].temp.min}
         label2={weather.daily[3].temp.max}
        />

        <Day 
          day={timestamps(weather.daily[4].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[4].weather[0].icon}.png`}
          label1={weather.daily[4].temp.min}
          label2={weather.daily[4].temp.max}
        />

        <Day 
          day={timestamps(weather.daily[5].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[5].weather[0].icon}.png`}
          label1={weather.daily[5].temp.min}
          label2={weather.daily[5].temp.max}
        />

        <Day 
          day={timestamps(weather.daily[6].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[6].weather[0].icon}.png`}
          label1={weather.daily[6].temp.min}
          label2={weather.daily[6].temp.max}
        />
        
      </div>
      </div>
      </Router>
    );
  }
}


export default App;



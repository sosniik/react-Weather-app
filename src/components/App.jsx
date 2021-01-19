import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Day from './Day.jsx';
import Day1 from './day1.jsx'
import Day2 from './day2.jsx'
import './App.css';
import { useState } from 'react'
import { useEffect} from 'react'
import logo from "/Users/leolemercier/Documents/cours_efrei/weather_app/weather/src/components/weatherIMG.jpg"

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

  if(!weather){ //conditionnal rendering
    return <p></p>
  }else{
  
  console.log(weather.daily)

    return (
      <Router>
      <div className="app">
      
        <header className="App-header">
        <img src={logo} className="logo" alt="logo"/>
        <p className="text">Developed by Léo from 💙  </p>
        </header>

        <div className='weatherList'>
        <Day 
          day={timestamps(weather.daily[0].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}.png`}
          label1={weather.daily[0].temp.min}
          label2={weather.daily[0].temp.max}
          dayweek = "day1"
        />

        <Day 
          day={timestamps(weather.daily[1].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}.png`}
          label1={weather.daily[1].temp.min}
          label2={weather.daily[1].temp.max}
          dayweek = "day2"
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
      
      <Switch>
        <Route path="/day1" exact component={Day1} />
        <Route path="/day2" exact component={Day2} />
      </Switch>
  
      </Router>
      
    );
  }
}


export default App;



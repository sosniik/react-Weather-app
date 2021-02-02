import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Day from './Day.jsx';
import './App.css';
import TopNav from './TopNav.jsx'
import DayDetails from './DayDetails'
import { useState } from 'react'
import { useEffect} from 'react'
//import logo from '/Users/leolemercier/Documents/cours_efrei/weather_app/weather/src/img/logo.png'
import Footer from './Footer.jsx'
import Toggle from './Toggle.jsx'
import Child from './Child.jsx'
import SearchBar from './searchBar'

function getCurrentDate(separator='.'){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  
  return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  }



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

  
function App(props) {

    
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
  console.log("voici un test props ")
  console.log(weather.daily)
    return (
      <Router>
      <div className="app">
      
        <header className="App-header">
        <TopNav/>
        {/* <img src={logo} className="logo" alt="logo"/> */}
        <p className="text">Developed by Léo from 💙  </p>
        
        <SearchBar
        item="efrei Paris"
        />

        <p>Current date : {getCurrentDate()}</p>
        </header>
        <div>
          {/* <p>coucou {SearchBar(text)}</p> */}
        </div>
        <div className='weatherList'>
        <Day 
          day={timestamps(weather.daily[0].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}.png`}
          label1={weather.daily[0].temp.min}
          label2={weather.daily[0].temp.max}
          dayweek = "0"
        />

        <Day 
          day={timestamps(weather.daily[1].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}.png`}
          label1={weather.daily[1].temp.min}
          label2={weather.daily[1].temp.max}
          dayweek = "1"
        />

        <Day 
          day={timestamps(weather.daily[2].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}.png`}
          label1={weather.daily[2].temp.min}
          label2={weather.daily[2].temp.max}
          dayweek = "2"
        />
  
        <Day 
         day={timestamps(weather.daily[3].dt)}
         image={`http://openweathermap.org/img/wn/${weather.daily[3].weather[0].icon}.png`}
         label1={weather.daily[3].temp.min}
         label2={weather.daily[3].temp.max}
         dayweek = "3"
        />

        <Day 
          day={timestamps(weather.daily[4].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[4].weather[0].icon}.png`}
          label1={weather.daily[4].temp.min}
          label2={weather.daily[4].temp.max}
          dayweek = "4"
        />

        <Day 
          day={timestamps(weather.daily[5].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[5].weather[0].icon}.png`}
          label1={weather.daily[5].temp.min}
          label2={weather.daily[5].temp.max}
          dayweek = "5"
        />

        <Day 
          day={timestamps(weather.daily[6].dt)}
          image={`http://openweathermap.org/img/wn/${weather.daily[6].weather[0].icon}.png`}
          label1={weather.daily[6].temp.min}
          label2={weather.daily[6].temp.max}
          dayweek = "6"
        />
        
      </div>
     
      </div>
    
      <Switch>
        <Route path="/day/:nDay" exact component={DayDetails} />
        {/* <Route path="/Home" exact > </Route> */}
      </Switch>
      <footer>
      <Footer/>
      </footer>
      </Router>
      
    );
  }
}


export default App;



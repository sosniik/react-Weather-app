import React from 'react'
import Home from '/Users/leolemercier/Documents/cours_efrei/weather_app/weather/src/components/Home.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Day(props){
    return (
        <div>
            <p>{props.day}</p>
            <img src={props.image} alt="weather" ></img>
            <p><span>{props.label1} | </span>{props.label2}</p>
            <p><li><Link to={'/home'}> {props.texte} </Link></li></p>
            <Switch>
              <Route path='/Home' component={Home} />
              </Switch>
        </div>
    )
}


//<p><li><Link to={`${id}/Home`}> {props.texte} </Link></li></p>
           
import React from 'react'
import search from './searchBar'
import './Day.css'
import {
    Link
  } from "react-router-dom";

export default function Day(props){
    return (
        <div className="Day">
            <p>{props.hours}</p>
            <p className="centerDay">{props.day}</p>
            {/* <img src={props.image} alt="weather" ></img> */}
            <p><Link to={`/day/${props.dayweek}`}><p><img src={props.image} alt="weather" height="85" width="85"></img></p></Link></p>
            <p><span className="tempMin">{props.label1}°C | </span>{props.label2}°C</p>
            
        </div>
    )
}
// {/* <p><li><Link to={'/home'}> {props.texte} </Link></li></p>
// <Switch>
//   <Route path='/Home' component={Home} />
//   </Switch> */}

// //<p><li><Link to={`${id}/Home`}> {props.texte} </Link></li></p>
           
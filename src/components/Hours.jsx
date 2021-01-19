import React from 'react'
import './Day.css'
import {
    Link
  } from "react-router-dom";

export default function Hours(props){
    return (
        <div className="Day">
            <p>{props.hours}</p>
            {/* <img src={props.image} alt="weather" ></img> */}
            <p><img src={props.image} alt="weather" height="85" width="85"></img></p>
            <p>{props.label1}°C </p>
            
            
        </div>
    )
}
// {/* <p><li><Link to={'/home'}> {props.texte} </Link></li></p>
// <Switch>
//   <Route path='/Home' component={Home} />
//   </Switch> */}

// //<p><li><Link to={`${id}/Home`}> {props.texte} </Link></li></p>
           
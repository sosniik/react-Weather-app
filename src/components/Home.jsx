import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import '/Users/leolemercier/Documents/cours_efrei/weather_app/weather/src/components/App.jsx'
import App from './App.jsx'

export default function Home(){
  return (
    
      <div>
          <p>Ceci est un test </p>
          <p></p>
      </div>
  )
}


/* 
class Home extends Component {
  render() {
    return (
        <div>
          <h2>df</h2>
        </div>
    );
  }
}

export default Home; */

/* Le but est de pouvoir cliquer sur une des cards et d'afficher les données :
-tester si l'on peut affciher du texte personnalisé dans les différe,tes cards 
-récuperer les données et les traiter
-afficher un rendus  */
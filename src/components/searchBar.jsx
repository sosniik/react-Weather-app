import React from 'react'
import { useState } from 'react'

export default function SearchBar(props){
    const[Input,setInput] = useState(null) 
    console.log("coucou c'est un test "+ Input)
    return(
        <div>
            <p>Your selected the town : {Input}</p>
            <input
            className="input"
            value={props.Input}
            onChange={e => setInput(e.target.value)}
          />       
          <p>{props.item}</p>     
        </div>
    )
}

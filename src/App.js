import React, { useState } from 'react';

import './App.css';

function App() {
  var [output,setOutput]=useState(' output here');
  var message="Enter an Emoji or click on one to know its meaning"

  var database={
    
    '☔':"rainy", 
    "⚡":"thunderstorms",
    "🌞":"sunny",
    "🌀":"windy",
    "⛄":"snowfall",
    "⛅":"cloudy",
   
  
  };

  //let icons=["⛅","🌀","🌞","☔","⛄","⚡"];
  let icons=Object.keys(database);
  console.log(icons)

  function emojiClickHandler(emoji){

    console.log(emoji)
    var meaning= database[emoji];
    setOutput(meaning)

     }


  function inputHandler(e){   

    var userInput=e.target.value;
    var meaning= database[userInput];

    
    if(meaning===undefined){
      meaning="we dont have in db";
      setOutput(meaning);
    }
    else{
      setOutput(meaning);
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Weather Icon Interpreter</h1>
        <h5>{message}</h5>
        <input placeholder="input here" onChange={inputHandler}></input>
        
        <p>{output}</p>

        <h2>{icons.map((icon,index)=>
        <span className="emoji-render" onClick={()=>emojiClickHandler(icon)}>{icon}</span>)}</h2>


      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';

const App =(props)=>{
    return (
      <div className="bg-light-green dib br-3 pa-3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${props.id}?size=200x200`}/>
        <div>
          
          <h2>{props.name}</h2>
          <p> {props.email}</p>
        </div>
      </div>
    );
  }


export default App;

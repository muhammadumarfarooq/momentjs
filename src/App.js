import React from 'react';
import './App.css';
import moment from 'moment';

function App() {
  console.log(moment());
  console.log(moment().format("DD/MM/YYYY HH:mm:ss"));
  console.log(moment().format("DDD/MMM/YYYY HH:mm:ss")); //years day 115, 150 etc. month in english
  console.log(moment().format("ddd/MMM/YYYY HH:mm:ss")); //day in english
  console.log(moment().format("Do/MMMM/YY")); //add suffix
  console.log(moment().format("Do--MMMM--YY")); //special format
  return (
    <div className="App">
      <h1>Moment Js</h1>
      <h2>{moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
    </div>
  );
}

export default App;

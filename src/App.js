import React from 'react';
import './App.css';
import moment from 'moment';

function App() {
  const a = moment();
  console.log(a);
  // DATE
  console.log(a.format("DD/MM/YYYY HH:mm:ss"));
  console.log(a.format("DDD/MMM/YYYY HH:mm:ss")); //years day 115, 150 etc. month in english
  console.log(a.format("ddd/MMM/YYYY HH:mm:ss")); //day in english
  console.log(a.format("Do/MMMM/YY")); //add suffix
  console.log(a.format("Do--MMMM--YY")); //special format
  // TIME
  console.log(a.format("HH:mm:ss")); // 24 hour time
  console.log(a.format("hh:mm:ss")); // 12 hour time
  console.log(a.format("hh:mm A")); // 12 hour time with am/pm
  
  return (
    <div className="App">
      <h1>Moment Js</h1>
      <h2>{moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
    </div>
  );
}

export default App;

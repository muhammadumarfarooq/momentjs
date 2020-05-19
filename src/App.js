import React from 'react';
import './App.css';
import moment from 'moment';

function App() {
  console.log(moment());
  console.log(moment().format("DD/MM/YYYY HH:mm:ss"));
  return (
    <div className="App">
      <h1>Moment Js</h1>
      <h2>{moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
    </div>
  );
}

export default App;

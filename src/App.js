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
  //UNIX TIME STAMP
  console.log(a.format("X")); //timestamp in seconds
  console.log(a.format("x")); //in milliseconds
  
  //time 15minute interval
  
  function intervals(startString, endString) {
    var start = moment(startString, 'YYYY-MM-DD hh:mm a');
    var end = moment(endString, 'YYYY-MM-DD hh:mm a');
    
    // round starting minutes up to nearest 15 (12 --> 15, 17 --> 30)
    // note that 59 will round up to 60, and moment.js handles that correctly
    start.minutes(Math.ceil(start.minutes() / 15) * 15);
    
    var result = [];
    
    var current = moment(start);
    
    while (current <= end) {
      result.push(current.format('YYYY-MM-DD HH:mm'));
      current.add(15, 'minutes');
    }
    
    return result;
  }
  
  console.log(intervals('2016-08-10 4:35:00 PM', '2016-08-10 8:06:00 PM'));
  
  return (
    <div className="App">
      <h1>Moment Js</h1>
      <h2>{moment().format("DD/MM/YYYY HH:mm:ss")}</h2>
    </div>
  );
}

export default App;

import React, {useState} from 'react';

const App = () => {
const [currTime, setCurrTime] = useState(new Date().toLocaleTimeString());
const [currDate, setCurrDate] = useState(new Date().toLocaleDateString());
   const updateTime = () => {
    setCurrTime(new Date().toLocaleTimeString());
   };
   const updateDate = () => {
    setCurrDate(new Date().toLocaleDateString());
   };
   setInterval(updateTime,1000);
  //  setInterval(updateDate);
    return (
        <>
          <h2>{currTime}</h2>
          <h2>{currDate}</h2>
          <button onClick={updateTime}>Update Time</button> 
        </>
    )
}

export default App;
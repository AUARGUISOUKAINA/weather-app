import React, { useState } from "react";
import axios from "axios";
import "./App.css"

function App() {
    const [data,setdata]=useState({})
    const [location,setlocation]=useState("")
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c8c36980d91fd9cabdfc6e73085c5a80`


    const searchLocation= (e) =>{
      if(e.key ==="Enter")
      axios.get(url).then((response) =>{
        setdata(response.data)
        console.log(response.data)
      })
    }



  return (
    <div className="app">
      <div className="search">
        <input type="text"
        value={location}
        onKeyPress={searchLocation}
        onChange={e => setlocation(e.target.value)}
        placeholder="Enter Location"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="tempr">
            {data.main ? <h1>{data.main.temp}°F</h1>:null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> :null}
          </div>
        </div>
      {data.name !==undefined &&
      
      <div className="bottoms">
      <div className="feels">
        {data.main ?<p className="bold">{data.main.feels_like}°F</p> : null}
        <p>feels Like</p>
      </div>
      <div className="humidity">
        {data.main ? <p className="bold">{data.main.humidity}%</p> :null}
        <p>humidity</p>
      </div>
      <div className="wind">
         {data.wind ? <p className="bold">{data.wind.speed}MPH</p> :null}
         <p>wind speed</p>
      </div>
    </div>  
      }
      </div> 
    </div>
  );
}

export default App;

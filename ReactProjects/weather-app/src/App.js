import React, {useState} from "react"
// import './App.css';
import axios from "axios"
import "./index.css";
function App() {
  const [data,setData] =useState({})
  const [location,setLocation] = useState("")
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f0372c7cac2bf40519e3ae0a97c08428`

  const searchLocation = () => {
    axios.get(url).then((response) =>{
      setData(response.data)
      console.log(response.data)
    } 
    )
  }
  
  return (
    <div className="app">
      <div className="container">
      <div className="top">
        <div className="location">
          <p>Dallas</p>
        </div>
        <div className="temp">
          <h1>10°C</h1>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
    

      </div>
      <div className="bottom">
      <div className="feels">
          <p className="bold">8°C</p>
          <p>Feels Like</p>
        </div>
        <div className="humidity">
          <p>93%</p>
          <p>Humidity</p>
        </div>
        <div className="wind">
          12mph
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;

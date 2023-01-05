import React, {useState,useEffect} from "react"
// import './App.css';
import axios from "axios"
import "./index.css";
import Forecast from "./Forecast";
function App() {
  const [forecastData,setForecastData] = useState({})
  const [data,setData] =useState({})
  const [location,setLocation] = useState("")
  
  const API_KEY = "f0372c7cac2bf40519e3ae0a97c08428&"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f0372c7cac2bf40519e3ae0a97c08428&units=metric`
  const searchLocation = async(event) => {
    if(event.key === "Enter"){
     await axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
        const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=f0372c7cac2bf40519e3ae0a97c08428&units=metric`
        axios.get(forecast).then((response)=>{
          setForecastData(response.data)
          
        })
        console.log(forecastData)
        
    //         React.useEffect(() =>{
    //     axios.get(forecast).then((response) =>{
    //         setForecastData(response.data)
    //         console.log(response.data)
    //     });
    // },[]);
      } 
      )
          setLocation("")
    }
      }
     


    // React.useEffect(() =>{
    //     axios.get(forecastData).then((response) =>{
    //         setForecastData(response.data)
    //         console.log(response.data)
    //     });
    // },[]);
  
  
  return (
    <div className="app col">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        
        type="text" />
       
      </div>
      <div className="container">
        
      <div className="top">
        <div className="location">
          <p>{data.name}</p>
        </div>
        <div className="temp">
          {data.main ?<h1>{data.main.temp.toFixed()}°C </h1>: null }
        </div>
        <div className="description">
          {data.weather ?<p>{data.weather[0].main}</p>  : null }
          
        </div>
    

      </div>  
      {data.name != undefined &&
      <div className="bottom">
      <div className="feels">
          <p>Feels Like</p>
          {data.main ?<p className="bold">{data.main.feels_like.toFixed()}°C</p>: null }
        </div>
        <div className="humidity">
          <p>Humidity</p>
          {data.main ?<p className="bold">{data.main.humidity}%</p>: null }
        </div>
        <div className="wind">
          <p>Wind Speed</p>
          {data.wind ?<p className="bold">{data.wind.speed.toFixed()}Km/h</p>: null }
        </div>
        <div className="pressure">
          <p>Pressure</p>
          {data.main ?<p className="bold">{data.main.pressure.toFixed()}mbar</p>: null }
        </div>
        
        <div className="country">
          <p>Country</p>
          {data.sys ?<p className="bold">{data.sys.country}</p>: null }
        </div>

      </div>
    }
    
    {/* <Forecast data={forecastData}/> */}
    {/* <div class="row">
  <div class="col-sm-2 mb-3 mb-sm-0">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{forecastData.list[0].dt_txt}</h5>
        <p class="card-text">{forecastData.list[0].main.temp_min / forecastData.list[0].main.temp_max  }</p>
        <p><span>{forecastData.list[0].weather.description}</span></p>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{forecastData.list[1].dt_txt}</h5>
        <p class="card-text">{forecastData.list[1].main.temp_min / forecastData.list[1].main.temp_max  }</p>
        <p><span>{forecastData.list[1].weather.description}</span></p>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">forecastData.list[2].dt_txt</h5>
        <p class="card-text">{forecastData.list[2].main.temp_min / forecastData.list[2].main.temp_max  }</p>
        <p><span>{forecastData.list[2].weather.description}</span></p>
      </div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">forecastData.list[3].dt_txt</h5>
        <p class="card-text">{forecastData.list[3].main.temp_min / forecastData.list[3].main.temp_max  }</p>
        <p><span>{forecastData.list[3].weather.description}</span></p></div>
    </div>
  </div>
  <div class="col-sm-2">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">forecastData.list[4].dt_txt</h5>
        <p class="card-text">{forecastData.list[4].main.temp_min / forecastData.list[4].main.temp_max  }</p>
        <p><span>{forecastData.list[4].weather.description}</span></p></div>
    </div>
  </div>
</div> */}
    </div>
    </div>
  );
}

export default App;

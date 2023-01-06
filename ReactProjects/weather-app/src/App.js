import React, {useState,useEffect, useCallback} from "react"
import axios from "axios"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCloud} from "@fortawesome/free-solid-svg-icons"
import {faCloudRain} from "@fortawesome/free-solid-svg-icons"
import {faCloudSun} from "@fortawesome/free-solid-svg-icons"
import {faSnowflake} from "@fortawesome/free-solid-svg-icons"

import "./index.css";
function  App(){
  const [forecastData,setForecastData] = useState({})
  const [data,setData] =useState({})
  const [location,setLocation] = useState("")
  let sayac =0
  const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=f0372c7cac2bf40519e3ae0a97c08428&units=metric`
  const API_KEY = "f0372c7cac2bf40519e3ae0a97c08428&"
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=f0372c7cac2bf40519e3ae0a97c08428&units=metric`
  const searchLocation = async(event) => {
    if(event.key === "Enter"){
      sayac += 1
   await axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
        // const forecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=f0372c7cac2bf40519e3ae0a97c08428&units=metric`
        axios.get(forecast).then((response)=>{
        setForecastData(response.data)
          console.log(response.data)
        })
        console.log(forecastData)
      } 
      )
          setLocation("")
          setForecast();
          console.log(sayac)
    }
      
      }
   
   const setForecast = async() =>{
   await axios.get(forecast).then((response =>{
      setForecastData(response.data);
      console.log(response.data)
      console.log(forecastData)
      setTimeout({
        searchLocation  
      },2000)
    }))
    console.log(forecastData)
   }
  
  
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
          <div className="icon">
      {data.weather?.[0].main ==="Clouds" ?  <FontAwesomeIcon className="icon" icon={faCloud}></FontAwesomeIcon>  : null }
      {data.weather?.[0].main ==="Mist" ?  <FontAwesomeIcon className="icon" icon={faCloud}></FontAwesomeIcon>  : null }
      {data.weather?.[0].main ==="Rain" ?  <FontAwesomeIcon className="icon" icon={faCloudRain}></FontAwesomeIcon>  : null }
      {data.weather?.[0].main ==="Clear" ?  <FontAwesomeIcon className="icon" icon={faCloudSun}></FontAwesomeIcon>  : null }
      {data.weather?.[0].main ==="Snow" ?  <FontAwesomeIcon className="icon" icon={faSnowflake}></FontAwesomeIcon>  : null }
      </div>
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
  { forecastData.list != undefined && <div className="row">
  <div className="col-sm-4 mb-3 mb-sm-0 ">
    <div className="card">
      <div className="card-body">
      { forecastData.list ? <h5 className="card-title">{forecastData.list[1].dt_txt}</h5> : null}
      {forecastData.list ? <p className="card-text">{forecastData.list[1].main.temp_min.toFixed() }°C / { forecastData.list[1].main.temp_max.toFixed()  }°C</p> : null}
      {forecastData.list ?  <p><span>{forecastData.list[1].weather[0].description}</span></p>: null}
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      {forecastData.list ?   <h5 className="card-title">{forecastData.list[9].dt_txt}</h5>: null}
      {forecastData.list ? <p className="card-text">{forecastData.list[9].main.temp_min.toFixed()}°C / { forecastData.list[9].main.temp_max.toFixed() }°C</p>: null}
      {forecastData.list ?  <p><span>{forecastData.list[9].weather[0].description}</span></p>: null}
      </div>
    </div>
  </div>
  <div className="col-sm-4">
    <div className="card">
      <div className="card-body">
      {forecastData.list ?<h5 className="card-title">{forecastData.list[17].dt_txt}</h5>: null}
      {forecastData.list ?  <p className="card-text">{forecastData.list[17].main.temp_min.toFixed() }°C / {forecastData.list[17].main.temp_max.toFixed()  }°C</p>: null}
      {forecastData.list ?   <p><span>{forecastData.list[17].weather[0].description}</span></p>: null}
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      { forecastData.list ? <h5 className="card-title">{forecastData.list[25].dt_txt}</h5>: null}
      {forecastData.list ?  <p className="card-text">{forecastData.list[25].main.temp_min.toFixed() }°C / {forecastData.list[25].main.temp_max.toFixed()  }°C</p>: null}
      { forecastData.list ?  <p><span>{forecastData.list[25].weather[0].description}</span></p>: null}
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
      { forecastData.list ? <h5 className="card-title">{forecastData.list[33].dt_txt}</h5>: null}
      { forecastData.list ? <p className="card-text">{forecastData.list[33].main.temp_min.toFixed() }°C / { forecastData.list[33].main.temp_max.toFixed()  }°C</p>: null}
      { forecastData.list ?  <p className="desc">{forecastData.list[33].weather[0].description}
      <div className="icons">
      { forecastData.list[33].weather[0].description === "clear sky"?   <FontAwesomeIcon className="iconsBottom" icon={faCloudSun}></FontAwesomeIcon>: null}
      { forecastData.list[33].weather[0].description === "scattered clouds"?   <FontAwesomeIcon className="iconsBottom" icon={faCloud}></FontAwesomeIcon>: null}
      { forecastData.list[33].weather[0].description === "light rain"?   <FontAwesomeIcon className="iconsBottom" icon={faCloudRain}></FontAwesomeIcon>: null}
      { forecastData.list[33].weather[0].description === "few clouds"?   <FontAwesomeIcon className="iconsBottom" icon={faCloudSun}></FontAwesomeIcon>: null}
      { forecastData.list[33].weather[0].description === "overcast clouds"?   <FontAwesomeIcon className="iconsBottom" icon={faCloud}></FontAwesomeIcon>: null}
      { forecastData.list[33].weather[0].description === "broken clouds"?   <FontAwesomeIcon className="iconsBottom" icon={faCloud}></FontAwesomeIcon>: null}
      { forecastData.list[33].weather[0].description === "moderate rain"?   <FontAwesomeIcon className="iconsBottom" icon={faCloudRain}></FontAwesomeIcon>: null}
      { forecastData.list[33].weather[0].description === "light snow"?   <FontAwesomeIcon className="iconsBottom" icon={faSnowflake}></FontAwesomeIcon>: null}
      { forecastData.list[33].weather[0].description === "snow"?   <FontAwesomeIcon className="iconsBottom" icon={faSnowflake}></FontAwesomeIcon>: null}
      </div>
      </p> : null}
      </div>
    </div>
  </div>
  </div>}
    </div>
    </div>
  );
}

export default App;

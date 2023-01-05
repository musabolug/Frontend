import axios from 'axios'
import React, { useEffect , useState } from 'react'

function Forecast({data}) {
    const forecastData = data

    // React.useEffect(() =>{
    //     axios.get(forecast).then((response) =>{
    //         setForecastData(response.data)
    //         console.log(response.data)
    //     });
    // },[]);
  return (
<div>
<div class="row">
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
</div>
    </div>
  )
}

export default Forecast
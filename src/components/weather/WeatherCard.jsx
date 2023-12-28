// import React from 'react'
import { useEffect, useState } from "react";
import "./style.css"
import { IoLocationSharp } from "react-icons/io5";

const WeatherCard = ({ tempInfo }) => {
  const[weatherState,setWeatherState]=useState("")
  const {temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset } = tempInfo
  
  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds": setWeatherState("wi-day-cloudy");
          break;
        case "Rain": setWeatherState("wi-rain");
          break;
        case "Haze": setWeatherState("wi-fog");
          break;
        case "Mist": setWeatherState("wi-dust");
          break;
        case "Clear": setWeatherState("wi-day-sunny");
          break;
        
        default:setWeatherState("wi-day-sunny")
          break;
    }
  } 
  },[weathermood])
  // conv second to time
  let sec = sunset;
  let date = new Date(sec * 1000)
  let timeStr=date.toLocaleString('NPT', { hour: 'numeric',minute:'numeric', hour12: true })
  // let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="place__temp__details">
      <div className="place">
               <IoLocationSharp/> {name}, {country}
            </div>
        <div className="weatherInfo">
          <div className="temperature">
              <span><i className={`wi wi-thermometer`}></i> {temp}<i className={`wi wi-celsius`}></i></span>
              <div className="state__weather">
            <div className="weatherIcon">
                     <i className={`wi ${weatherState}` }></i>
              </div>
            <div className="weatherCondition">{weathermood}</div>
            </div>
              </div>
          </div>
         
        </div>

       
        {/* 4 column section */}
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {timeStr} <br />
                Sunset
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} 
                <br />
                Humidity
              </p>
            </div>
          </div>
          <div className='weather-extra-info'>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
              {pressure} 
                <br />
                Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                 Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default WeatherCard
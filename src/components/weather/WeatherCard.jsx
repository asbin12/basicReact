// import React from 'react'
import { useEffect, useState } from "react";
import "./style.css"
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineVisibility } from "react-icons/md";

const WeatherCard = ({ tempInfo }) => {
  const [weatherState, setWeatherState] = useState("")
  const [iconColor, setIconColor] = useState('white');
  const { temp,
    feels_like,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    visibility,
    country,
    sunrise,
    sunset } = tempInfo
  
  let removingDeci = temp;
  let temperature = Math.floor(removingDeci)
  console.log(temperature)
  let curTime = new Date()
  let disTime=curTime.toLocaleString('NPT', { hour: "2-digit",
    minute: "2-digit"
  }).replace(/AM|PM/,'')
  // disTime.replace("AM", "").replace("PM", "")
  let options = { weekday: 'long', day: 'numeric', month: 'short' };
  let formattedDate = curTime.toLocaleDateString('en-US', options);


  useEffect(() => {
    if (weathermood) {
      switch (weathermood) {
        case "Clouds": setWeatherState("wi-cloudy");
          break;
        case "Rain": setWeatherState("wi-rain");
          break;
        case "Haze": setWeatherState("wi-fog");
          break;
        case "Mist": setWeatherState("wi-dust");
          break;
        case "Smoke": setWeatherState("wi-smoke"
        );
          break;
        case "Clear": setWeatherState("wi-day-sunny");
        setIconColor('yellow');
          break;
        
        default:setWeatherState("wi-day-sunny")
          break;
    }
  } 
  },[weathermood])
  // conv second to time
  //sunset time
  let sec = sunset;
  let date = new Date(sec * 1000)
  let timeStr = date.toLocaleString('NPT', { hour: 'numeric', minute: 'numeric', hour12: true })
  //sunrise time
  let sunriseTime = sunrise
  let sunRiseConv= new Date(sunriseTime * 1000)
  let sunriseTimeStr = sunRiseConv.toLocaleString('NPT', { hour: 'numeric', minute: 'numeric', hour12: true })
  // console.log(sunriseTimeStr)
  return (
    <>
      <section className="cards">
        <div className="date__time">
          <p className="athens"> 
               <IoLocationSharp/> {name}, {country}
       
            </p>
          <span className="feels__like"><p>Feels:</p>{feels_like}&deg;C</span>
          <span className="days__date__time">
            <p className="time">{disTime}</p>
            <p className="curDate">{formattedDate}</p>
          </span>
      </div>
        <div className="weather__card__details">
          <div className="temp__feel__sun">
            <div className="temp__feels__details">
            <span className="temp__details">{temperature}&deg;C</span>
            </div>
            <div className="sunrise__sunset__details">
              <div className="icons__text">
                <i className={`wi wi-sunrise`} style={{color:'yellow'}}></i>
                <span className="text__data">
                <p className="sun__details">Sunrise</p>
                  <p className="sun__details__time">{sunriseTimeStr}</p>
                </span>
              </div>
              <div className="icons__text">
                <i className="wi wi-sunset" style={{ color: 'yellow' }}
                ></i>
                <span className="text__data">
                <p className="sun__details">Sunset</p>
                  <p className="sun__details__time">{timeStr}</p>
                </span>
              </div>
            </div>
            
          </div>
          <div className="humidity__pressure__wind__deg">
          <div className="humidity__pressure">
          <div className="humidity icons__text__cols">
            <i className={`wi wi-humidity`}></i>
            <span className="text__data__cols">
                <p>{ humidity}</p>
              <p>Humidity</p>
            </span>
          </div>
          <div className="pressure icons__text__cols">
            <i className={`wi wi-rain`}></i>
            <span className="text__data__cols">
                <p>{pressure}</p>
              <p>Pressure</p>
            </span>
          </div>
        </div>
          <div className="wind__deg">
          <div className="wind icons__text__cols">
            <i className={`wi wi-strong-wind`}></i>
            <span className="text__data__cols">
                <p>{speed}</p>
              <p>W.Speed</p>
            </span>
          </div>
          <div className="deg icons__text__cols">
                {/* <i className={`wi wi-degrees`}></i> */}
               <i className="visibility"><MdOutlineVisibility/></i> 
            <span className="text__data__cols">
                <p>{visibility}</p>
              <p>Visibility</p>
            </span>
          </div>
        </div>
        </div>
        </div>
        <div className="weather__status__details">
<i className={`wi ${weatherState}`} style={{color:iconColor}}></i>
<p className="weather__details">{ weathermood}</p>
</div>
       
        </section>
    </>
  )
}

export default WeatherCard



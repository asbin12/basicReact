import { useEffect, useState } from 'react'
import "./style.css"
import WeatherCard from './WeatherCard'
import Navbar from './Navbar'
const Weather = () => {


  const [searchValue, setSearchValue] = useState("Kathmandu")
  const[tempInfo,setTempInfo]=useState({})
  const getWeatherInfo = async() => {
    try { 
      let url=`https://api.openweathermap.org/data/2.5/weather?q=
      ${searchValue}&units=metric&appid=11b982466c7ef940b676a390c02e8212`
      const res = await fetch(url)
      const data = await res.json()
      const { temp, humidity, pressure } = data.main;
      console.log(temp)
      const { main: weathermood } = data.weather[0]
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys
      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset
      }
      setTempInfo(myNewWeatherInfo)
    } catch (error) {
      console.log(error)
    }
   }
  useEffect( () => {
    getWeatherInfo()
  },[])
  return (
    <>
      <Navbar/>
      <div className='wrap'>
        <div className="search">
          <input type="search"
            placeholder='search...'
            autoFocus
            id="search"
            className='searchTerm'
            value={ searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}/> 
          <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
        </div>
      </div>
      {/* out temp card */}
      <WeatherCard tempInfo={ tempInfo} />
    </>
  )
}

export default Weather
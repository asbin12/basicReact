import { useEffect, useState } from 'react'
import "./weather.css"
import WeatherCard from './WeatherCard'
import Navbar from './Navbar'
import { CiSearch } from "react-icons/ci";
import {  CirclesWithBar } from 'react-loader-spinner'
const Weather = () => {


  const [searchValue, setSearchValue] = useState("Kathmandu")
  const [tempInfo, setTempInfo] = useState({})
  const [isLoading,setLoading]=useState(true)
  const getWeatherInfo = async() => {
    try { 
      let url=`https://api.openweathermap.org/data/2.5/weather?q=
      ${searchValue}&units=metric&appid=11b982466c7ef940b676a390c02e8212`
      const res = await fetch(url)
      // console.log(`This is response`,res.status)
      if (res.status === 200) {
        setLoading(false)
      }
     const data = await res.json()
      console.log(data)
      const { temp,feels_like, humidity, pressure } = data.main;
      // console.log(temp)
      const { main: weathermood } = data.weather[0]
      const { name } = data;
      const { visibility } = data;
      const { speed } = data.wind;
      const { country,sunrise, sunset } = data.sys
      const myNewWeatherInfo = {
        temp,
        feels_like,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        visibility,
        country,
        sunrise,
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
      <section className='wrap'>
      <Navbar/>
      <div className="search">
        <input
          placeholder='search your preferred city'
          // autoFocus
          id="search"
          className='searchTerm'
          value={ searchValue}
        onChange={(e)=>setSearchValue(e.target.value)}/> 
        <button className="searchButton" type="button" onClick={getWeatherInfo}><CiSearch/></button>
      </div>
  {isLoading ? (
          <div className='page__loader'><CirclesWithBar
            
    height="100"
    width="100"
    color="#4fa94d"
    outerCircleColor="#4fa94d"
    innerCircleColor="#4fa94d"
    barColor="#4fa94d"
    ariaLabel="circles-with-bar-loading"
    wrapperStyle={{}}
    wrapperClass=""
            visible={true}
    /></div>
          ) : (
            <div>
              
   
    <WeatherCard tempInfo={ tempInfo} />
        </div>      
  )}
</section>      
        
      
    </>
  )
}

export default Weather
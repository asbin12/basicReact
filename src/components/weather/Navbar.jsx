// import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <>
      <header className='header'>
        <div className="logo">
          <h2>WeatherMe</h2>
          <figure>
            <img src="./images/weather.png" alt="" />
          </figure>
          <div className="date">
            {new Date().toLocaleString('NPT', { hour: 'numeric',minute:'numeric', hour12: true })}
        </div>
        </div>
        <nav>
          <ul>
            <li><a href="#">Today</a></li>
            <li><a href="#">Tomorrow</a></li>
            <li><a href="#">Monthly Forecast</a></li>
            <span></span>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar
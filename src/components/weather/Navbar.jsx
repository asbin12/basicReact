// import React from 'react'
import { useEffect, useState } from 'react';
import './navbar.css'
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const body = document.body;
    body.classList.toggle('dark-mode', darkMode);
    body.classList.toggle('light-mode', !darkMode);
  }, [darkMode]);

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

          </ul>


        </nav>
        <div className={darkMode ? "dark-mode" : "light-mode"}>
        <div className="switch-container">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round" />
          </label>
          <label className="switch-label">{darkMode ? "Dark" : "Light"}</label>
        </div>
      
      </div>
      </header>
    </>
  )
}

export default Navbar
import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import TitleCard from '../../Components/Title/TitleCard'


function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner-img' />
        <div className="hero-caption">
          <img src={hero_title} alt="" className='caption-img' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, culpa rem? Libero necessitatibus dolorum, error nostrum officiis assumenda nulla iure atque eius incidunt temporibus fuga possimus illum voluptatum provident excepturi.
          </p>
          <div className="hero-btns">
           <button className='btn'><img src={play_icon} alt="" />play</button>
           <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
          </div>
          <TitleCard/>
        </div>

      </div>
    </div>
  )
}

export default Home

import React, { useEffect, useRef, useState } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'



function TitleCard({title, category}) {
  const [apiData, setApiData] =useState([]);
  const cardsRef =useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTM1OWUzNzNiMDhmMWJjZDdhZDcwZjYxMGQyZmU2ZiIsIm5iZiI6MTczNTgyMjY5Mi4zNDgsInN1YiI6IjY3NzY4ZDY0ZGQxNzljNWIzNTkyOTBmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10CRChb6cv2KW17vjlagk6gR9crFRXmW5sSxCm66qZY'
    }
  };
  
 

const handelWheel = (event)=>{
  event.perventDefault();
  cardsRef.current.scrollLeft += event.deltaY;

}

useEffect(()=>{
  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel', handelWheel);
},[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index)=>{
                  return <div className='card' key={index}>
                    <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" /> 
                    <p>{card.original_title}</p>
                    </div>
        })}
      </div>
    </div>
  )
}

export default TitleCard

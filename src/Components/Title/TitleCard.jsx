import React, { useEffect, useRef } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'



function TitleCard({title, category}) {
  
  const cardsRef =useRef();

const handelWheel = (event)=>{
  event.perventDefault();
  cardsRef.current.scrollLeft += event.deltaY;

}

useEffect(()=>{
  cardsRef.current.addEventListener('wheel', handelWheel);
},[])
  return (
    <div className='title-cards'>
      <h2>{title?title:"popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index)=>{
                  return <div className='card' key={index}>
                    <img src={card.image} alt="" /> 
                    <p>{card.name}</p>
                    </div>
        })}
      </div>
    </div>
  )
}

export default TitleCard

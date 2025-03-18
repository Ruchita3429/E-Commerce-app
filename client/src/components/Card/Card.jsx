import React from 'react'
import "./Card.scss"
import {Link} from "react-router-dom"

const Card = ({item}) => {
  return (
    <Link to={`/product/${item.id}`} className="card-link">
      <div className='card'>
        <div className="image">
          {item?.isNew && <span>NEW SEASON</span>}
          <img src={item.img} alt={item.title} className='mainImg'/>
          <img src={item.img2} alt={item.title} className='secondImg'/>
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
          <h3>Rs.{item.oldPrice}</h3>
          <h3>Rs.{item.price}</h3>
        </div>
      </div>
    </Link>
  )
}

export default Card
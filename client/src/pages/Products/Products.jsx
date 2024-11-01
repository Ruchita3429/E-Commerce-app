import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'

const Products = () => {
  const catId = parseInt(useParams().id)
  const[maxPrice , setMaxPrice] = useState(1000);
  const[sort , setSort] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
        <h2>Product Categories</h2>
        <div className="inputItem">
        <input type='checkbox' catIdid='1' value={1}/>
        <lable htmlFor="1">Shoes</lable>
        </div>
        <div className="inputItem">
        <input type='checkbox' id='2' value={2}/>
        <lable htmlFor="2">Skirts</lable>
        </div>
        <div className="inputItem">
        <input type='checkbox' id='3' value={3}/>
        <lable htmlFor="3">Pants</lable>
        </div>
        </div>
        
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type='range' min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by </h2>
          <div className="inputItem">
          <input type="radio" id="asc"  value="asc"name="price" onChange={e => setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
          <input type="radio" id="asc"  value="desc"name="price"  onChange={e => setSort("desc")} />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
      <img className="catImg"
       src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" 
      alt="" /> 
      <List catId={catId} maxPrice={maxPrice} sort={sort}/>
      </div>

    </div>
  )
}

export default Products
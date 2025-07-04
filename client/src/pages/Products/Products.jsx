import React, { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'

const subcategories = [
  { id: 'shoes', label: 'Shoes' },
  { id: 'skirts', label: 'Skirts' },
  { id: 'pants', label: 'Pants' },
  { id: 'tops', label: 'Tops' },
  { id: 'dresses', label: 'Dresses' },
  { id: 'accessories', label: 'Accessories' },
];

const Products = () => {
  const catId = useParams().id; // now a string: 'men', 'women', 'children'
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null)
  const [selectedSubcategories, setSelectedSubcategories] = useState([])

  const handleSubcategoryChange = (e) => {
    const value = e.target.value;
    setSelectedSubcategories(prev =>
      e.target.checked
        ? [...prev, value]
        : prev.filter(cat => cat !== value)
    );
  };

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {subcategories.map(sub => (
            <div className="inputItem" key={sub.id}>
              <input type='checkbox' id={sub.id} value={sub.id} onChange={handleSubcategoryChange}/>
              <label htmlFor={sub.id}>{sub.label}</label>
            </div>
          ))}
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
            <input type="radio" id="asc" value="asc" name="price" onChange={e => setSort("asc")}/>
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" id="desc" value="desc" name="price" onChange={e => setSort("desc")}/>
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className="catImg"
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600" 
          alt="Category" 
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subcategories={selectedSubcategories}/>
      </div>
    </div>
  )
}

export default Products
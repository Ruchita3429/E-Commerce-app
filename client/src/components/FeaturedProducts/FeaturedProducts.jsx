import React, { useEffect, useState } from 'react'
import "./FeaturedProducts.scss"
import Card from "../Card/Card"
import axios from "axios"

const FeaturedProducts = ({type}) => {

  
  const[data , setData] = useState([]) ;

  useEffect(() => {
   const fetchData = async ()=>{
    try{
      const res = await axios.get(import.meta.env.VITE_API_URL + "/products" , {
        headers:{ 
          Authorization: "Bearer " + import.meta.env.VITE_API_TOKEN
 ,
        }

      });
      console.log(res.data);
      setData(res.data.data);
    }catch (err) {
      console.log(err);
    }
   }
   fetchData();

  },[]);

  return (
    <div className='featuredProducts'> 
    <div className="top"> <h1>{type} products</h1>
    <p>Explore our Trending & Featured Products—a curated collection of this season’s hottest finds! From game-changing tech to fashion-forward styles, these top-rated picks are flying off the shelves. Don't miss out on what everyone’s raving about—shop now and upgrade your lifestyle with the best of the best!</p>
    </div>
    <div className="bottom">
     {Array.isArray(data) && data.map(item => 
     <Card item={item} key={item.id}/>)}
    </div>
    </div>
  )
}

export default FeaturedProducts
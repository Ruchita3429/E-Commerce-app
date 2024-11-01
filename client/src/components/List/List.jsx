import React from 'react'
import "./List.scss"
import Card from "../Card/Card"

const List = () => {

  const data = [
    {  id:1,
      img: "https://images.pexels.com/photos/4937359/pexels-photo-4937359.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      img2 :"https://images.pexels.com/photos/4937450/pexels-photo-4937450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew:true,
      oldPrice: 19,
      price : 12,
  
    },
    {  id:2,
      img :"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      isNew:false,
      oldPrice: 19,
      price : 12,
  
    },
    {  id:3,
      img :"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      isNew:false,
      oldPrice: 19,
      price : 12,
  
    },
    
    {  id:4,
      img :"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      isNew:false,
      oldPrice: 19,
      price : 12,
  
    },
  ]  

  return (
    <div className='list'>{data?.map((item)=> <Card item={item} key={item.id}/>)}
    </div>
  )
}

export default List
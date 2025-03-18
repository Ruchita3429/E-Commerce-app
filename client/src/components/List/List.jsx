import React from 'react'
import "./List.scss"
import Card from "../Card/Card"

const List = () => {

  const data = [
    {
      id: 1,
      title: "Long Sleeve Graphic T-shirt",
      img: "https://images.pexels.com/photos/4937359/pexels-photo-4937359.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      img2: "https://images.pexels.com/photos/4937450/pexels-photo-4937450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: true,
      oldPrice: 280,
      price: 180,
    },
    {
      id: 2,
      title: "Denim Jacket",
      img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=1600",
      isNew: false,
      oldPrice: 350,
      price: 250,
    },
    {
      id: 3,
      title: "Summer Dress",
      img: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/2235072/pexels-photo-2235072.jpeg?auto=compress&cs=tinysrgb&w=1600",
      isNew: true,
      oldPrice: 400,
      price: 300,
    },
    {
      id: 4,
      title: "Leather Bag",
      img: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/207300/pexels-photo-207300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      isNew: false,
      oldPrice: 550,
      price: 450,
    },
  ];

  return (
    <div className='list'>{data?.map((item) => <Card item={item} key={item.id}/>)}
    </div>
  )
}

export default List
import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {  id:1,
      img: "https://images.pexels.com/photos/4937359/pexels-photo-4937359.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      img2 :"https://images.pexels.com/photos/4937450/pexels-photo-4937450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "T-shirt",
      desc:"Long sleeve graphic t shirt",
      isNew:true,
      oldPrice: 19,
      price : 12,
  
    },
    {  id:2,
      img :"https://images.pexels.com/photos/949670/pexels-photo-949670.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "T-shirt",
      desc:"Long sleeve graphic t shirt",
      isNew:false,
      oldPrice: 19,
      price : 12,
  
    },
  ]

  return (
    <div className='cart'>
     <h1>Products in your cart</h1>
     {data?.map(item=>(
      <div className="item" key={item.id}>
        <img src={item.img} alt=""/>
        <div className="details">
          <h1>{item.title}</h1>
          <p>{item.desc?.substring(0,100)}</p>
          <div className="price">1 x Rs.{item.price}</div>
        </div>
        <DeleteOutlinedIcon className='delete'/>
      </div>
     ))}
    <div className="total">
      <span>SUBTOTAL</span>
      <span>Rs.120</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
    <span className='reset'>RESET CART</span>
    </div>
  )
}

export default Cart
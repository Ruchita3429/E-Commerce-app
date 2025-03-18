import React from 'react'
import "./Cart.scss"
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useCart } from '../../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, resetCart, getCartTotal } = useCart();

  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div className="item" key={item.id}>
              <img src={item.images?.[0] || item.img} alt={item.title}/>
              <div className="details">
                <h1>{item.title}</h1>
                <p>{item.desc?.substring(0, 100)}</p>
                <div className="price">{item.quantity} x Rs.{item.price}</div>
              </div>
              <DeleteOutlinedIcon 
                className='delete' 
                onClick={() => removeFromCart(item.id)}
              />
            </div>
          ))}
          <div className="total">
            <span>SUBTOTAL</span>
            <span>Rs.{getCartTotal()}</span>
          </div>
          <button>PROCEED TO CHECKOUT</button>
          <span className='reset' onClick={resetCart}>RESET CART</span>
        </>
      )}
    </div>
  )
}

export default Cart
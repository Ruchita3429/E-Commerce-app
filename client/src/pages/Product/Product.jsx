import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);
  const { addToCart } = useCart();

  // In a real app, you would fetch product data based on id
  const product = {
    id: parseInt(id),
    title: "Floral Maxi Dress",
    price: 200,
    desc: "Embrace effortless elegance with our Women's Floral Maxi Dress, designed for the free-spirited woman. Perfect for summer outings, beach days, or garden parties, this dress combines comfort with a stunning bohemian flair.",
    images: [
      "https://images.pexels.com/photos/4937359/pexels-photo-4937359.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      "https://images.pexels.com/photos/4937450/pexels-photo-4937450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ]
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={product.images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
          <img src={product.images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImg">
          <img src={product.images[selectedImg]} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>{product.title}</h1>
        <span>Rs.{product.price}</span>
        <p>{product.desc}</p>
        <div className="quantity">
          <button onClick={()=> setQuantity((prev)=> (prev === 1 ? 1 : prev - 1))}>-</button>
          {quantity}
          <button onClick={()=> setQuantity((prev)=> prev + 1)}>+</button>
        </div>
        <button className='add' onClick={handleAddToCart}>
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
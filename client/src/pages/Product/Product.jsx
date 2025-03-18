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

  // Sample product data - in a real app, this would come from an API
  const products = {
    1: {
      id: 1,
      title: "Long Sleeve Graphic T-shirt",
      price: 180,
      oldPrice: 280,
      desc: "A stylish long sleeve t-shirt featuring a unique graphic design. Made from premium cotton for comfort.",
      img: "https://images.pexels.com/photos/4937359/pexels-photo-4937359.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      img2: "https://images.pexels.com/photos/4937450/pexels-photo-4937450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      isNew: true
    },
    2: {
      id: 2,
      title: "Denim Jacket",
      price: 250,
      oldPrice: 350,
      desc: "Classic denim jacket with modern styling. Perfect for casual wear and layering.",
      img: "https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=1600",
      isNew: false
    },
    3: {
      id: 3,
      title: "Summer Dress",
      price: 300,
      oldPrice: 400,
      desc: "Light and breezy summer dress perfect for warm weather. Features a flattering silhouette.",
      img: "https://images.pexels.com/photos/2235071/pexels-photo-2235071.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/2235072/pexels-photo-2235072.jpeg?auto=compress&cs=tinysrgb&w=1600",
      isNew: true
    },
    4: {
      id: 4,
      title: "Leather Bag",
      price: 450,
      oldPrice: 550,
      desc: "Elegant leather bag with multiple compartments and adjustable strap.",
      img: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1152076/pexels-photo-1152076.jpeg?auto=compress&cs=tinysrgb&w=1600",
      isNew: false
    }
  };

  const product = products[id] || products[1]; // Fallback to first product if ID not found

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img 
            src={product.img} 
            alt="" 
            onClick={() => setSelectedImg(0)}
            className={selectedImg === 0 ? "selected" : ""}
          />
          <img 
            src={product.img2} 
            alt="" 
            onClick={() => setSelectedImg(1)}
            className={selectedImg === 1 ? "selected" : ""}
          />
        </div>
        <div className="mainImg">
          <img src={selectedImg === 0 ? product.img : product.img2} alt="" />
        </div>
      </div>

      <div className="right">
        <h1>{product.title}</h1>
        <div className="prices">
          <h3>Rs.{product.oldPrice}</h3>
          <h3>Rs.{product.price}</h3>
        </div>
        <p>{product.desc}</p>
        <div className="quantity">
          <button onClick={() => setQuantity(prev => (prev === 1 ? 1 : prev - 1))}>-</button>
          <span>{quantity}</span>
          <button onClick={() => setQuantity(prev => prev + 1)}>+</button>
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
          <span>Product Type: {product.id <= 2 ? 'Clothing' : 'Accessories'}</span>
          <span>Tag: Fashion, {product.id <= 2 ? 'Apparel' : 'Accessories'}</span>
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
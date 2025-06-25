import React, { useState } from 'react'
import "./Product.scss"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import products from '../../data/product';

const Product = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImg, setSelectedImg] = useState(0);
  const { addToCart } = useCart();

  const product = products.find(item => item.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

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
          <span>Product Type: {product.category}</span>
          <span>Tag: Fashion, {product.category}</span>
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